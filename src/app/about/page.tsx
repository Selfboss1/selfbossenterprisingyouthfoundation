import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  HeartHandshake,
  Lightbulb,
  Target,
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
  title: "About Us | SelfBoss Enterprising Youth Foundation",
  description:
    "Learn about SelfBoss Enterprising Youth Foundation, our story, mission, vision, goals, and commitment to empowering young Nigerians through entrepreneurship, skills, mentorship, and opportunity.",
};

const goals = [
  {
    icon: Target,
    title: "Provide Resources",
    text: "Provide tools, equipment, and resources that help youth-led businesses launch and grow.",
  },
  {
    icon: Lightbulb,
    title: "Build Skills",
    text: "Deliver practical and theoretical entrepreneurial training that creates real-world value.",
  },
  {
    icon: Users,
    title: "Connect & Mentor",
    text: "Connect young entrepreneurs with mentors, professionals, and people who can help them move forward.",
  },
  {
    icon: HeartHandshake,
    title: "Build Community",
    text: "Create a supportive and collaborative community where young entrepreneurs can learn and grow together.",
  },
];

const milestones = [
  {
    year: "2020",
    title: "The Beginning",
    text: "The SelfBoss vision began with a desire to create opportunities for enterprising young Nigerians.",
  },
  {
    year: "2024",
    title: "Official Launch",
    text: "SelfBoss Enterprising Youth Foundation was publicly launched and began expanding its youth empowerment efforts.",
  },
  {
    year: "Today",
    title: "Growing Impact",
    text: "Our programs and outreach continue to equip young people with skills, resources, mentorship, and opportunities.",
  },
];

