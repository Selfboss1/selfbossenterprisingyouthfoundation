import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Camera,
  HeartHandshake,
  Images,
} from "lucide-react";

import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import BottomNav from "@/components/layout/BottomNav";
import FloatingActions from "@/components/layout/FloatingActions";
import Footer from "@/components/layout/Footer";

import FadeIn from "@/components/animations/FadeIn";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Gallery | SelfBoss Enterprising Youth Foundation",
  description:
    "Explore photos from SelfBoss Enterprising Youth Foundation's entrepreneurship programs, youth empowerment events, workshops, outreach activities, and community initiatives across Nigeria.",
};

const gallery = [
  {
    image: "/images/gallery1.jpeg",
    title: "Youth Empowerment",
    category: "Youth Development",
    description:
      "Young Nigerians coming together to learn, connect, and discover new opportunities.",
  },
  {
    image: "/images/gallery2.jpeg",
    title: "Community Engagement",
    category: "Community",
    description:
      "Connecting directly with communities to identify opportunities for youth development.",
  },
  {
    image: "/images/gallery3.jpeg",
    title: "Entrepreneurship Session",
    category: "Training",
    description:
      "Interactive sessions designed to build entrepreneurial knowledge and practical skills.",
  },
  {
    image: "/images/gallery4.jpeg",
    title: "Women in Enterprise Forum",
    category: "Women in Enterprise",
    description:
      "Empowering young women through storytelling, mentoring, business education, and grant opportunities.",
  },
  {
    image: "/images/gallery5.jpeg",
    title: "Innovation Fair & Pitch Day",
    category: "Innovation",
    description:
      "Young entrepreneurs presenting their ideas and connecting with mentors, investors, and business professionals.",
  },
  {
    image: "/images/gallery6.jpeg",
    title: "Community Market Day",
    category: "Entrepreneurship",
    description:
      "Youth entrepreneurs showcasing and selling their products and services to the community.",
  },
  {
    image: "/images/gallery7.jpeg",
    title: "Youth Business Initiative",
    category: "Business",
    description:
      "Supporting young people as they develop practical business ideas and entrepreneurial confidence.",
  },
  {
    image: "/images/gallery8.jpeg",
    title: "Street-to-Startup Youth Campaign",
    category: "Outreach",
    description:
      "Taking youth empowerment directly into local communities through awareness and startup support.",
  },
  {
    image: "/images/gallery9.jpeg",
    title: "Skills Development",
    category: "Skills",
    description:
      "Practical learning opportunities helping young people develop valuable and marketable skills.",
  },
  {
    image: "/images/gallery10.jpeg",
    title: "Youth Networking",
    category: "Networking",
    description:
      "Creating spaces where young entrepreneurs can meet, collaborate, and exchange ideas.",
  },
  {
    image: "/images/gallery11.jpeg",
    title: "Entrepreneurship Community",
    category: "Community",
    description:
      "Building a supportive network of young people committed to entrepreneurship and personal growth.",
  },
  {
    image: "/images/gallery12.jpeg",
    title: "Empowerment Initiative",
    category: "Empowerment",
    description:
      "Providing knowledge, resources, and opportunities that help young Nigerians move forward.",
  },
  {
    image: "/images/gallery13.jpeg",
    title: "Entrepreneurship Bootcamp 2024",
    category: "Bootcamp",
    description:
      "A 3-day intensive bootcamp where over 300 youth learned practical business development, branding, and digital marketing strategies.",
  },
  {
    image: "/images/gallery14.jpeg",
    title: "Skill-Up Weekend Workshop",
    category: "Training",
    description:
      "Hands-on training in graphics design, website development, and digital skills for young people in Aba.",
  },
  {
    image: "/images/gallery15.jpeg",
    title: "Youth Impact Program",
    category: "Youth Development",
    description:
      "Creating opportunities for young people to learn, grow, build, and contribute to their communities.",
  },
];

