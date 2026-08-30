"use client";

import { useEffect, useRef, useState } from "react";

interface CounterProps {
  value: number;
  suffix?: string;
  duration?: number;
  className?: string;
}

export default function Counter({
  value,
  suffix = "",
  duration = 1800,
  className,
}: CounterProps) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.5,
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    let animationFrame: number;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const progress = Math.min(
        (currentTime - startTime) / duration,
        1,
      );

      const easedProgress =
        1 - Math.pow(1 - progress, 3);

      setCount(
        Math.floor(easedProgress * value),
      );

      if (progress < 1) {
        animationFrame =
          requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () =>
      cancelAnimationFrame(animationFrame);
  }, [started, value, duration]);

  return (
    <span ref={ref} className={className}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}