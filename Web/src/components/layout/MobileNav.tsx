"use client";

import { useEffect, useState } from "react";
import { IconClose, IconMenu } from "@/components/icons";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import type { NavLink } from "@/types";

interface MobileNavProps {
  links: NavLink[];
  activeId: string;
}

export function MobileNav({ links, activeId }: MobileNavProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label="Open menu"
        className="flex h-10 w-10 items-center justify-center rounded-lg text-white focus-visible:outline-2 focus-visible:outline-white"
      >
        <IconMenu className="h-6 w-6" />
      </button>

      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={cn(
          "fixed inset-0 z-50 bg-background transition-opacity duration-200",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <div className="flex h-20 items-center justify-end px-4 sm:px-6">
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="flex h-10 w-10 items-center justify-center rounded-lg text-white focus-visible:outline-2 focus-visible:outline-white"
          >
            <IconClose className="h-6 w-6" />
          </button>
        </div>

        <nav aria-label="Mobile primary" className="flex flex-col gap-6 px-8 py-4">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              aria-current={link.href === `#${activeId}` ? "page" : undefined}
              className="text-xl font-medium text-white/90 hover:text-brand"
            >
              {link.label}
            </a>
          ))}
          <Button href="#contact" variant="primary" onClick={() => setOpen(false)} className="mt-4 w-full">
            Get a Quote
          </Button>
        </nav>
      </div>
    </div>
  );
}
