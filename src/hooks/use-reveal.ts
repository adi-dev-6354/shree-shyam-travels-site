import { useEffect } from "react";

export function useReveal() {
  useEffect(() => {
    const reveal = (el: Element) => el.classList.add("in-view");
    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    if (els.length === 0) return;

    // Reduced motion or no IO: show everything.
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced || !("IntersectionObserver" in window)) {
      els.forEach(reveal);
      return;
    }

    // Immediately reveal anything already on screen (including above the fold
    // and full-page screenshot scenarios).
    const vh = window.innerHeight || 800;
    els.forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.top < vh * 1.1) reveal(el);
    });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            reveal(e.target);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -10% 0px" }
    );
    els.forEach((el) => {
      if (!el.classList.contains("in-view")) io.observe(el);
    });

    // Safety net: never leave content hidden.
    const t = window.setTimeout(() => els.forEach(reveal), 2500);
    return () => {
      io.disconnect();
      window.clearTimeout(t);
    };
  }, []);
}
