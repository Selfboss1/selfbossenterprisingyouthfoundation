import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  FileCheck2,
  Handshake,
  LockKeyhole,
  Scale,
  ShieldCheck,
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
  title: "Compliance & Transparency | SelfBoss Enterprising Youth Foundation",
  description:
    "Learn about SelfBoss Enterprising Youth Foundation's registration, compliance, accountability, partnerships, and commitment to transparency in youth development and nonprofit operations in Nigeria.",
};

const complianceItems = [
  {
    icon: Building2,
    title: "CAC Registered",
    description:
      "SelfBoss Enterprising Youth Foundation is registered with the Corporate Affairs Commission (CAC) in Nigeria.",
  },
  {
    icon: FileCheck2,
    title: "Tax Identification",
    description:
      "The Foundation maintains its Tax Identification Number (TIN) documentation as part of its organizational compliance.",
  },
  {
    icon: Handshake,
    title: "Local Collaboration",
    description:
      "We work with relevant local stakeholders and authorities to strengthen the reach and effectiveness of our youth-focused programs.",
  },
  {
    icon: Scale,
    title: "Nonprofit Standards",
    description:
      "Our activities are guided by applicable legal frameworks and responsible nonprofit practices.",
  },
];

const commitments = [
  "Responsible stewardship of resources entrusted to the Foundation.",
  "Transparent communication with supporters, partners, volunteers, and beneficiaries.",
  "Compliance with applicable Nigerian nonprofit and organizational requirements.",
  "Responsible implementation of youth development programs.",
  "Respect for the dignity and wellbeing of program beneficiaries.",
  "Commitment to ethical partnerships and community engagement.",
];

