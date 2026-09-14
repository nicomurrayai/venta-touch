"use client";

import { useEffect } from "react";

export function RevealObserver() {
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (preference.matches || !("IntersectionObserver" in window)) return;
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.remove("reveal-pending");
          observer.unobserve(entry.target);
        }
      }
    }, { threshold: 0.08 });
    // Read positions together before changing styles to avoid repeated layout work.
    const pending = Array.from(elements).filter(element => element.getBoundingClientRect().top > window.innerHeight);
    for (const element of pending) {
      element.classList.add("reveal-pending");
      observer.observe(element);
    }
    const showAll = () => elements.forEach(element => element.classList.remove("reveal-pending"));
    preference.addEventListener("change", showAll);
    return () => { observer.disconnect(); showAll(); preference.removeEventListener("change", showAll); };
  }, []);
  return null;
}