export default function AboutPage() {
  return (
    <>
      <TopBar />
      <Navbar />

      <main className="overflow-hidden">
        {/* =====================================================
            PAGE HERO
        ===================================================== */}
        <section className="relative bg-selfboss-black text-white">
          {/* Grid background */}
          <div className="absolute inset-0 opacity-20">
            <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:45px_45px]" />
          </div>

          {/* Yellow glow */}
          <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-selfboss-yellow/20 blur-3xl" />

          <div className="relative mx-auto flex min-h-[430px] max-w-7xl items-center px-5 py-20 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <FadeIn>
                <span className="inline-flex items-center rounded-full border border-selfboss-yellow/30 bg-selfboss-yellow/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-selfboss-yellow">
                  Who We Are
                </span>
              </FadeIn>

              <FadeIn delay={0.1}>
                <h1 className="mt-6 text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                  Building a generation of{" "}
                  <span className="text-selfboss-yellow">
                    enterprising Nigerians.
                  </span>
                </h1>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/60 sm:text-base sm:leading-8">
                  We equip young Nigerians with skills, support, resources,
                  and opportunities to build successful businesses and create
                  lasting impact in their communities.
                </p>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* =====================================================
            WHO WE ARE
        ===================================================== */}
        <section className="section-padding bg-white">
          <div className="section-container">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
              <FadeIn direction="right">
                <div className="relative mx-auto w-full max-w-xl">
                  <div className="absolute -left-4 -top-4 h-20 w-20 rounded-2xl bg-selfboss-yellow sm:-left-6 sm:-top-6" />

                  <div className="relative overflow-hidden rounded-[2rem] bg-selfboss-black p-2 shadow-card">
                    <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem]">
                      <Image
                        src="/images/gallery13.jpeg"
                        alt="SelfBoss youth entrepreneurship bootcamp"
                        fill
                        priority
                        className="object-cover transition duration-700 hover:scale-105"
                        sizes="(max-width: 1024px) 90vw, 45vw"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                      <div className="absolute bottom-5 left-5 right-5">
                        <div className="rounded-2xl border border-white/10 bg-black/70 p-5 backdrop-blur-md">
                          <p className="text-2xl font-black text-selfboss-yellow">
                            5,000+
                          </p>

                          <p className="mt-1 text-xs font-bold text-white/60">
                            Nigerian youths empowered through knowledge,
                            skills, and opportunities.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>

              <FadeIn direction="left" delay={0.1}>
                <div className="text-center lg:text-left">
                  <SectionHeading
                    eyebrow="SelfBoss Foundation"
                    title="Empowering young people to build their own future."
                    description="SelfBoss Enterprising Youth Foundation (SEYF) is a non-profit organization committed to supporting and empowering young entrepreneurs across Nigeria."
                  />

                  <div className="mx-auto mt-6 max-w-2xl lg:mx-0">
                    <p className="text-sm leading-7 text-gray-600 sm:text-base">
                      We focus on providing essential business equipment and
                      impactful training programs that help young people launch
                      and grow successful businesses.
                    </p>

                    <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
                      Our work responds to the challenges faced by young
                      Nigerians, particularly in communities where poverty,
                      limited opportunities, and lack of access to business
                      resources can make entrepreneurship difficult.
                    </p>

                    <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
                      Through practical programs, mentorship, community
                      outreach, and strategic partnerships, we are creating
                      pathways for young people to become productive,
                      innovative, and economically empowered.
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* =====================================================
            OUR STORY
        ===================================================== */}
        <section className="relative overflow-hidden bg-selfboss-black py-20 text-white sm:py-24">
          <div className="absolute inset-0 opacity-20">
            <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[size:50px_50px]" />
          </div>

          <div className="relative mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <SectionHeading
                dark
                eyebrow="Our Story"
                title="A vision that started in 2020."
                description="SelfBoss began with a simple idea: young people should have access to the tools, knowledge, and support they need to create opportunities for themselves and others."
              />
            </div>

            <div className="mx-auto mt-14 max-w-4xl">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute bottom-0 left-[19px] top-0 w-px bg-white/10 sm:left-1/2 sm:-translate-x-1/2" />

                <Stagger>
                  <div className="space-y-10">
                    {milestones.map((milestone, index) => (
                      <div
                        key={milestone.year}
                        className={`relative grid gap-6 sm:grid-cols-2 sm:gap-12 ${
                          index % 2 === 0 ? "" : "sm:[&>div:first-child]:order-2"
                        }`}
                      >
                        <div
                          className={`pl-14 sm:pl-0 ${
                            index % 2 === 0
                              ? "sm:text-right"
                              : "sm:text-left"
                          }`}
                        >
                          <span className="text-3xl font-black text-selfboss-yellow sm:text-4xl">
                            {milestone.year}
                          </span>

                          <h3 className="mt-2 text-xl font-black">
                            {milestone.title}
                          </h3>

                          <p className="mt-2 text-sm leading-7 text-white/50">
                            {milestone.text}
                          </p>
                        </div>

                        <div className="absolute left-0 top-1 flex h-10 w-10 items-center justify-center rounded-full border-4 border-selfboss-black bg-selfboss-yellow text-xs font-black text-black sm:left-1/2 sm:-translate-x-1/2">
                          {index + 1}
                        </div>
                      </div>
                    ))}
                  </div>
                </Stagger>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            VISION + MISSION
        ===================================================== */}
        <section className="section-padding bg-selfboss-soft">
          <div className="section-container">
            <div className="mx-auto max-w-3xl text-center">
              <SectionHeading
                eyebrow="Our Direction"
                title="What drives everything we do."
                description="Our vision and mission guide every program, partnership, and opportunity we create."
              />
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              <FadeIn direction="right">
                <div className="h-full rounded-[2rem] bg-selfboss-black p-7 text-white shadow-card sm:p-9">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-selfboss-yellow text-black">
                    <Target size={24} />
                  </div>

                  <p className="mt-7 text-[10px] font-black uppercase tracking-[0.2em] text-selfboss-yellow">
                    Our Vision
                  </p>

                  <h2 className="mt-3 text-2xl font-black leading-tight sm:text-3xl">
                    A thriving community of young entrepreneurs.
                  </h2>

                  <p className="mt-5 text-sm leading-7 text-white/55">
                    To create a thriving community of young entrepreneurs who
                    drive economic development and social change in Nigeria.
                  </p>
                </div>
              </FadeIn>

              <FadeIn direction="left" delay={0.1}>
                <div className="h-full rounded-[2rem] bg-selfboss-yellow p-7 text-black shadow-card sm:p-9">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-black text-selfboss-yellow">
                    <Lightbulb size={24} />
                  </div>

                  <p className="mt-7 text-[10px] font-black uppercase tracking-[0.2em] text-black/60">
                    Our Mission
                  </p>

                  <h2 className="mt-3 text-2xl font-black leading-tight sm:text-3xl">
                    Empowering Nigeria&apos;s enterprising youth.
                  </h2>

                  <p className="mt-5 text-sm leading-7 text-black/65">
                    Empowering Nigeria&apos;s enterprising youth with the
                    necessary business equipment and training to foster
                    innovation, entrepreneurship, and sustainable economic
                    growth.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* =====================================================
            OUR GOALS
        ===================================================== */}
        <section className="section-padding bg-white">
          <div className="section-container">
            <div className="mx-auto max-w-3xl text-center">
              <SectionHeading
                eyebrow="Our Goals"
                title="Turning support into opportunity."
                description="We work across four key areas to help young Nigerians move from ideas to sustainable enterprise."
              />
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              <Stagger>
                {goals.map((goal) => {
                  const Icon = goal.icon;

                  return (
                    <div
                      key={goal.title}
                      className="group rounded-3xl border border-black/5 bg-selfboss-soft p-6 text-center transition duration-300 hover:-translate-y-1 hover:bg-selfboss-black hover:text-white hover:shadow-card"
                    >
                      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-selfboss-yellow text-black">
                        <Icon size={21} />
                      </div>

                      <h3 className="mt-5 text-lg font-black">
                        {goal.title}
                      </h3>

                      <p className="mt-3 text-sm leading-6 text-gray-600 transition-colors group-hover:text-white/50">
                        {goal.text}
                      </p>
                    </div>
                  );
                })}
              </Stagger>
            </div>
          </div>
        </section>

        {/* =====================================================
            IMPACT STATEMENT
        ===================================================== */}
        <section className="bg-selfboss-yellow">
          <div className="mx-auto max-w-6xl px-5 py-16 text-center sm:px-6 sm:py-20 lg:px-8">
            <FadeIn>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-black/60">
                Our Commitment
              </p>

              <h2 className="mx-auto mt-4 max-w-4xl text-3xl font-black leading-tight sm:text-4xl md:text-5xl">
                When young people have the right tools, they can change their
                communities.
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-black/65 sm:text-base">
                Through consistent programs and outreach, SelfBoss has
                empowered over 5,000 Nigerian youths with knowledge, skills,
                and opportunities to stay drug-free and become successful
                entrepreneurs.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Link href="/programs" className="btn-black">
                  Explore Our Programs
                  <ArrowRight size={16} />
                </Link>

                <Link href="/get-involved" className="btn-white">
                  Get Involved
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