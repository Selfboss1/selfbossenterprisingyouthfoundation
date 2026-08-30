import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  GraduationCap,
  Handshake,
  MapPin,
  Users,
} from "lucide-react";

import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import BottomNav from "@/components/layout/BottomNav";
import FloatingActions from "@/components/layout/FloatingActions";
import Footer from "@/components/layout/Footer";

import FadeIn from "@/components/animations/FadeIn";
import Stagger from "@/components/animations/Stagger";
import Counter from "@/components/animations/Counter";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Our Impact | SelfBoss Enterprising Youth Foundation",
  description:
    "Discover the impact of SelfBoss Enterprising Youth Foundation across Nigeria, including youth empowerment, entrepreneurship training, community outreach, mentorship, and strategic partnerships.",
};

const impactStats = [
  {
    value: 5000,
    suffix: "+",
    label: "Youth Empowered",
    description:
      "Young Nigerians reached with knowledge, skills, opportunities, and support.",
    icon: Users,
  },
  {
    value: 20,
    suffix: "+",
    label: "Rural Communities",
    description:
      "Communities reached through outreach, awareness, training, and empowerment.",
    icon: MapPin,
  },
  {
    value: 100,
    suffix: "+",
    label: "Workshops & Trainings",
    description:
      "Practical learning opportunities focused on entrepreneurship and digital skills.",
    icon: GraduationCap,
  },
  {
    value: 300,
    suffix: "+",
    label: "Bootcamp Participants",
    description:
      "Young people trained during intensive entrepreneurship development programs.",
    icon: Building2,
  },
];

const impactAreas = [
  {
    icon: GraduationCap,
    title: "Skills & Knowledge",
    text: "We provide practical and theoretical training that helps young people develop business, digital, financial, marketing, and personal development skills.",
  },
  {
    icon: Building2,
    title: "Entrepreneurship",
    text: "We help young people move from ideas to action by providing business resources, training, mentorship, and opportunities for sustainable enterprise.",
  },
  {
    icon: Users,
    title: "Youth Empowerment",
    text: "Our programs focus on equipping young Nigerians with the confidence, tools, and support needed to become productive contributors to society.",
  },
  {
    icon: Handshake,
    title: "Strategic Partnerships",
    text: "We collaborate with organizations and institutions to expand our reach and create more meaningful opportunities for young people.",
  },
];

const stories = [
  {
    image: "/images/gallery13.jpeg",
    category: "Entrepreneurship",
    title: "Entrepreneurship Bootcamp 2024",
    text: "A 3-day intensive bootcamp where over 300 youth learned practical business development, branding, and digital marketing strategies.",
  },
  {
    image: "/images/gallery5.jpeg",
    category: "Innovation",
    title: "Innovation Fair & Pitch Day",
    text: "Young entrepreneurs pitched their ideas to a panel of investors, creating pathways to mentorship and potential funding opportunities.",
  },
  {
    image: "/images/gallery14.jpeg",
    category: "Skills",
    title: "Skill-Up Weekend Workshop",
    text: "Hands-on training in graphics design, website development, and digital skills for young people in Aba.",
  },
];

