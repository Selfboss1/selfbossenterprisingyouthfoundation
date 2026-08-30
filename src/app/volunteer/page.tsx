import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  HeartHandshake,
  Lightbulb,
  Mail,
  Megaphone,
  Users,
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
  title: "Volunteer | SelfBoss Enterprising Youth Foundation",
  description:
    "Volunteer with SelfBoss Enterprising Youth Foundation and help empower young Nigerians through mentorship, entrepreneurship training, community outreach, and youth development.",
};

const volunteerRoles = [
  {
    icon: Users,
    title: "Mentor",
    description:
      "Share your professional experience and guide young entrepreneurs as they develop their ideas and businesses.",
  },
  {
    icon: Lightbulb,
    title: "Trainer",
    description:
      "Teach practical skills in entrepreneurship, digital skills, business development, financial literacy, marketing, and more.",
  },
  {
    icon: Megaphone,
    title: "Community Outreach",
    description:
      "Help us reach young people and communities that can benefit from our empowerment programs.",
  },
  {
    icon: Wrench,
    title: "Event Support",
    description:
      "Support the planning and execution of bootcamps, workshops, networking events, fairs, and community programs.",
  },
];

const benefits = [
  "Use your skills to create meaningful community impact.",
  "Connect with young entrepreneurs and emerging innovators.",
  "Contribute to practical youth development programs.",
  "Build relationships with professionals and organizations.",
  "Support entrepreneurship and sustainable economic growth.",
  "Become part of the SelfBoss community.",
];

