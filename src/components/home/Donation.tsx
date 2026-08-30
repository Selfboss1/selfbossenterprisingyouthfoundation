
"use client";

import {
  ArrowRight,
  Copy,
  Landmark,
} from "lucide-react";
import FadeIn from "../animations/FadeIn";

export default function Donation() {
  return (
    <section
      id="donate"
      className="section-padding bg-selfboss-yellow"
    >
      <div className="section-container">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.9fr]">
          <FadeIn>
            <span className="text-xs font-black uppercase tracking-[0.2em]">
              Make A Difference
            </span>

            <h2 className="mt-4 max-w-xl text-3xl font-black leading-[1.05] tracking-tight sm:text-4xl lg:text-5xl">
              Every contribution can create an opportunity.
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 opacity-65 sm:text-base">
              Your donation supports youth training,
              entrepreneurship programs, equipment grants,
              mentorship, and community outreach.
            </p>

            <div className="mt-7 inline-flex items-center gap-2 rounded-xl bg-black px-4 py-3 text-xs font-black text-white">
              <ArrowRight size={15} />
              Your support creates real opportunities
            </div>
          </FadeIn>

          <FadeIn direction="left">
            <div className="rounded-[2rem] bg-selfboss-black p-7 text-white shadow-2xl sm:p-9">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-selfboss-yellow text-black">
                  <Landmark size={21} />
                </div>

                <div>
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-selfboss-yellow">
                    Donation Account
                  </p>

                  <p className="mt-1 text-[10px] text-white/40">
                    Bank transfer
                  </p>
                </div>
              </div>

              <div className="mt-7 space-y-5">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-wider text-white/35">
                    Bank
                  </p>

                  <p className="mt-1 font-black">
                    Zenith Bank
                  </p>
                </div>

                <div>
                  <p className="text-[10px] font-black uppercase tracking-wider text-white/35">
                    Account Name
                  </p>

                  <p className="mt-1 text-sm font-black">
                    SelfBoss Enterprising Youth Foundation
                  </p>
                </div>

                <div>
                  <p className="text-[10px] font-black uppercase tracking-wider text-white/35">
                    Account Number
                  </p>

                  <div className="mt-1 flex items-center justify-between gap-3">
                    <p className="text-2xl font-black tracking-wider">
                      1229096504
                    </p>

                    <button
                      type="button"
                      aria-label="Copy account number"
                      onClick={() =>
                        navigator.clipboard?.writeText(
                          "1229096504",
                        )
                      }
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 transition hover:bg-white/20"
                    >
                      <Copy size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}