export default function GalleryPage() {
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

          <div className="relative mx-auto flex min-h-[480px] max-w-7xl items-center px-5 py-20 text-center sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <FadeIn>
                <span className="inline-flex items-center gap-2 rounded-full border border-selfboss-yellow/30 bg-selfboss-yellow/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-selfboss-yellow">
                  <Camera size={14} />
                  Our Gallery
                </span>
              </FadeIn>

              <FadeIn delay={0.1}>
                <h1 className="mt-6 text-4xl font-black leading-[1.02] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                  Moments of{" "}
                  <span className="text-selfboss-yellow">
                    impact.
                  </span>
                </h1>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/60 sm:text-base sm:leading-8">
                  Explore moments from our entrepreneurship programs,
                  empowerment initiatives, training sessions, community
                  outreach, and youth development activities.
                </p>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                  <a href="#gallery" className="btn-yellow">
                    Explore Gallery
                    <Images size={16} />
                  </a>

                  <Link href="/impact" className="btn-white">
                    See Our Impact
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
              <FadeIn>
                <SectionHeading
                  eyebrow="Captured Moments"
                  title="Every picture tells part of the story."
                  description="From training rooms to community outreach, our programs are built around people, opportunities, learning, and action."
                />
              </FadeIn>
            </div>

            <FadeIn delay={0.1}>
              <div className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-4">
                <div className="rounded-2xl bg-selfboss-black p-5 text-center text-white">
                  <p className="text-2xl font-black text-selfboss-yellow">
                    15+
                  </p>
                  <p className="mt-1 text-[10px] font-black uppercase tracking-wider text-white/40">
                    Moments
                  </p>
                </div>

                <div className="rounded-2xl bg-selfboss-yellow p-5 text-center text-black">
                  <p className="text-2xl font-black">5K+</p>
                  <p className="mt-1 text-[10px] font-black uppercase tracking-wider text-black/50">
                    Youth Impacted
                  </p>
                </div>

                <div className="rounded-2xl bg-selfboss-black p-5 text-center text-white">
                  <p className="text-2xl font-black text-selfboss-yellow">
                    20+
                  </p>
                  <p className="mt-1 text-[10px] font-black uppercase tracking-wider text-white/40">
                    Communities
                  </p>
                </div>

                <div className="rounded-2xl bg-selfboss-yellow p-5 text-center text-black">
                  <p className="text-2xl font-black">100+</p>
                  <p className="mt-1 text-[10px] font-black uppercase tracking-wider text-black/50">
                    Workshops
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* =====================================================
            GALLERY GRID
        ===================================================== */}
        <section
          id="gallery"
          className="relative overflow-hidden bg-selfboss-soft"
        >
          <div className="absolute inset-0 opacity-[0.35]">
            <div className="h-full w-full bg-[linear-gradient(rgba(0,0,0,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.035)_1px,transparent_1px)] bg-[size:45px_45px]" />
          </div>

          <div className="section-container relative section-padding">
            <div className="mx-auto max-w-3xl text-center">
              <FadeIn>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
                  SelfBoss In Action
                </p>

                <h2 className="mt-3 text-3xl font-black text-selfboss-black sm:text-4xl">
                  Our work, captured in moments.
                </h2>

                <p className="mt-4 text-sm leading-7 text-gray-500">
                  A look into the people, programs, and communities that make
                  our mission possible.
                </p>
              </FadeIn>
            </div>

            {/* Gallery */}
            <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {gallery.map((item, index) => (
                <FadeIn
                  key={item.image}
                  delay={(index % 6) * 0.05}
                  direction="up"
                >
                  <article
                    className={`group relative overflow-hidden rounded-[2rem] bg-selfboss-black ${
                      index === 0 || index === 7 || index === 12
                        ? "lg:col-span-2"
                        : ""
                    }`}
                  >
                    <div
                      className={`relative w-full ${
                        index === 0 ||
                        index === 7 ||
                        index === 12
                          ? "aspect-[16/9]"
                          : "aspect-[4/3]"
                      }`}
                    >
                      <Image
                        src={item.image}
                        alt={`${item.title} - SelfBoss Enterprising Youth Foundation`}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition duration-700 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />

                      <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                        <span className="inline-flex rounded-full bg-selfboss-yellow px-3 py-1 text-[9px] font-black uppercase tracking-wider text-black">
                          {item.category}
                        </span>

                        <h3 className="mt-3 text-lg font-black text-white sm:text-xl">
                          {item.title}
                        </h3>

                        <p className="mt-2 max-w-xl text-xs leading-5 text-white/60 sm:text-sm sm:leading-6">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </article>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            EVENTS CTA
        ===================================================== */}
        <section className="bg-white">
          <div className="section-container section-padding">
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <FadeIn direction="right">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
                    Beyond The Photos
                  </p>

                  <h2 className="mt-3 text-3xl font-black leading-tight text-selfboss-black sm:text-4xl">
                    Every event is an opportunity to create impact.
                  </h2>

                  <p className="mt-5 text-sm leading-7 text-gray-500 sm:text-base">
                    Our bootcamps, workshops, outreach campaigns, market days,
                    pitch events, and community initiatives are designed to
                    equip young Nigerians with the tools and confidence to
                    create a better future.
                  </p>

                  <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                    <Link href="/events" className="btn-black">
                      Explore Events
                      <ArrowRight size={16} />
                    </Link>

                    <Link href="/programs" className="btn-yellow">
                      Our Programs
                    </Link>
                  </div>
                </div>
              </FadeIn>

              <FadeIn direction="left" delay={0.1}>
                <div className="rounded-[2rem] bg-selfboss-yellow p-7 sm:p-10">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-black text-selfboss-yellow">
                    <HeartHandshake size={25} />
                  </div>

                  <h3 className="mt-6 text-2xl font-black text-black">
                    Want to be part of the next moment?
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-black/60">
                    Join us as a volunteer, partner, donor, mentor, or
                    participant and help us create more opportunities for young
                    Nigerians.
                  </p>

                  <div className="mt-6">
                    <Link href="/get-involved" className="btn-black">
                      Get Involved
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* =====================================================
            FINAL CTA
        ===================================================== */}
        <section className="bg-selfboss-black text-white">
          <div className="mx-auto max-w-5xl px-5 py-20 text-center sm:px-6 sm:py-24 lg:px-8">
            <FadeIn>
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-selfboss-yellow text-black">
                <Camera size={24} />
              </div>

              <p className="mt-6 text-[10px] font-black uppercase tracking-[0.2em] text-selfboss-yellow">
                Be Part Of The Story
              </p>

              <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl md:text-5xl">
                The next story could start with you.
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/45 sm:text-base">
                Help us reach more young Nigerians with the skills, resources,
                mentorship, and opportunities they need to build sustainable
                futures.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Link href="/volunteer" className="btn-yellow">
                  Volunteer
                  <ArrowRight size={16} />
                </Link>

                <Link href="/partner" className="btn-white">
                  Partner With Us
                </Link>

                <Link href="/donate" className="btn-white">
                  Donate
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