"use client";

import { ArrowRight } from "lucide-react";
import { useEffect } from "react";

interface MobileMenuProps {
  onClose: () => void;
}

const links = [
  ["About", "#about"],
  ["Programs", "#programs"],
  ["Impact", "#impact"],
  ["Events", "#events"],
  ["Contact", "#contact"],
];

export default function MobileMenu({
  onClose,
}: MobileMenuProps) {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className="fixed inset-x-0 bottom-0 top-16 z-40 overflow-y-auto bg-white lg:hidden">
      <div className="section-container flex min-h-full flex-col py-8">
        <nav className="flex flex-col">
          {links.map(([label, href], index) => (
            <a
              key={label}
              href={href}
              onClick={onClose}
              className="flex items-center justify-between border-b border-black/5 py-5 text-2xl font-black"
            >
              <span>
                <span className="mr-4 text-xs text-gray-400">
                  0{index + 1}
                </span>
                {label}
              </span>

              <ArrowRight size={20} />
            </a>
          ))}
        </nav>

        <div className="mt-auto pt-10">
          <a
            href="/donate"
            onClick={onClose}
            className="btn-primary w-full"
          >
            Support Our Mission
            <ArrowRight size={17} />
          </a>

          <div className="mt-8 grid grid-cols-2 gap-3">
            <a
              href="tel:+2347043202431"
              className="rounded-2xl bg-selfboss-black p-4 text-center text-xs font-black text-white"
            >
              Call Us
            </a>

            <a
              href="mailto:info@selfbossyouthfoundation.com"
              className="rounded-2xl border border-black/10 p-4 text-center text-xs font-black"
            >
              Email Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}