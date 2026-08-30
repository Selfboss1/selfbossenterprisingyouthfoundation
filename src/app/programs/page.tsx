import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  GraduationCap,
  Handshake,
  Lightbulb,
  Network,
  Wrench,
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
  title: "Our Programs | SelfBoss Enterprising Youth Foundation",
  description:
    "Explore SelfBoss Enterprising Youth Foundation programs designed to equip young Nigerians with business skills, equipment, mentorship, networking opportunities, and startup support.",
};

const programs = [
  {
    number: "01",
    icon: Wrench,
    title: "Business Equipment Grants",
    description:
      "Providing young entrepreneurs with essential equipment and tools that can help them start, improve, and expand their businesses.",
    image: "/images/gallery16.jpeg",
    href: "/programs/equipment-grants",
    features: [
      "Business equipment",
      "Startup tools",
      "Productivity resources",
      "Youth-led businesses",
    ],
  },
  {
    number: "02",
    icon: GraduationCap,
    title: "Entrepreneurship Training",
    description:
      "Practical and theoretical training designed to help young people understand business, develop viable ideas, and build sustainable enterprises.",
    image: "/images/gallery13.jpeg",
    href: "/programs/entrepreneurship-training",
    features: [
      "Business planning",
      "Financial literacy",
      "Marketing",
      "Digital skills",
    ],
  },
  {
    number: "03",
    icon: Handshake,
    title: "Mentorship",
    description:
      "Connecting young entrepreneurs with experienced professionals who can provide guidance, perspective, accountability, and practical business support.",
    image: "/images/gallery4.jpeg",
    href: "/programs/mentorship",
    features: [
      "Business guidance",
      "Professional mentorship",
      "Accountability",
      "Growth strategy",
    ],
  },
  {
    number: "04",
    icon: Network,
    title: "Networking Events",
    description:
      "Creating opportunities for young entrepreneurs to meet industry experts, investors, business leaders, and other ambitious young people.",
    image: "/images/gallery5.jpeg",
    href: "/programs/networking",
    features: [
      "Industry connections",
      "Investor access",
      "Pitch opportunities",
      "Business community",
    ],
  },
  {
    number: "05",
    icon: BriefcaseBusiness,
    title: "Startup Incubation",
    description:
      "Supporting promising young businesses with workspace, services, guidance, and access to opportunities that can accelerate their development.",
    image: "/images/gallery6.jpeg",
    href: "/programs/startup-incubation",
    features: [
      "Workspace",
      "Business support",
      "Growth opportunities",
      "Funding connections",
    ],
  },
  {
    number: "06",
    icon: Lightbulb,
    title: "Youth Empowerment & School Outreach",
    description:
      "Taking entrepreneurship, leadership, self-development, and practical skills to young people in schools and local communities.",
    image: "/images/gallery8.jpeg",
    href: "/programs/youth-empowerment",
    features: [
      "School outreach",
      "Leadership development",
      "Entrepreneurship awareness",
      "Community engagement",
    ],
  },
];

