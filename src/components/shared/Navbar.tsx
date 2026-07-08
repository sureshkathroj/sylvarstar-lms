import Container from './Container';
import Logo from './Logo';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
      <Container>
        <div className="flex h-20 items-center justify-between">
          <Logo />

          <div className="text-sm text-slate-500">
            Navbar Coming Soon
          </div>
        </div>
      </Container>
    </header>
  );
}