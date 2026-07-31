import { NextResponse } from "next/server";
import { sendContactEmail } from "@/lib/mailer";

export const runtime = "nodejs";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  const { name, phone, email, message } = (body ?? {}) as Record<string, unknown>;

  if (
    typeof name !== "string" ||
    !name.trim() ||
    typeof phone !== "string" ||
    !phone.trim() ||
    typeof email !== "string" ||
    !email.trim()
  ) {
    return NextResponse.json(
      { ok: false, error: "Name, phone, and email are required." },
      { status: 400 },
    );
  }

  try {
    await sendContactEmail({
      name: name.trim(),
      phone: phone.trim(),
      email: email.trim(),
      message: typeof message === "string" ? message.trim() : undefined,
    });
    return NextResponse.json({ ok: true });
  } catch (error) {
    // Log only safe diagnostic fields server-side (never credentials, never the raw
    // error object, which for some SMTP client errors can echo connection details).
    const err = error as { message?: string; name?: string; code?: string; responseCode?: number };
    console.error("[contact-form] SMTP send failed:", {
      timestamp: new Date().toISOString(),
      name: err?.name,
      code: err?.code,
      responseCode: err?.responseCode,
      message: err?.message,
    });
    return NextResponse.json(
      { ok: false, error: "Failed to send message. Please try again later." },
      { status: 502 },
    );
  }
}
