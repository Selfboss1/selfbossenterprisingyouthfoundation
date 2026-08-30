"use client";

import { Mail, Phone } from "lucide-react";

const EMAIL = "info@selfbossyouthfoundation.com";
const PHONE = "+2347043202431";

export default function FloatingActions() {
  return (
    <div className="fixed bottom-24 right-4 z-40 flex flex-col gap-3 lg:bottom-7 lg:right-7">
      {/* Email */}
      <a
        href={`mailto:${EMAIL}?subject=Enquiry%20to%20SelfBoss%20Enterprising%20Youth%20Foundation`}
        aria-label="Email SelfBoss Foundation"
        title="Send us an email"
        className="flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-white text-selfboss-black shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-lg active:scale-95"
      >
        <Mail size={18} strokeWidth={2} />
      </a>

      {/* Phone */}
      <a
        href={`tel:${PHONE}`}
        aria-label="Call SelfBoss Foundation"
        title="Call SelfBoss Foundation"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-selfboss-yellow text-selfboss-black shadow-yellow transition duration-300 hover:-translate-y-1 active:scale-95"
      >
        <Phone size={18} strokeWidth={2} />
      </a>
    </div>
  );
}