export default function ProgramsPage() {
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

          <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-selfboss-yellow/10 blur-3xl" />

          <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-selfboss-yellow/10 blur-3xl" />

          <div className="relative mx-auto flex min-h-[460px] max-w-7xl items-center px-5 py-20 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <FadeIn>
                <span className="inline-flex rounded-full border border-selfboss-yellow/30 bg-selfboss-yellow/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-selfboss-yellow">
                  Our Programs
                </span>
              </FadeIn>

              <FadeIn delay={0.1}>
                <h1 className="mt-6 text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                  Turning{" "}
                  <span className="text-selfboss-yellow">potential</span>{" "}
                  into opportunity.
                </h1>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/60 sm:text-base sm:leading-8">
                  Our programs equip young Nigerians with practical skills,
                  business resources, mentorship, connections, and
                  opportunities to build sustainable enterprises.
                </p>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                  <Link href="#program-list" className="btn-yellow">
                    Explore Programs
                    <ArrowRight size={16} />
                  </Link>

                  <Link href="/get-involved" className="btn-white">
                    Get Involved
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
            <div className="mx-auto max-w-3xl text-center">
              <SectionHeading
                eyebrow="What We Do"
                title="More than training. We create pathways."
                description="Entrepreneurship is easier when young people have access to the right knowledge, tools, relationships, and opportunities."
              />

              <FadeIn delay={0.15}>
                <p className="mt-6 text-sm leading-7 text-gray-600 sm:text-base">
                  SelfBoss brings these elements together through programs
                  designed around the real needs of young entrepreneurs. From
                  providing equipment to building skills and connecting youth
                  with experienced professionals, our goal is to help turn
                  potential into sustainable impact.
                </p>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* =====================================================
            PROGRAM LIST
        ===================================================== */}
        <section
          id="program-list"
          className="relative overflow-hidden bg-selfboss-soft py-20 sm:py-24"
        >
          <div className="absolute inset-0 opacity-[0.35]">
            <div className="h-full w-full bg-[linear-gradient(rgba(0,0,0,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.035)_1px,transparent_1px)] bg-[size:45px_45px]" />
          </div>

          <div className="section-container relative">
            <div className="mx-auto max-w-3xl text-center">
              <SectionHeading
                eyebrow="Our Core Programs"
                title="Designed for action and growth."
                description="Explore the programs through which SelfBoss equips, connects, and empowers young Nigerians."
              />
            </div>

            <div className="mt-12 space-y-6">
              <Stagger>
                {programs.map((program, index) => {
                  const Icon = program.icon;

                  return (
                    <article
                      key={program.title}
                      className="group overflow-hidden rounded-[2rem] border border-black/5 bg-white shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-card"
                    >
                      <div
                        className={`grid lg:grid-cols-2 ${
                          index % 2 !== 0 ? "lg:[&>div:first-child]:order-2" : ""
                        }`}
                      >
                        {/* IMAGE */}
                        <div className="relative min-h-[280px] overflow-hidden sm:min-h-[360px] lg:min-h-[420px]">
                          <Image
                            src={program.image}
                            alt={program.title}
                            fill
                            className="object-cover transition duration-700 group-hover:scale-105"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                          />

                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                          <div className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-xl bg-selfboss-yellow text-sm font-black text-black sm:left-7 sm:top-7">
                            {program.number}
                          </div>

                          <div className="absolute bottom-5 left-5 right-5 sm:bottom-7 sm:left-7 sm:right-7">
                            <div className="flex items-center gap-3 text-white">
                              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-selfboss-yellow text-black">
                                <Icon size={19} />
                              </div>

                              <span className="text-xs font-black uppercase tracking-[0.15em]">
                                SelfBoss Program
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* CONTENT */}
                        <div className="flex flex-col justify-center p-7 sm:p-9 lg:p-12">
                          <div className="flex items-center gap-3">
                            <span className="text-xs font-black text-selfboss-yellow">
                              {program.number}
                            </span>

                            <span className="h-px w-8 bg-black/10" />

                            <span className="text-[9px] font-black uppercase tracking-[0.18em] text-gray-400">
                              Youth Development
                            </span>
                          </div>

                          <h2 className="mt-5 text-2xl font-black leading-tight text-selfboss-black sm:text-3xl">
                            {program.title}
                          </h2>

                          <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
                            {program.description}
                          </p>

                          <div className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
                            {program.features.map((feature) => (
                              <div
                                key={feature}
                                className="flex items-center gap-2 rounded-xl bg-selfboss-soft px-3 py-2.5"
                              >
                                <span className="h-1.5 w-1.5 rounded-full bg-selfboss-yellow" />

                                <span className="text-xs font-bold text-gray-600">
                                  {feature}
                                </span>
                              </div>
                            ))}
                          </div>

                          <div className="mt-7">
                            <Link
                              href={program.href}
                              className="inline-flex items-center gap-2 text-sm font-black text-black transition-colors hover:text-selfboss-yellow"
                            >
                              Learn More
                              <ArrowRight
                                size={16}
                                className="transition-transform duration-300 group-hover:translate-x-1"
                              />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </Stagger>
            </div>
          </div>
        </section>

        {/* =====================================================
            IMPACT STRIP
        ===================================================== */}
        <section className="bg-selfboss-black text-white">
          <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
              <FadeIn direction="right">
                <div className="text-center lg:text-left">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-selfboss-yellow">
                    Why It Matters
                  </p>

                  <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">
                    Every opportunity can become a business. Every business
                    can create impact.
                  </h2>

                  <p className="mt-4 max-w-2xl text-sm leading-7 text-white/50 sm:text-base">
                    We believe that empowering young people with the right
                    resources creates a ripple effect — stronger businesses,
                    new jobs, stronger communities, and a more resilient
                    Nigerian economy.
                  </p>
                </div>
              </FadeIn>

              <FadeIn direction="left" delay={0.1}>
                <div className="mx-auto w-full max-w-xs rounded-[2rem] bg-selfboss-yellow p-7 text-center text-black">
                  <p className="text-4xl font-black sm:text-5xl">5,000+</p>

                  <p className="mt-2 text-xs font-black uppercase tracking-[0.15em]">
                    Youth Empowered
                  </p>

                  <div className="mx-auto my-5 h-px w-12 bg-black/20" />

                  <p className="text-xs leading-6 text-black/60">
                    Knowledge, skills, opportunities, and support delivered
                    through consistent programs and outreach.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* =====================================================
            CTA
        ===================================================== */}
        <section className="section-padding bg-white">
          <div className="section-container">
            <FadeIn>
              <div className="relative overflow-hidden rounded-[2rem] bg-selfboss-yellow px-6 py-14 text-center sm:px-10 sm:py-16">
                <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-black/10" />

                <div className="absolute -bottom-24 -left-20 h-56 w-56 rounded-full bg-black/5" />

                <div className="relative mx-auto max-w-3xl">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-black/55">
                    Be Part of the Movement
                  </p>

                  <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl md:text-5xl">
                    Help us equip the next generation.
                  </h2>

                  <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-black/65 sm:text-base">
                    Whether you donate, volunteer, mentor, or partner with us,
                    your contribution can help a young Nigerian move one step
                    closer to building a sustainable future.
                  </p>

                  <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                    <Link href="/donate" className="btn-black">
                      Support Our Work
                      <ArrowRight size={16} />
                    </Link>

                    <Link href="/partner" className="btn-white">
                      Partner With Us
                    </Link>
                  </div>
                </div>
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