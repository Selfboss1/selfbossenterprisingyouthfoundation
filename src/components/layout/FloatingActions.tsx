"use client";

import { Mail, Phone } from "lucide-react";

export default function FloatingActions() {
  return (
    <div className="fixed bottom-24 right-4 z-30 flex flex-col gap-3 lg:bottom-7 lg:right-7">
      <a
        href="mailto:selfbossbiz@gmail.com"
        aria-label="Email SelfBoss Foundation"
        className="flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-white text-selfboss-black shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-lg"
      >
        <Mail size={18} />
      </a>

      <a
        href="tel:+2347043202431"
        aria-label="Call SelfBoss Foundation"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-selfboss-yellow text-selfboss-black shadow-yellow transition duration-300 hover:-translate-y-1"
      >
        <Phone size={18} />
      </a>
    </div>
  );
}