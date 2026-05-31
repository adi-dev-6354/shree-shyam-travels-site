import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const links = [
  { href: "#about", label: "About" },
  { href: "#routes", label: "Routes" },
  { href: "#fleet", label: "Fleet" },
  { href: "#why", label: "Why Us" },
  { href: "#contact", label: "Contact" },
  { href: "#booking", label: "Booking" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md shadow-soft border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-2">
          <img src={logo} alt="Shree Shyam Tours & Travels logo" className="h-10 w-10 object-contain sm:h-12 sm:w-12" />
          <div className="leading-tight">
            <div className="text-sm font-bold tracking-tight text-primary sm:text-base">SHREE SHYAM</div>
            <div className="text-[10px] font-semibold tracking-[0.18em] text-accent sm:text-xs">TOURS & TRAVELS</div>
          </div>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-accent"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="tel:+919316854017"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground shadow-soft transition-all duration-300 hover:scale-[1.03] hover:shadow-glow"
          >
            <Phone className="h-4 w-4" /> 93168 54017
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          className="rounded-md p-2 text-primary lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur-md lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-base font-medium text-foreground/90 transition-colors hover:bg-secondary hover:text-accent"
              >
                {l.label}
              </a>
            ))}
            <a
              href="tel:+919316854017"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-accent px-5 py-3 text-base font-semibold text-accent-foreground shadow-soft"
            >
              <Phone className="h-5 w-5" /> Call 93168 54017
            </a>
          </div>
        </div>
      )}
    </header>
  );
}