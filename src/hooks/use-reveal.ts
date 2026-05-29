import { useEffect } from "react";

export function useReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    if (els.length === 0) return;

    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    ) {
      return; // leave default visible state
    }

    const vh = window.innerHeight || 800;

    // Mark every off-screen element as pending so it can animate in later.
    els.forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.top > vh * 0.9) {
        el.classList.add("is-pending");
      }
    });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in-view");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -8% 0px" }
    );
    els.forEach((el) => {
      if (el.classList.contains("is-pending")) io.observe(el);
    });

    // Safety net: never leave pending content hidden.
    const t = window.setTimeout(
      () => els.forEach((el) => el.classList.add("in-view")),
      2000,
    );
    return () => {
      io.disconnect();
      window.clearTimeout(t);
    };
  }, []);
}