export default function VolunteerPage() {
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
                  <HeartHandshake size={14} />
                  Volunteer With Us
                </span>
              </FadeIn>

              <FadeIn delay={0.1}>
                <h1 className="mt-6 text-4xl font-black leading-[1.02] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                  Your skills can become{" "}
                  <span className="text-selfboss-yellow">
                    someone's opportunity.
                  </span>
                </h1>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/60 sm:text-base sm:leading-8">
                  Join our passionate community of volunteers and help us
                  equip, train, mentor, and inspire the next generation of
                  Nigerian entrepreneurs.
                </p>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                  <a href="#volunteer" className="btn-yellow">
                    Become A Volunteer
                    <ArrowRight size={16} />
                  </a>

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
                  eyebrow="Why Volunteer?"
                  title="Impact doesn't always require money."
                  description="Sometimes the most valuable thing you can give is your knowledge, experience, time, network, or willingness to serve."
                />

                <p className="mt-6 text-sm leading-7 text-gray-500 sm:text-base">
                  SelfBoss works with people who believe young Nigerians
                  deserve access to practical knowledge, resources, mentorship,
                  and opportunities. Volunteers help turn that belief into
                  action.
                </p>
              </FadeIn>

              <FadeIn direction="left" delay={0.1}>
                <div className="rounded-[2rem] bg-selfboss-yellow p-7 text-black sm:p-10">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-black text-selfboss-yellow">
                    <HeartHandshake size={25} />
                  </div>

                  <h3 className="mt-6 text-2xl font-black">
                    Be part of the change.
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-black/60">
                    Whether you can contribute an hour, a day, a skill, or
                    professional expertise, your contribution can help a young
                    person take their next step.
                  </p>

                  <div className="mt-6 border-t border-black/10 pt-6">
                    <p className="text-xs font-black uppercase tracking-[0.15em]">
                      Aba • Abia State • Nigeria
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* =====================================================
            VOLUNTEER ROLES
        ===================================================== */}
        <section className="bg-selfboss-black text-white">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <FadeIn>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-selfboss-yellow">
                  Ways To Serve
                </p>

                <h2 className="mt-3 text-3xl font-black sm:text-4xl">
                  Find your place in the mission.
                </h2>

                <p className="mt-4 text-sm leading-7 text-white/40 sm:text-base">
                  We welcome people with different skills, backgrounds, and
                  experiences.
                </p>
              </FadeIn>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <Stagger>
                {volunteerRoles.map((role) => {
                  const Icon = role.icon;

                  return (
                    <div
                      key={role.title}
                      className="group rounded-[2rem] border border-white/10 bg-white/5 p-6 transition duration-300 hover:-translate-y-1 hover:border-selfboss-yellow/30"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-selfboss-yellow text-black transition group-hover:scale-105">
                        <Icon size={21} />
                      </div>

                      <h3 className="mt-6 text-lg font-black">
                        {role.title}
                      </h3>

                      <p className="mt-3 text-sm leading-6 text-white/40">
                        {role.description}
                      </p>
                    </div>
                  );
                })}
              </Stagger>
            </div>
          </div>
        </section>

        {/* =====================================================
            BENEFITS
        ===================================================== */}
        <section className="relative overflow-hidden bg-selfboss-soft">
          <div className="absolute inset-0 opacity-[0.35]">
            <div className="h-full w-full bg-[linear-gradient(rgba(0,0,0,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.035)_1px,transparent_1px)] bg-[size:45px_45px]" />
          </div>

          <div className="section-container relative py-20 sm:py-24">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
              <FadeIn direction="right">
                <SectionHeading
                  eyebrow="Why Join?"
                  title="Give your skills a bigger purpose."
                  description="Volunteering with SelfBoss gives you the opportunity to contribute to a growing youth empowerment movement."
                />
              </FadeIn>

              <FadeIn direction="left" delay={0.1}>
                <div className="rounded-[2rem] bg-white p-7 shadow-sm sm:p-9">
                  <div className="space-y-4">
                    {benefits.map((benefit) => (
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
            HOW TO JOIN
        ===================================================== */}
        <section id="volunteer" className="bg-white">
          <div className="section-container section-padding">
            <div className="mx-auto max-w-3xl text-center">
              <FadeIn>
                <SectionHeading
                  eyebrow="Get Started"
                  title="Ready to volunteer?"
                  description="Getting involved starts with a simple conversation. Tell us how you would like to contribute."
                />
              </FadeIn>
            </div>

            <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-3">
              {[
                {
                  number: "01",
                  title: "Reach Out",
                  text: "Send us an email introducing yourself and your area of interest.",
                },
                {
                  number: "02",
                  title: "Connect",
                  text: "We'll discuss your skills, availability, and how you can contribute.",
                },
                {
                  number: "03",
                  title: "Make Impact",
                  text: "Join a suitable program, event, training, or community initiative.",
                },
              ].map((step, index) => (
                <FadeIn key={step.number} delay={index * 0.08}>
                  <div className="h-full rounded-[2rem] border border-black/5 bg-selfboss-soft p-6">
                    <span className="text-sm font-black text-selfboss-yellow">
                      {step.number}
                    </span>

                    <h3 className="mt-5 text-lg font-black text-selfboss-black">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-gray-500">
                      {step.text}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>

            <FadeIn delay={0.25}>
              <div className="mx-auto mt-8 flex max-w-4xl flex-col items-center justify-between gap-5 rounded-[2rem] bg-selfboss-black p-7 text-center text-white sm:flex-row sm:text-left sm:p-8">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-selfboss-yellow">
                    Volunteer Enquiries
                  </p>

                  <p className="mt-2 text-lg font-black">
                    Selfbossbiz@gmail.com
                  </p>
                </div>

                <a
                  href="mailto:Selfbossbiz@gmail.com?subject=Volunteer%20Enquiry"
                  className="btn-yellow"
                >
                  Email Us
                  <Mail size={16} />
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
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-black text-selfboss-yellow">
                <HeartHandshake size={25} />
              </div>

              <h2 className="mt-6 text-3xl font-black leading-tight sm:text-4xl md:text-5xl">
                One person can make a difference.
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-black/60 sm:text-base">
                Bring your time, knowledge, skills, and passion. Together, we
                can create more opportunities for young Nigerians to build,
                innovate, and thrive.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <a
                  href="mailto:Selfbossbiz@gmail.com?subject=Volunteer%20Enquiry"
                  className="btn-black"
                >
                  Become A Volunteer
                  <ArrowRight size={16} />
                </a>

                <Link href="/donate" className="btn-white">
                  Support With A Donation
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