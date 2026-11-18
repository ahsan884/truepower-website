import { Logo } from "@/components/ui/Logo";
import { Container } from "@/components/ui/Container";

export function Header() {
  return (
    <header>
      <Container className="flex items-center justify-center py-6">
        <Logo />
      </Container>
    </header>
  );
}