export default function CompliancePage() {
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

          <div className="relative mx-auto flex min-h-[450px] max-w-7xl items-center px-5 py-20 text-center sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <FadeIn>
                <span className="inline-flex items-center gap-2 rounded-full border border-selfboss-yellow/30 bg-selfboss-yellow/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-selfboss-yellow">
                  <ShieldCheck size={14} />
                  Compliance & Transparency
                </span>
              </FadeIn>

              <FadeIn delay={0.1}>
                <h1 className="mt-6 text-4xl font-black leading-[1.02] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                  Trust is part of our{" "}
                  <span className="text-selfboss-yellow">
                    mission.
                  </span>
                </h1>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/60 sm:text-base sm:leading-8">
                  We are committed to responsible nonprofit operations,
                  transparency, accountability, and compliance as we serve
                  young Nigerians and communities.
                </p>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* =====================================================
            INTRO
        ===================================================== */}
        <section className="section-padding bg-white">
          <div className="section-container">
            <div className="mx-auto max-w-3xl text-center">
              <SectionHeading
                eyebrow="Our Commitment"
                title="Building an organization people can trust."
                description="As a youth-focused nonprofit, we understand that meaningful impact requires more than good intentions. It requires responsibility, accountability, and sound organizational practices."
              />
            </div>

            <div className="mx-auto mt-12 max-w-5xl rounded-[2rem] bg-selfboss-soft p-7 sm:p-10">
              <FadeIn>
                <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-selfboss-yellow text-black">
                    <BadgeCheck size={25} />
                  </div>

                  <div>
                    <h2 className="text-2xl font-black text-selfboss-black">
                      SelfBoss Enterprising Youth Foundation
                    </h2>

                    <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
                      SelfBoss Youth Enterprising Foundation is a legally
                      registered NGO committed to transparency and
                      accountability. We comply with applicable legal
                      frameworks governing youth development and nonprofit
                      operations in Nigeria.
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* =====================================================
            COMPLIANCE CARDS
        ===================================================== */}
        <section className="bg-selfboss-black">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <FadeIn>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-selfboss-yellow">
                  Organizational Standards
                </p>

                <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">
                  The foundation of our operations.
                </h2>

                <p className="mt-4 text-sm leading-6 text-white/40">
                  Our organizational structure is guided by legal,
                  administrative, and ethical responsibilities.
                </p>
              </FadeIn>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <Stagger>
                {complianceItems.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="rounded-[2rem] border border-white/10 bg-white/5 p-6"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-selfboss-yellow text-black">
                        <Icon size={21} />
                      </div>

                      <h3 className="mt-6 text-lg font-black text-white">
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
            ACCOUNTABILITY
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
                    Accountability
                  </p>

                  <h2 className="mt-3 text-3xl font-black leading-tight text-selfboss-black sm:text-4xl">
                    Responsible with every opportunity.
                  </h2>

                  <p className="mt-5 text-sm leading-7 text-gray-500 sm:text-base">
                    We recognize that donations, partnerships, volunteer time,
                    and community support are entrusted to us for a purpose.
                    That responsibility shapes how we approach our programs
                    and organizational activities.
                  </p>

                  <div className="mt-7">
                    <Link href="/contact" className="btn-black">
                      Contact The Foundation
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </FadeIn>

              <FadeIn direction="left" delay={0.1}>
                <div className="rounded-[2rem] bg-white p-7 shadow-sm sm:p-9">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-selfboss-black text-selfboss-yellow">
                    <LockKeyhole size={21} />
                  </div>

                  <h3 className="mt-6 text-xl font-black text-selfboss-black">
                    Our commitments
                  </h3>

                  <div className="mt-6 space-y-3">
                    {commitments.map((commitment) => (
                      <div
                        key={commitment}
                        className="flex gap-3 border-b border-black/5 pb-3 last:border-0 last:pb-0"
                      >
                        <ShieldCheck
                          size={17}
                          className="mt-0.5 shrink-0 text-selfboss-yellow"
                        />

                        <p className="text-sm leading-6 text-gray-600">
                          {commitment}
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
            PARTNERSHIP
        ===================================================== */}
        <section className="bg-white">
          <div className="section-container section-padding">
            <div className="mx-auto max-w-4xl text-center">
              <FadeIn>
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-selfboss-yellow text-black">
                  <Handshake size={24} />
                </div>

                <p className="mt-6 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
                  Collaboration
                </p>

                <h2 className="mt-3 text-3xl font-black text-selfboss-black sm:text-4xl">
                  Stronger impact through responsible partnerships.
                </h2>

                <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
                  We believe youth development is strengthened when
                  organizations, government agencies, businesses,
                  professionals, communities, and other stakeholders work
                  together toward shared goals.
                </p>
              </FadeIn>

              <FadeIn delay={0.15}>
                <div className="mt-8 rounded-[2rem] bg-selfboss-black p-7 text-left text-white sm:p-9">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-selfboss-yellow">
                    Existing Collaboration
                  </p>

                  <h3 className="mt-3 text-2xl font-black">
                    Working with stakeholders
                  </h3>

                  <p className="mt-4 max-w-2xl text-sm leading-7 text-white/45">
                    SelfBoss has engaged in strategic collaborations with the
                    National Drug Law Enforcement Agency (NDLEA) and other
                    stakeholders as part of our broader youth empowerment and
                    community-focused efforts.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* =====================================================
            FINAL CTA
        ===================================================== */}
        <section className="bg-selfboss-yellow">
          <div className="mx-auto max-w-5xl px-5 py-16 text-center sm:px-6 sm:py-20 lg:px-8">
            <FadeIn>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-black/50">
                Work With Us
              </p>

              <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl md:text-5xl">
                Let's build trustworthy impact together.
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-black/60 sm:text-base">
                Whether you are an organization, business, professional,
                community leader, donor, or volunteer, there is a place for
                you in the SelfBoss movement.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Link href="/get-involved" className="btn-black">
                  Get Involved
                  <ArrowRight size={16} />
                </Link>

                <Link href="/contact" className="btn-white">
                  Contact Us
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