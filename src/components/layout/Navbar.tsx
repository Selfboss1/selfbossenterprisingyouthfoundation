"use client";

import { ArrowRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import MobileMenu from "./MobileMenu";

const navLinks = [
  ["About", "#about"],
  ["Programs", "#programs"],
  ["Impact", "#impact"],
  ["Events", "#events"],
  ["Contact", "#contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-black/5 bg-white/95 backdrop-blur-xl">
        <div className="section-container flex h-16 items-center justify-between">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-selfboss-yellow text-sm font-black">
              SB
            </div>

            <div>
              <p className="text-sm font-black leading-none">
                SELFBOSS
              </p>

              <p className="mt-1 hidden text-[8px] font-black uppercase tracking-[0.18em] text-gray-400 sm:block">
                Enterprising Youth Foundation
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {navLinks.map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="text-sm font-bold transition hover:text-selfboss-yellow-dark"
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <a href="#donate" className="btn-primary">
              Donate
              <ArrowRight size={16} />
            </a>
          </div>

          <button
            type="button"
            aria-label={
              open
                ? "Close navigation"
                : "Open navigation"
            }
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className="relative z-[60] flex h-11 w-11 items-center justify-center rounded-xl bg-selfboss-black text-white lg:hidden"
          >
            {open ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </header>

      {open && (
        <MobileMenu
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}