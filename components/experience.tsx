"use client";

import { useEffect } from "react";

export function Experience({ children }: Readonly<{ children: React.ReactNode }>) {
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const revealAll = () => {
      document.querySelectorAll<HTMLElement>("[data-reveal]:not(.is-revealed)").forEach((element) => element.classList.add("is-revealed"));
    };

    if (reducedMotion || !("IntersectionObserver" in window)) {
      revealAll();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -12%", threshold: 0.08 },
    );

    const observePending = () => {
      document.querySelectorAll<HTMLElement>("[data-reveal]:not(.is-revealed)").forEach((element) => observer.observe(element));
    };
    observePending();

    const mutations = new MutationObserver(observePending);
    mutations.observe(document.body, { childList: true, subtree: true });
    return () => {
      mutations.disconnect();
      observer.disconnect();
    };
  }, []);

  return <>{children}</>;
}
