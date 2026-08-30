import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Handshake,
  Landmark,
  Lightbulb,
  Mail,
  Users,
} from "lucide-react";

import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import BottomNav from "@/components/layout/BottomNav";
import FloatingActions from "@/components/layout/FloatingActions";
import Footer from "@/components/layout/Footer";

import FadeIn from "@/components/animations/FadeIn";
import Stagger from "@/components/animations/Stagger";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Partner With Us | SelfBoss Enterprising Youth Foundation",
  description:
    "Partner with SelfBoss Enterprising Youth Foundation to expand youth entrepreneurship, skills development, mentorship, training, and community impact across Nigeria.",
};

const partnershipTypes = [
  {
    icon: Building2,
    title: "Corporate Partnerships",
    description:
      "Work with us through corporate social responsibility initiatives, sponsorships, employee engagement, and youth-focused development programs.",
  },
  {
    icon: Landmark,
    title: "Grants & Funding",
    description:
      "Support our programs through grants and funding opportunities that help us reach more young people and communities.",
  },
  {
    icon: Users,
    title: "Program Partnerships",
    description:
      "Collaborate with us to design and deliver entrepreneurship, skills development, mentorship, and community programs.",
  },
  {
    icon: Lightbulb,
    title: "Knowledge Partnerships",
    description:
      "Contribute expertise, training, technology, resources, or professional knowledge that can strengthen youth development.",
  },
];

const partnershipBenefits = [
  "Expand access to entrepreneurship opportunities for young Nigerians.",
  "Support practical skills development and business creation.",
  "Reach underserved communities through targeted programs.",
  "Contribute to sustainable economic and social development.",
  "Connect with emerging entrepreneurs and community leaders.",
  "Create measurable social impact through strategic collaboration.",
];

const process = [
  {
    number: "01",
    title: "Start A Conversation",
    text: "Tell us about your organization, your goals, and the kind of partnership you have in mind.",
  },
  {
    number: "02",
    title: "Explore The Opportunity",
    text: "Together, we identify a practical area where our missions and resources can work together.",
  },
  {
    number: "03",
    title: "Build The Partnership",
    text: "We agree on objectives, responsibilities, timelines, and the best way to deliver meaningful impact.",
  },
];

