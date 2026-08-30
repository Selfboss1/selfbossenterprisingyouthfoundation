import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Heart,
  HeartHandshake,
  ShieldCheck,
} from "lucide-react";

import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import BottomNav from "@/components/layout/BottomNav";
import FloatingActions from "@/components/layout/FloatingActions";
import Footer from "@/components/layout/Footer";

import FadeIn from "@/components/animations/FadeIn";
import SectionHeading from "@/components/ui/SectionHeading";
import CopyAccountButton from "@/components/ui/CopyAccountButton";

export const metadata: Metadata = {
  title: "Donate | SelfBoss Enterprising Youth Foundation",
  description:
    "Support SelfBoss Enterprising Youth Foundation and help equip and train more young Nigerians through entrepreneurship, skills development, mentorship, and community programs.",
};

const donationUses = [
  "Business equipment and startup resources",
  "Entrepreneurship training and workshops",
  "Youth mentorship and professional guidance",
  "Community outreach and empowerment programs",
  "Digital and vocational skills development",
  "Youth-focused awareness initiatives",
];

const donationBenefits = [
  "Support youth entrepreneurship",
  "Help fund practical training",
  "Provide business equipment",
  "Expand community outreach",
];

export default function DonatePage() {
  return (
    <>
      <TopBar />
      <Navbar />

      <main className="overflow-hidden">
        {/* =====================================================
            HERO
        ===================================================== */}
        <section className="relative overflow-hidden bg-selfboss-black text-white">
          {/* Grid */}
          <div className="absolute inset-0 opacity-20">
            <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:45px_45px]" />
          </div>

          {/* Decorative glow */}
          <div className="absolute -left-40 top-10 h-96 w-96 rounded-full bg-selfboss-yellow/10 blur-3xl" />

          <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-selfboss-yellow/10 blur-3xl" />

          <div className="relative mx-auto flex min-h-[480px] max-w-7xl items-center px-5 py-20 text-center sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <FadeIn>
                <span className="inline-flex items-center gap-2 rounded-full border border-selfboss-yellow/30 bg-selfboss-yellow/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-selfboss-yellow">
                  <Heart size={14} />
                  Support The Mission
                </span>
              </FadeIn>

              <FadeIn delay={0.1}>
                <h1 className="mt-6 text-4xl font-black leading-[1.02] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                  Your support can create{" "}
                  <span className="text-selfboss-yellow">
                    someone&apos;s opportunity.
                  </span>
                </h1>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/60 sm:text-base sm:leading-8">
                  Your donation helps SelfBoss equip and train more young
                  Nigerians with practical skills, business resources,
                  mentorship, and opportunities.
                </p>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                  <Link href="#donate" className="btn-yellow">
                    Donate Now
                    <ArrowRight size={16} />
                  </Link>

                  <Link href="/get-involved" className="btn-white">
                    Other Ways To Help
                  </Link>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* =====================================================
            INTRO
        ===================================================== */}
        <section className="section-padding bg-white">
          <div className="section-container">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
              <FadeIn direction="right">
                <SectionHeading
                  eyebrow="Why Give?"
                  title="Help us reach more young people."
                  description="Many young Nigerians have the ambition to build businesses but lack the equipment, knowledge, mentorship, and opportunities needed to get started."
                />

                <div className="mt-7 space-y-4 text-sm leading-7 text-gray-600 sm:text-base">
                  <p>
                    Your support allows us to expand our entrepreneurship
                    programs, organize practical training, provide useful
                    resources, and reach communities that need opportunities.
                  </p>

                  <p>
                    Every contribution helps us continue building a stronger
                    ecosystem for young entrepreneurs and innovators.
                  </p>
                </div>
              </FadeIn>

              <FadeIn direction="left" delay={0.1}>
                <div className="rounded-[2rem] bg-selfboss-yellow p-7 text-black sm:p-10">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-black text-selfboss-yellow">
                    <HeartHandshake size={25} />
                  </div>

                  <p className="mt-6 text-[10px] font-black uppercase tracking-[0.2em] text-black/50">
                    Our Reach
                  </p>

                  <div className="mt-3 text-5xl font-black sm:text-6xl">
                    5,000+
                  </div>

                  <p className="mt-2 text-sm font-bold">
                    Nigerian youths empowered through our work.
                  </p>

                  <div className="mt-7 border-t border-black/10 pt-6">
                    <p className="text-sm leading-6 text-black/60">
                      Together, we can help the next young entrepreneur move
                      from an idea to action.
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* =====================================================
            DONATION DETAILS
        ===================================================== */}
        <section
          id="donate"
          className="scroll-mt-24 bg-selfboss-black text-white"
        >
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:px-8">
            <div className="grid items-start gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
              {/* LEFT */}
              <FadeIn direction="right">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-selfboss-yellow">
                    Make A Donation
                  </p>

                  <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl md:text-5xl">
                    Support the work directly.
                  </h2>

                  <p className="mt-5 text-sm leading-7 text-white/50 sm:text-base">
                    Donations can be made directly to the SelfBoss Enterprising
                    Youth Foundation account below.
                  </p>

                  <div className="mt-8 space-y-3">
                    {donationBenefits.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-3 text-sm text-white/70"
                      >
                        <CheckCircle2
                          size={17}
                          className="shrink-0 text-selfboss-yellow"
                        />

                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>

              {/* BANK CARD */}
              <FadeIn direction="left" delay={0.1}>
                <div className="rounded-[2rem] bg-white p-6 text-selfboss-black shadow-card sm:p-10">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
                        Donation Account
                      </p>

                      <h3 className="mt-2 text-2xl font-black">
                        Bank Transfer
                      </h3>
                    </div>

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-selfboss-yellow">
                      <Heart size={21} />
                    </div>
                  </div>

                  <div className="mt-8 space-y-3">
                    {/* Bank */}
                    <div className="rounded-2xl bg-selfboss-soft p-5">
                      <p className="text-[9px] font-black uppercase tracking-wider text-gray-400">
                        Bank Name
                      </p>

                      <p className="mt-2 text-lg font-black">
                        Zenith Bank
                      </p>
                    </div>

                    {/* Account Name */}
                    <div className="rounded-2xl bg-selfboss-soft p-5">
                      <p className="text-[9px] font-black uppercase tracking-wider text-gray-400">
                        Account Name
                      </p>

                      <p className="mt-2 text-base font-black leading-6 sm:text-lg">
                        SelfBoss Enterprising Youth Foundation
                      </p>
                    </div>

                    {/* Account Number */}
                    <div className="rounded-2xl bg-selfboss-soft p-5">
                      <p className="text-[9px] font-black uppercase tracking-wider text-gray-400">
                        Account Number
                      </p>

                      <div className="mt-2 flex items-center justify-between gap-3">
                        <p className="break-all text-xl font-black tracking-wider sm:text-2xl">
                          1229096504
                        </p>

                        <CopyAccountButton value="1229096504" />
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 flex gap-3 rounded-2xl border border-black/5 bg-white p-4">
                    <ShieldCheck
                      size={19}
                      className="mt-0.5 shrink-0 text-selfboss-yellow"
                    />

                    <p className="text-xs leading-5 text-gray-500">
                      Please verify the account details before completing your
                      transfer.
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* =====================================================
            WHAT DONATIONS SUPPORT
        ===================================================== */}
        <section className="relative overflow-hidden bg-selfboss-soft py-20 sm:py-24">
          <div className="absolute inset-0 opacity-[0.35]">
            <div className="h-full w-full bg-[linear-gradient(rgba(0,0,0,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.035)_1px,transparent_1px)] bg-[size:45px_45px]" />
          </div>

          <div className="section-container relative">
            <div className="mx-auto max-w-3xl text-center">
              <SectionHeading
                eyebrow="Your Donation At Work"
                title="What your support can help make possible."
                description="Your contribution strengthens the programs and activities through which SelfBoss reaches young Nigerians."
              />
            </div>

            <div className="mx-auto mt-12 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {donationUses.map((item, index) => (
                <FadeIn
                  key={item}
                  delay={index * 0.05}
                  direction={index % 2 === 0 ? "right" : "left"}
                >
                  <div className="h-full rounded-[1.75rem] border border-black/5 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-card">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-selfboss-yellow text-black">
                      <CheckCircle2 size={18} />
                    </div>

                    <p className="mt-5 text-sm font-black leading-6 text-selfboss-black">
                      {item}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            SMALL CTA
        ===================================================== */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-5 py-20 text-center sm:px-6 sm:py-24 lg:px-8">
            <FadeIn>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
                Every Contribution Matters
              </p>

              <h2 className="mt-4 text-3xl font-black leading-tight text-selfboss-black sm:text-4xl md:text-5xl">
                You don&apos;t have to do everything. Just do something.
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
                If you cannot donate financially, you can still make an impact
                by volunteering your skills, mentoring a young person,
                connecting us with a partner, or sharing our mission.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Link href="/get-involved" className="btn-black">
                  Get Involved
                  <ArrowRight size={16} />
                </Link>

                <Link href="/contact" className="btn-yellow">
                  Contact Us
                  <ArrowRight size={16} />
                </Link>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* =====================================================
            FINAL CTA
        ===================================================== */}
        <section className="bg-selfboss-yellow">
          <div className="mx-auto max-w-5xl px-5 py-16 text-center sm:px-6 sm:py-20 lg:px-8">
            <FadeIn>
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-black text-selfboss-yellow">
                <HeartHandshake size={25} />
              </div>

              <h2 className="mt-6 text-3xl font-black leading-tight sm:text-4xl md:text-5xl">
                Let&apos;s equip the next generation together.
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-black/60 sm:text-base">
                Your generosity can help turn skills into businesses, ideas
                into opportunities, and young people into confident
                contributors to their communities.
              </p>

              <div className="mt-8">
                <a
                  href="mailto:Selfbossbiz@gmail.com"
                  className="btn-black"
                >
                  Talk To Us
                  <ArrowRight size={16} />
                </a>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>

      <FloatingActions />
      <Footer />
      <BottomNav />
    </>
  );
}