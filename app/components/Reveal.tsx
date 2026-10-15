"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

export default function Reveal({
  children,
  delay = 0,
  as: Tag = "div",
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  as?: "div" | "li" | "section";
  className?: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -80px 0px" },
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as never}
      data-visible={visible || undefined}
      style={{ transitionDelay: `${delay}ms` }}
      className={`opacity-0 transition-[opacity,translate] duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] data-visible:opacity-100 motion-safe:translate-y-3 motion-safe:data-visible:translate-y-0 ${className}`}
    >
      {children}
    </Tag>
  );
}
