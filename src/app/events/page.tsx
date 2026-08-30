import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, MapPin, Users } from "lucide-react";

import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import BottomNav from "@/components/layout/BottomNav";
import FloatingActions from "@/components/layout/FloatingActions";
import Footer from "@/components/layout/Footer";

import FadeIn from "@/components/animations/FadeIn";
import Stagger from "@/components/animations/Stagger";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Events & Activities | SelfBoss Enterprising Youth Foundation",
  description:
    "Explore SelfBoss Enterprising Youth Foundation's entrepreneurship bootcamps, innovation fairs, skills workshops, women in enterprise programs, community campaigns, and youth market events.",
};

const events = [
  {
    image: "/images/gallery13.jpeg",
    category: "Entrepreneurship",
    title: "Entrepreneurship Bootcamp 2024",
    description:
      "A 3-day intensive bootcamp where over 300 youth learned practical business development, branding, and digital marketing strategies.",
    location: "Abia State, Nigeria",
    audience: "300+ Youth",
  },
  {
    image: "/images/gallery5.jpeg",
    category: "Innovation",
    title: "Innovation Fair & Pitch Day",
    description:
      "Young entrepreneurs pitched their ideas to a panel of investors, creating opportunities for mentorship, connections, and potential funding.",
    location: "Abia State, Nigeria",
    audience: "Young Entrepreneurs",
  },
  {
    image: "/images/gallery14.jpeg",
    category: "Skills Development",
    title: "Skill-Up Weekend Workshop",
    description:
      "Hands-on training on graphics design, website development, and digital skills designed to help young people develop valuable practical abilities.",
    location: "Aba, Abia State",
    audience: "Young People",
  },
  {
    image: "/images/gallery4.jpeg",
    category: "Women in Enterprise",
    title: "Women in Enterprise Forum",
    description:
      "An empowerment forum supporting young women through storytelling, mentoring, entrepreneurship conversations, and business grant sessions.",
    location: "Abia State, Nigeria",
    audience: "Young Women",
  },
  {
    image: "/images/gallery8.jpeg",
    category: "Community Outreach",
    title: "Street-to-Startup Youth Campaign",
    description:
      "An awareness campaign across local communities to identify and equip street youth with startup kits, training, and pathways toward productive enterprise.",
    location: "Local Communities",
    audience: "Community Youth",
  },
  {
    image: "/images/gallery6.jpeg",
    category: "Market Access",
    title: "Community Market Day — Youth Edition",
    description:
      "Young entrepreneurs showcased and sold handmade crafts, clothing, agricultural products, and other businesses directly to the public.",
    location: "Abia State, Nigeria",
    audience: "Youth Entrepreneurs",
  },
];

const eventHighlights = [
  {
    value: "300+",
    label: "Bootcamp Participants",
  },
  {
    value: "100+",
    label: "Workshops & Trainings",
  },
  {
    value: "20+",
    label: "Rural Communities",
  },
];