export default function PartnerPage() {
  return (
    <>
      <TopBar />
      <Navbar />

      <main className="overflow-hidden">
        {/* =====================================================
            HERO
        ===================================================== */}
        <section className="relative overflow-hidden bg-selfboss-black text-white">
          <div className="absolute inset-0 opacity-20">
            <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:45px_45px]" />
          </div>

          <div className="absolute -left-40 top-10 h-96 w-96 rounded-full bg-selfboss-yellow/10 blur-3xl" />

          <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-selfboss-yellow/10 blur-3xl" />

          <div className="relative mx-auto flex min-h-[500px] max-w-7xl items-center px-5 py-20 text-center sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <FadeIn>
                <span className="inline-flex items-center gap-2 rounded-full border border-selfboss-yellow/30 bg-selfboss-yellow/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-selfboss-yellow">
                  <Handshake size={14} />
                  Partner With Us
                </span>
              </FadeIn>

              <FadeIn delay={0.1}>
                <h1 className="mt-6 text-4xl font-black leading-[1.02] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                  Bigger challenges require{" "}
                  <span className="text-selfboss-yellow">
                    stronger partnerships.
                  </span>
                </h1>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/60 sm:text-base sm:leading-8">
                  Partner with SelfBoss to equip, train, mentor, and create
                  opportunities for young Nigerians while building meaningful
                  social impact.
                </p>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                  <a href="#partnership" className="btn-yellow">
                    Become A Partner
                    <ArrowRight size={16} />
                  </a>

                  <Link href="/get-involved" className="btn-white">
                    Explore Other Ways
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
                  eyebrow="Collaboration"
                  title="We believe impact grows when we work together."
                  description="SelfBoss brings together young entrepreneurs, professionals, organizations, communities, and institutions around a shared goal: creating better opportunities for Nigeria's youth."
                />

                <p className="mt-6 text-sm leading-7 text-gray-500 sm:text-base">
                  Strategic partnerships allow us to combine resources,
                  expertise, networks, and opportunities to deliver programs
                  that can reach more young people and create lasting results.
                </p>
              </FadeIn>

              <FadeIn direction="left" delay={0.1}>
                <div className="rounded-[2rem] bg-selfboss-yellow p-7 text-black sm:p-10">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-black text-selfboss-yellow">
                    <Handshake size={25} />
                  </div>

                  <p className="mt-6 text-[10px] font-black uppercase tracking-[0.2em] text-black/50">
                    Our Partnership Focus
                  </p>

                  <h3 className="mt-3 text-2xl font-black">
                    Shared goals. Shared responsibility. Greater impact.
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-black/60">
                    We welcome organizations and individuals who want to
                    contribute resources, knowledge, opportunities, funding,
                    networks, or expertise to youth development.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* =====================================================
            PARTNERSHIP TYPES
        ===================================================== */}
        <section id="partnership" className="bg-selfboss-black text-white">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <FadeIn>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-selfboss-yellow">
                  Ways To Partner
                </p>

                <h2 className="mt-3 text-3xl font-black sm:text-4xl">
                  Find a partnership model that works for you.
                </h2>

                <p className="mt-4 text-sm leading-7 text-white/40 sm:text-base">
                  Partnerships can take many forms. Let's find the one that
                  creates the strongest value for everyone involved.
                </p>
              </FadeIn>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <Stagger>
                {partnershipTypes.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="group rounded-[2rem] border border-white/10 bg-white/5 p-6 transition duration-300 hover:-translate-y-1 hover:border-selfboss-yellow/30"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-selfboss-yellow text-black transition group-hover:scale-105">
                        <Icon size={21} />
                      </div>

                      <h3 className="mt-6 text-lg font-black">
                        {item.title}
                      </h3>

                      <p className="mt-3 text-sm leading-6 text-white/40">
                        {item.description}
                      </p>
                    </div>
                  );
                })}
              </Stagger>
            </div>
          </div>
        </section>

        {/* =====================================================
            VALUE / BENEFITS
        ===================================================== */}
        <section className="relative overflow-hidden bg-selfboss-soft">
          <div className="absolute inset-0 opacity-[0.35]">
            <div className="h-full w-full bg-[linear-gradient(rgba(0,0,0,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.035)_1px,transparent_1px)] bg-[size:45px_45px]" />
          </div>

          <div className="section-container relative py-20 sm:py-24">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
              <FadeIn direction="right">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
                    Why Partner With SelfBoss?
                  </p>

                  <h2 className="mt-3 text-3xl font-black leading-tight text-selfboss-black sm:text-4xl">
                    Turn collaboration into measurable impact.
                  </h2>

                  <p className="mt-5 text-sm leading-7 text-gray-500 sm:text-base">
                    Your organization can help strengthen an ecosystem where
                    young people gain practical knowledge, build businesses,
                    develop confidence, and contribute to their communities.
                  </p>

                  <div className="mt-7">
                    <a
                      href="mailto:Selfbossbiz@gmail.com?subject=Partnership%20Enquiry"
                      className="btn-black"
                    >
                      Discuss A Partnership
                      <ArrowRight size={16} />
                    </a>
                  </div>
                </div>
              </FadeIn>

              <FadeIn direction="left" delay={0.1}>
                <div className="rounded-[2rem] bg-white p-7 shadow-sm sm:p-9">
                  <h3 className="text-xl font-black text-selfboss-black">
                    What partnership can achieve
                  </h3>

                  <div className="mt-6 space-y-4">
                    {partnershipBenefits.map((benefit) => (
                      <div
                        key={benefit}
                        className="flex items-start gap-3"
                      >
                        <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-selfboss-yellow text-black">
                          <CheckCircle2 size={14} />
                        </div>

                        <p className="text-sm leading-6 text-gray-600">
                          {benefit}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* =====================================================
            PROCESS
        ===================================================== */}
        <section className="bg-white">
          <div className="section-container section-padding">
            <div className="mx-auto max-w-3xl text-center">
              <FadeIn>
                <SectionHeading
                  eyebrow="How It Works"
                  title="From conversation to collaboration."
                  description="We keep the process simple, practical, and focused on shared outcomes."
                />
              </FadeIn>
            </div>

            <div className="mx-auto mt-12 grid max-w-5xl gap-4 md:grid-cols-3">
              {process.map((step, index) => (
                <FadeIn key={step.number} delay={index * 0.08}>
                  <div className="relative h-full rounded-[2rem] border border-black/5 bg-selfboss-soft p-7">
                    <span className="text-sm font-black text-selfboss-yellow">
                      {step.number}
                    </span>

                    <h3 className="mt-5 text-xl font-black text-selfboss-black">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-gray-500">
                      {step.text}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            PARTNERSHIP CTA
        ===================================================== */}
        <section className="bg-selfboss-black text-white">
          <div className="mx-auto max-w-5xl px-5 py-20 text-center sm:px-6 sm:py-24 lg:px-8">
            <FadeIn>
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-selfboss-yellow text-black">
                <Handshake size={25} />
              </div>

              <p className="mt-6 text-[10px] font-black uppercase tracking-[0.2em] text-selfboss-yellow">
                Let's Collaborate
              </p>

              <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl md:text-5xl">
                Have a partnership idea?
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/45 sm:text-base">
                We'd love to hear what you're building and explore how we can
                work together to create meaningful opportunities for young
                Nigerians.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href="mailto:Selfbossbiz@gmail.com?subject=Partnership%20Enquiry"
                  className="btn-yellow"
                >
                  Start A Conversation
                  <Mail size={16} />
                </a>

                <a href="tel:+2347043202431" className="btn-white">
                  Call +234 704 320 2431
                </a>
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
              <h2 className="text-3xl font-black leading-tight sm:text-4xl md:text-5xl">
                Together, we can reach further.
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-black/60 sm:text-base">
                Join us in building a stronger ecosystem for young Nigerian
                entrepreneurs and creating opportunities that can last.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Link href="/donate" className="btn-black">
                  Support Our Work
                  <ArrowRight size={16} />
                </Link>

                <Link href="/volunteer" className="btn-white">
                  Volunteer With Us
                </Link>
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