export default function ImpactPage() {
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

          <div className="absolute -right-40 top-10 h-96 w-96 rounded-full bg-selfboss-yellow/10 blur-3xl" />

          <div className="relative mx-auto flex min-h-[470px] max-w-7xl items-center px-5 py-20 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <FadeIn>
                <span className="inline-flex rounded-full border border-selfboss-yellow/30 bg-selfboss-yellow/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-selfboss-yellow">
                  Our Impact
                </span>
              </FadeIn>

              <FadeIn delay={0.1}>
                <h1 className="mt-6 text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                  Creating opportunities that{" "}
                  <span className="text-selfboss-yellow">
                    create impact.
                  </span>
                </h1>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/60 sm:text-base sm:leading-8">
                  Every young person equipped with knowledge, skills, tools,
                  and opportunity represents another potential business,
                  another potential job, and another stronger community.
                </p>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                  <Link href="#impact-numbers" className="btn-yellow">
                    See Our Numbers
                    <ArrowRight size={16} />
                  </Link>

                  <Link href="/get-involved" className="btn-white">
                    Help Us Do More
                  </Link>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* =====================================================
            IMPACT NUMBERS
        ===================================================== */}
        <section
          id="impact-numbers"
          className="relative bg-selfboss-yellow"
        >
          <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 sm:py-20 lg:px-8">
            <div className="grid gap-px overflow-hidden rounded-[2rem] border border-black/10 bg-black/10 sm:grid-cols-2 lg:grid-cols-4">
              {impactStats.map((stat, index) => {
                const Icon = stat.icon;

                return (
                  <FadeIn
                    key={stat.label}
                    delay={index * 0.08}
                  >
                    <div className="h-full bg-selfboss-yellow p-6 text-center sm:p-8">
                      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-black text-selfboss-yellow">
                        <Icon size={21} />
                      </div>

                      <div className="mt-5">
                        <Counter
                          value={stat.value}
                          suffix={stat.suffix}
                          className="text-4xl font-black tracking-tight sm:text-5xl"
                        />
                      </div>

                      <h2 className="mt-2 text-sm font-black uppercase tracking-wide">
                        {stat.label}
                      </h2>

                      <p className="mx-auto mt-3 max-w-xs text-xs leading-6 text-black/55">
                        {stat.description}
                      </p>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </section>

        {/* =====================================================
            IMPACT INTRO
        ===================================================== */}
        <section className="section-padding bg-white">
          <div className="section-container">
            <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
              <FadeIn direction="right">
                <div>
                  <SectionHeading
                    eyebrow="The Difference We Are Making"
                    title="Empowerment that reaches beyond the individual."
                    description="Our work is about more than teaching entrepreneurship. It is about creating a ripple effect that reaches families, businesses, communities, and the wider economy."
                  />

                  <div className="mt-7 space-y-4 text-sm leading-7 text-gray-600 sm:text-base">
                    <p>
                      Through consistent programs and outreach efforts, we
                      have empowered over{" "}
                      <strong className="font-black text-selfboss-black">
                        5,000 Nigerian youths
                      </strong>{" "}
                      with knowledge, skills, and opportunities to stay
                      drug-free and pursue productive entrepreneurial paths.
                    </p>

                    <p>
                      Our activities have extended into more than{" "}
                      <strong className="font-black text-selfboss-black">
                        20 rural communities
                      </strong>
                      , giving young people access to opportunities that may
                      otherwise remain out of reach.
                    </p>

                    <p>
                      From entrepreneurship bootcamps to digital skills
                      workshops and community campaigns, we continue to build
                      practical pathways for young Nigerians to participate in
                      economic and social development.
                    </p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn direction="left" delay={0.1}>
                <div className="relative mx-auto w-full max-w-xl">
                  <div className="absolute -right-4 -top-4 h-24 w-24 rounded-2xl bg-selfboss-yellow sm:-right-6 sm:-top-6" />

                  <div className="relative overflow-hidden rounded-[2rem] bg-selfboss-black p-2 shadow-card">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem]">
                      <Image
                        src="/images/gallery8.jpeg"
                        alt="SelfBoss community youth empowerment campaign"
                        fill
                        className="object-cover transition duration-700 hover:scale-105"
                        sizes="(max-width: 1024px) 90vw, 45vw"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                      <div className="absolute bottom-5 left-5 right-5">
                        <div className="rounded-2xl border border-white/10 bg-black/70 p-5 backdrop-blur-md">
                          <p className="text-xs font-black uppercase tracking-[0.15em] text-selfboss-yellow">
                            Community Impact
                          </p>

                          <p className="mt-2 text-sm font-bold leading-6 text-white">
                            Reaching young people where opportunity is needed
                            most.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* =====================================================
            IMPACT AREAS
        ===================================================== */}
        <section className="relative overflow-hidden bg-selfboss-soft py-20 sm:py-24">
          <div className="absolute inset-0 opacity-[0.35]">
            <div className="h-full w-full bg-[linear-gradient(rgba(0,0,0,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.035)_1px,transparent_1px)] bg-[size:45px_45px]" />
          </div>

          <div className="section-container relative">
            <div className="mx-auto max-w-3xl text-center">
              <SectionHeading
                eyebrow="Where We Create Change"
                title="Four ways we turn support into impact."
                description="Our approach combines skills, entrepreneurship, empowerment, and collaboration to create opportunities that can last."
              />
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              <Stagger>
                {impactAreas.map((area) => {
                  const Icon = area.icon;

                  return (
                    <div
                      key={area.title}
                      className="group rounded-[2rem] border border-black/5 bg-white p-6 text-center transition duration-300 hover:-translate-y-1 hover:bg-selfboss-black hover:text-white hover:shadow-card sm:p-7"
                    >
                      <div className="mx-auto flex h-13 w-13 items-center justify-center rounded-2xl bg-selfboss-yellow text-black">
                        <Icon size={21} />
                      </div>

                      <h3 className="mt-5 text-lg font-black">
                        {area.title}
                      </h3>

                      <p className="mt-3 text-sm leading-6 text-gray-600 transition-colors group-hover:text-white/50">
                        {area.text}
                      </p>
                    </div>
                  );
                })}
              </Stagger>
            </div>
          </div>
        </section>

        {/* =====================================================
            FEATURED IMPACT STORIES
        ===================================================== */}
        <section className="section-padding bg-white">
          <div className="section-container">
            <div className="mx-auto max-w-3xl text-center">
              <SectionHeading
                eyebrow="Impact In Action"
                title="Programs that bring the numbers to life."
                description="Behind every statistic are young people learning, building, connecting, and taking steps toward a better future."
              />
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              <Stagger>
                {stories.map((story) => (
                  <article
                    key={story.title}
                    className="group overflow-hidden rounded-[2rem] border border-black/5 bg-white shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-card"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={story.image}
                        alt={story.title}
                        fill
                        className="object-cover transition duration-700 group-hover:scale-105"
                        sizes="(max-width: 1024px) 100vw, 33vw"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                      <span className="absolute left-5 top-5 rounded-full bg-selfboss-yellow px-3 py-1.5 text-[9px] font-black uppercase tracking-wider text-black">
                        {story.category}
                      </span>
                    </div>

                    <div className="p-6 sm:p-7">
                      <h3 className="text-xl font-black leading-tight">
                        {story.title}
                      </h3>

                      <p className="mt-3 text-sm leading-6 text-gray-600">
                        {story.text}
                      </p>

                      <Link
                        href="/events"
                        className="mt-5 inline-flex items-center gap-2 text-sm font-black text-black transition-colors hover:text-selfboss-yellow"
                      >
                        View Events
                        <ArrowRight
                          size={15}
                          className="transition-transform group-hover:translate-x-1"
                        />
                      </Link>
                    </div>
                  </article>
                ))}
              </Stagger>
            </div>
          </div>
        </section>

        {/* =====================================================
            PARTNERSHIP IMPACT
        ===================================================== */}
        <section className="bg-selfboss-black text-white">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
              <FadeIn direction="right">
                <div className="text-center lg:text-left">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-selfboss-yellow">
                    Collaboration
                  </p>

                  <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl md:text-5xl">
                    Impact grows when we work together.
                  </h2>

                  <p className="mt-5 text-sm leading-7 text-white/50 sm:text-base">
                    We believe sustainable youth empowerment requires
                    collaboration. Through strategic relationships with
                    organizations including NDLEA and other stakeholders, we
                    continue to explore ways to expand our reach and deepen
                    our impact.
                  </p>

                  <div className="mt-7">
                    <Link href="/partner" className="btn-yellow">
                      Partner With Us
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </FadeIn>

              <FadeIn direction="left" delay={0.1}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                    <Handshake className="text-selfboss-yellow" size={24} />

                    <h3 className="mt-5 text-lg font-black">
                      Strategic Collaboration
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-white/45">
                      Working with relevant organizations and stakeholders to
                      strengthen youth-focused initiatives.
                    </p>
                  </div>

                  <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                    <Users className="text-selfboss-yellow" size={24} />

                    <h3 className="mt-5 text-lg font-black">
                      Shared Impact
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-white/45">
                      Combining resources, knowledge, and networks to reach
                      more young people.
                    </p>
                  </div>

                  <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:col-span-2">
                    <MapPin className="text-selfboss-yellow" size={24} />

                    <h3 className="mt-5 text-lg font-black">
                      Community Reach
                    </h3>

                    <p className="mt-2 max-w-2xl text-sm leading-6 text-white/45">
                      Our focus continues to extend into communities where
                      young people need access to skills, support, and
                      economic opportunities.
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* =====================================================
            FINAL CTA
        ===================================================== */}
        <section className="section-padding bg-white">
          <div className="section-container">
            <FadeIn>
              <div className="relative overflow-hidden rounded-[2rem] bg-selfboss-yellow px-6 py-14 text-center sm:px-10 sm:py-16">
                <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-black/10" />

                <div className="absolute -bottom-24 -left-20 h-60 w-60 rounded-full bg-black/5" />

                <div className="relative mx-auto max-w-3xl">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-black/55">
                    Be Part of the Impact
                  </p>

                  <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl md:text-5xl">
                    5,000+ young people is only the beginning.
                  </h2>

                  <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-black/65 sm:text-base">
                    Help us reach more communities, train more young people,
                    provide more resources, and create more opportunities for
                    the next generation.
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