export default function EventsPage() {
  return (
    <>
      <TopBar />
      <Navbar />

      <main className="overflow-hidden">
        {/* =====================================================
            HERO
        ===================================================== */}
        <section className="relative overflow-hidden bg-selfboss-black text-white">
          {/* Grid background */}
          <div className="absolute inset-0 opacity-20">
            <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:45px_45px]" />
          </div>

          <div className="absolute -left-32 top-0 h-80 w-80 rounded-full bg-selfboss-yellow/10 blur-3xl" />

          <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-selfboss-yellow/10 blur-3xl" />

          <div className="relative mx-auto flex min-h-[450px] max-w-7xl items-center px-5 py-20 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <FadeIn>
                <span className="inline-flex items-center gap-2 rounded-full border border-selfboss-yellow/30 bg-selfboss-yellow/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-selfboss-yellow">
                  <CalendarDays size={13} />
                  Events & Activities
                </span>
              </FadeIn>

              <FadeIn delay={0.1}>
                <h1 className="mt-6 text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                  Where ideas become{" "}
                  <span className="text-selfboss-yellow">
                    action.
                  </span>
                </h1>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/60 sm:text-base sm:leading-8">
                  From entrepreneurship bootcamps to community campaigns,
                  SelfBoss creates practical spaces where young Nigerians can
                  learn, connect, build, and grow.
                </p>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                  <Link href="#events" className="btn-yellow">
                    Explore Activities
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
            HIGHLIGHTS
        ===================================================== */}
        <section className="bg-selfboss-yellow">
          <div className="mx-auto max-w-7xl px-5 py-10 sm:px-6 sm:py-14 lg:px-8">
            <div className="grid gap-px overflow-hidden rounded-[2rem] border border-black/10 bg-black/10 sm:grid-cols-3">
              {eventHighlights.map((item, index) => (
                <FadeIn key={item.label} delay={index * 0.08}>
                  <div className="bg-selfboss-yellow p-6 text-center sm:p-8">
                    <p className="text-3xl font-black sm:text-4xl">
                      {item.value}
                    </p>

                    <p className="mt-2 text-[10px] font-black uppercase tracking-[0.15em] text-black/60">
                      {item.label}
                    </p>
                  </div>
                </FadeIn>
              ))}
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
                eyebrow="Our Activities"
                title="Creating spaces for young people to learn and grow."
                description="Our events bring entrepreneurship out of the classroom and into real-world experiences."
              />

              <FadeIn delay={0.15}>
                <p className="mt-6 text-sm leading-7 text-gray-600 sm:text-base">
                  We organize and support activities that give young people
                  opportunities to develop practical skills, showcase their
                  ideas, meet experienced professionals, access resources,
                  and connect with other entrepreneurs.
                </p>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* =====================================================
            EVENT GRID
        ===================================================== */}
        <section
          id="events"
          className="relative overflow-hidden bg-selfboss-soft py-20 sm:py-24"
        >
          {/* Subtle grid */}
          <div className="absolute inset-0 opacity-[0.35]">
            <div className="h-full w-full bg-[linear-gradient(rgba(0,0,0,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.035)_1px,transparent_1px)] bg-[size:45px_45px]" />
          </div>

          <div className="section-container relative">
            <div className="mx-auto max-w-3xl text-center">
              <SectionHeading
                eyebrow="Past Empowerment Events"
                title="Impact in motion."
                description="A look at some of the activities through which SelfBoss has connected with and empowered young Nigerians."
              />
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Stagger>
                {events.map((event) => (
                  <article
                    key={event.title}
                    className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-black/5 bg-white shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-card"
                  >
                    {/* IMAGE */}
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={event.image}
                        alt={event.title}
                        fill
                        className="object-cover transition duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/5 to-transparent" />

                      <div className="absolute left-5 top-5">
                        <span className="rounded-full bg-selfboss-yellow px-3 py-1.5 text-[9px] font-black uppercase tracking-wider text-black">
                          {event.category}
                        </span>
                      </div>
                    </div>

                    {/* CONTENT */}
                    <div className="flex flex-1 flex-col p-6 sm:p-7">
                      <h2 className="text-xl font-black leading-tight text-selfboss-black">
                        {event.title}
                      </h2>

                      <p className="mt-3 flex-1 text-sm leading-6 text-gray-600">
                        {event.description}
                      </p>

                      <div className="mt-6 space-y-2 border-t border-black/5 pt-5">
                        <div className="flex items-center gap-2 text-xs font-bold text-gray-500">
                          <MapPin
                            size={14}
                            className="text-selfboss-yellow"
                          />
                          {event.location}
                        </div>

                        <div className="flex items-center gap-2 text-xs font-bold text-gray-500">
                          <Users
                            size={14}
                            className="text-selfboss-yellow"
                          />
                          {event.audience}
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </Stagger>
            </div>
          </div>
        </section>

        {/* =====================================================
            FEATURED EVENT
        ===================================================== */}
        <section className="section-padding bg-white">
          <div className="section-container">
            <div className="grid items-center gap-10 overflow-hidden rounded-[2rem] bg-selfboss-black lg:grid-cols-2 lg:gap-0">
              <FadeIn direction="right">
                <div className="relative aspect-[4/3] min-h-[300px] lg:h-full">
                  <Image
                    src="/images/gallery13.jpeg"
                    alt="Entrepreneurship Bootcamp 2024"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent lg:bg-gradient-to-r" />

                  <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8">
                    <span className="rounded-full bg-selfboss-yellow px-3 py-1.5 text-[9px] font-black uppercase tracking-wider text-black">
                      Featured
                    </span>
                  </div>
                </div>
              </FadeIn>

              <FadeIn direction="left" delay={0.1}>
                <div className="p-7 text-white sm:p-10 lg:p-12">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-selfboss-yellow">
                    Entrepreneurship Bootcamp 2024
                  </p>

                  <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">
                    Three days of practical entrepreneurship.
                  </h2>

                  <p className="mt-5 text-sm leading-7 text-white/50 sm:text-base">
                    Over 300 youth participated in an intensive bootcamp
                    covering practical business development, branding, and
                    digital marketing strategies.
                  </p>

                  <div className="mt-7 grid grid-cols-2 gap-3">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <p className="text-2xl font-black text-selfboss-yellow">
                        300+
                      </p>

                      <p className="mt-1 text-[9px] font-black uppercase tracking-wider text-white/40">
                        Participants
                      </p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <p className="text-2xl font-black text-selfboss-yellow">
                        3
                      </p>

                      <p className="mt-1 text-[9px] font-black uppercase tracking-wider text-white/40">
                        Days
                      </p>
                    </div>
                  </div>

                  <div className="mt-7">
                    <Link href="/programs" className="btn-yellow">
                      Explore Our Programs
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* =====================================================
            COMMUNITY SECTION
        ===================================================== */}
        <section className="relative overflow-hidden bg-selfboss-yellow">
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <FadeIn>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-black/55">
                  More Than Events
                </p>

                <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl md:text-5xl">
                  Every gathering is an opportunity to connect, learn, and
                  build.
                </h2>

                <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-black/65 sm:text-base">
                  Our activities are designed to create meaningful
                  interactions between young entrepreneurs, mentors,
                  professionals, investors, organizations, and communities.
                </p>

                <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                  <Link href="/volunteer" className="btn-black">
                    Volunteer at Our Events
                    <ArrowRight size={16} />
                  </Link>

                  <Link href="/partner" className="btn-white">
                    Partner With Us
                  </Link>
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
              <div className="rounded-[2rem] bg-selfboss-black px-6 py-14 text-center text-white sm:px-10 sm:py-16">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-selfboss-yellow">
                  Be Part of the Next Chapter
                </p>

                <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-black leading-tight sm:text-4xl md:text-5xl">
                  The next event could be where your idea takes off.
                </h2>

                <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/50 sm:text-base">
                  Join our community, volunteer your skills, partner with
                  SelfBoss, or support the programs creating opportunities for
                  young Nigerians.
                </p>

                <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                  <Link href="/get-involved" className="btn-yellow">
                    Get Involved
                    <ArrowRight size={16} />
                  </Link>

                  <Link href="/donate" className="btn-white">
                    Support Our Work
                  </Link>
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