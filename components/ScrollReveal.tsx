"use client";

import { useEffect, useRef, useState } from "react";

const ScrollReveal = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -80px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: ready ? 0 : 1,
        transform: ready ? "translateY(40px)" : "translateY(0)",
        transition: ready ? "opacity 0.7s ease, transform 0.7s ease" : "none",
      }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;