import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  HeartHandshake,
  Handshake,
  Heart,
  Users,
  CheckCircle2,
  Mail,
  Phone,
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
  title: "Get Involved | SelfBoss Enterprising Youth Foundation",
  description:
    "Support SelfBoss Enterprising Youth Foundation by donating, volunteering, mentoring, or partnering to empower young Nigerians with skills, resources, and opportunities.",
};

const involvementOptions = [
  {
    icon: Heart,
    number: "01",
    title: "Donate",
    description:
      "Your donation helps us reach more young people with practical training, business resources, equipment, and empowerment opportunities.",
    image: "/images/gallery17.jpeg",
    href: "#donate",
    button: "Donate Now",
    features: [
      "Support youth training",
      "Provide business equipment",
      "Fund community outreach",
      "Expand our programs",
    ],
  },
  {
    icon: Users,
    number: "02",
    title: "Volunteer",
    description:
      "Give your time, knowledge, and skills to help young people learn, grow, and build sustainable businesses.",
    image: "/images/gallery14.jpeg",
    href: "#volunteer",
    button: "Volunteer With Us",
    features: [
      "Mentor young entrepreneurs",
      "Support training programs",
      "Help organize events",
      "Share your professional skills",
    ],
  },
  {
    icon: Handshake,
    number: "03",
    title: "Partner",
    description:
      "Collaborate with SelfBoss through sponsorships, grants, expertise, resources, and strategic community partnerships.",
    image: "/images/gallery16.jpeg",
    href: "#partner",
    button: "Partner With Us",
    features: [
      "Corporate partnerships",
      "Program sponsorship",
      "Grant opportunities",
      "Community collaboration",
    ],
  },
];

export default function GetInvolvedPage() {
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

          <div className="relative mx-auto flex min-h-[480px] max-w-7xl items-center px-5 py-20 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <FadeIn>
                <span className="inline-flex items-center gap-2 rounded-full border border-selfboss-yellow/30 bg-selfboss-yellow/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-selfboss-yellow">
                  <HeartHandshake size={14} />
                  Get Involved
                </span>
              </FadeIn>

              <FadeIn delay={0.1}>
                <h1 className="mt-6 text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                  You can help build the{" "}
                  <span className="text-selfboss-yellow">
                    next generation.
                  </span>
                </h1>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/60 sm:text-base sm:leading-8">
                  Whether you give financially, give your time, share your
                  expertise, or open doors through partnership, your
                  contribution can help create opportunities for young
                  Nigerians.
                </p>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                  <Link href="#ways-to-help" className="btn-yellow">
                    Ways to Help
                    <ArrowRight size={16} />
                  </Link>

                  <Link href="/contact" className="btn-white">
                    Contact Us
                  </Link>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* =====================================================
            THREE OPTIONS
        ===================================================== */}
        <section
          id="ways-to-help"
          className="section-padding bg-white"
        >
          <div className="section-container">
            <div className="mx-auto max-w-3xl text-center">
              <SectionHeading
                eyebrow="Choose Your Impact"
                title="There is more than one way to make a difference."
                description="Find the way that best matches your resources, skills, passion, and capacity."
              />
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              <Stagger>
                {involvementOptions.map((option) => {
                  const Icon = option.icon;

                  return (
                    <article
                      key={option.title}
                      className="group overflow-hidden rounded-[2rem] border border-black/5 bg-white shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-card"
                    >
                      {/* Image */}
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <Image
                          src={option.image}
                          alt={option.title}
                          fill
                          className="object-cover transition duration-700 group-hover:scale-105"
                          sizes="(max-width: 1024px) 100vw, 33vw"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                        <div className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-xl bg-selfboss-yellow text-sm font-black text-black">
                          {option.number}
                        </div>

                        <div className="absolute bottom-5 left-5 flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-selfboss-yellow text-black">
                            <Icon size={19} />
                          </div>

                          <span className="text-xs font-black uppercase tracking-[0.15em] text-white">
                            Make an Impact
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6 sm:p-7">
                        <h2 className="text-2xl font-black text-selfboss-black">
                          {option.title}
                        </h2>

                        <p className="mt-3 text-sm leading-6 text-gray-600">
                          {option.description}
                        </p>

                        <div className="mt-6 space-y-2">
                          {option.features.map((feature) => (
                            <div
                              key={feature}
                              className="flex items-center gap-2"
                            >
                              <CheckCircle2
                                size={15}
                                className="shrink-0 text-selfboss-yellow"
                              />

                              <span className="text-xs font-bold text-gray-600">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>

                        <div className="mt-7">
                          <Link
                            href={option.href}
                            className="btn-black w-full"
                          >
                            {option.button}
                            <ArrowRight size={16} />
                          </Link>
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
            DONATE
        ===================================================== */}
        <section
          id="donate"
          className="relative overflow-hidden bg-selfboss-yellow"
        >
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-black/10" />

          <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-black/5" />

          <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.8fr] lg:gap-20">
              <FadeIn direction="right">
                <div>
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-black text-selfboss-yellow">
                    <Heart size={22} />
                  </span>

                  <p className="mt-6 text-[10px] font-black uppercase tracking-[0.2em] text-black/55">
                    Support Our Work
                  </p>

                  <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl md:text-5xl">
                    Your donation can equip a young entrepreneur.
                  </h2>

                  <p className="mt-5 max-w-xl text-sm leading-7 text-black/65 sm:text-base">
                    Donations help SelfBoss provide training, resources,
                    equipment, and community programs that create practical
                    opportunities for young Nigerians.
                  </p>

                  <div className="mt-7 space-y-3">
                    <div className="flex items-center gap-3 text-sm font-bold text-black/70">
                      <CheckCircle2 size={17} />
                      Youth entrepreneurship training
                    </div>

                    <div className="flex items-center gap-3 text-sm font-bold text-black/70">
                      <CheckCircle2 size={17} />
                      Business equipment and startup resources
                    </div>

                    <div className="flex items-center gap-3 text-sm font-bold text-black/70">
                      <CheckCircle2 size={17} />
                      Community empowerment programs
                    </div>
                  </div>
                </div>
              </FadeIn>

              <FadeIn direction="left" delay={0.1}>
                <div className="rounded-[2rem] bg-selfboss-black p-7 text-white shadow-card sm:p-9">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-selfboss-yellow">
                    Donation Details
                  </p>

                  <h3 className="mt-4 text-2xl font-black">
                    Support SelfBoss
                  </h3>

                  <div className="mt-6 space-y-4">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <p className="text-[9px] font-black uppercase tracking-wider text-white/40">
                        Bank Name
                      </p>

                      <p className="mt-1 text-sm font-bold">
                        Zenith Bank
                      </p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <p className="text-[9px] font-black uppercase tracking-wider text-white/40">
                        Account Name
                      </p>

                      <p className="mt-1 text-sm font-bold">
                        SelfBoss Enterprising Youth Foundation
                      </p>
                    </div>

                    <div className="rounded-2xl border border-selfboss-yellow/30 bg-selfboss-yellow/10 p-4">
                      <p className="text-[9px] font-black uppercase tracking-wider text-selfboss-yellow">
                        Account Number
                      </p>

                      <p className="mt-1 text-2xl font-black tracking-wider text-white">
                        1229096504
                      </p>
                    </div>
                  </div>

                  <p className="mt-5 text-xs leading-5 text-white/40">
                    Every contribution helps us reach more young people with
                    practical opportunities and support.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* =====================================================
            VOLUNTEER
        ===================================================== */}
        <section
          id="volunteer"
          className="section-padding bg-white"
        >
          <div className="section-container">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
              <FadeIn direction="right">
                <div className="relative mx-auto w-full max-w-xl">
                  <div className="absolute -bottom-5 -left-5 h-28 w-28 rounded-2xl bg-selfboss-yellow" />

                  <div className="relative overflow-hidden rounded-[2rem] bg-selfboss-black p-2">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem]">
                      <Image
                        src="/images/gallery17.jpeg"
                        alt="SelfBoss volunteers supporting youth empowerment"
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 90vw, 50vw"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                      <div className="absolute bottom-5 left-5">
                        <span className="rounded-full bg-selfboss-yellow px-3 py-1.5 text-[9px] font-black uppercase tracking-wider text-black">
                          Volunteer
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>

              <FadeIn direction="left" delay={0.1}>
                <div>
                  <SectionHeading
                    eyebrow="Give Your Time"
                    title="Your skills can become someone else's opportunity."
                    description="Join our passionate team and contribute your time, knowledge, experience, or professional skills."
                  />

                  <div className="mt-7 space-y-4">
                    {[
                      "Mentor young entrepreneurs",
                      "Facilitate training sessions",
                      "Support community outreach",
                      "Help organize events",
                      "Contribute professional expertise",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-3"
                      >
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-selfboss-yellow text-black">
                          <CheckCircle2 size={15} />
                        </div>

                        <span className="text-sm font-bold text-gray-700">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8">
                    <a
                      href="mailto:Selfbossbiz@gmail.com?subject=Volunteer%20with%20SelfBoss"
                      className="btn-black"
                    >
                      Become a Volunteer
                      <ArrowRight size={16} />
                    </a>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* =====================================================
            PARTNER
        ===================================================== */}
        <section
          id="partner"
          className="relative overflow-hidden bg-selfboss-soft py-20 sm:py-24"
        >
          <div className="absolute inset-0 opacity-[0.35]">
            <div className="h-full w-full bg-[linear-gradient(rgba(0,0,0,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.035)_1px,transparent_1px)] bg-[size:45px_45px]" />
          </div>

          <div className="section-container relative">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
              <FadeIn direction="right">
                <div>
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-selfboss-yellow text-black">
                    <Handshake size={22} />
                  </span>

                  <p className="mt-6 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
                    Strategic Partnership
                  </p>

                  <h2 className="mt-3 text-3xl font-black leading-tight text-selfboss-black sm:text-4xl">
                    Let's create bigger opportunities together.
                  </h2>

                  <p className="mt-5 text-sm leading-7 text-gray-600 sm:text-base">
                    Organizations, companies, institutions, development
                    partners, and community leaders can collaborate with
                    SelfBoss to expand youth-focused programs and create
                    sustainable opportunities.
                  </p>

                  <div className="mt-7 grid gap-3 sm:grid-cols-2">
                    {[
                      "Program sponsorship",
                      "Grants & funding",
                      "Corporate partnerships",
                      "Technical support",
                    ].map((item) => (
                      <div
                        key={item}
                        className="rounded-2xl border border-black/5 bg-white p-4"
                      >
                        <CheckCircle2
                          size={17}
                          className="text-selfboss-yellow"
                        />

                        <p className="mt-3 text-sm font-black">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8">
                    <a
                      href="mailto:Selfbossbiz@gmail.com?subject=Partnership%20with%20SelfBoss"
                      className="btn-yellow"
                    >
                      Partner With Us
                      <ArrowRight size={16} />
                    </a>
                  </div>
                </div>
              </FadeIn>

              <FadeIn direction="left" delay={0.1}>
                <div className="relative overflow-hidden rounded-[2rem] bg-selfboss-black p-2 shadow-card">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem]">
                    <Image
                      src="/images/gallery16.jpeg"
                      alt="SelfBoss partnership and community empowerment"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />

                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="rounded-2xl border border-white/10 bg-black/70 p-5 backdrop-blur-md">
                        <p className="text-[9px] font-black uppercase tracking-[0.18em] text-selfboss-yellow">
                          Together
                        </p>

                        <p className="mt-2 text-lg font-black text-white">
                          Stronger partnerships. Bigger impact.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* =====================================================
            CONTACT STRIP
        ===================================================== */}
        <section className="bg-selfboss-black text-white">
          <div className="mx-auto max-w-5xl px-5 py-16 text-center sm:px-6 sm:py-20 lg:px-8">
            <FadeIn>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-selfboss-yellow">
                Let's Connect
              </p>

              <h2 className="mt-4 text-3xl font-black sm:text-4xl">
                Have an idea for how we can work together?
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/50 sm:text-base">
                We would love to hear from individuals, organizations,
                businesses, and community leaders interested in supporting
                youth empowerment.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href="mailto:Selfbossbiz@gmail.com"
                  className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-xs font-bold transition hover:border-selfboss-yellow/40 hover:bg-white/10"
                >
                  <Mail
                    size={15}
                    className="text-selfboss-yellow"
                  />
                  no mail
                </a>

                <a
                  href="tel:+2347043202431"
                  className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-xs font-bold transition hover:border-selfboss-yellow/40 hover:bg-white/10"
                >
                  <Phone
                    size={15}
                    className="text-selfboss-yellow"
                  />
                  +234 704 320 2431
                </a>
              </div>
            </FadeIn>
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
                    The Movement Starts With Us
                  </p>

                  <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl md:text-5xl">
                    Let's give more young Nigerians a chance to build.
                  </h2>

                  <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-black/65 sm:text-base">
                    One donation. One mentorship session. One partnership. One
                    opportunity can change the direction of a young person's
                    life.
                  </p>

                  <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                    <Link href="#donate" className="btn-black">
                      Donate
                      <Heart size={16} />
                    </Link>

                    <Link href="#volunteer" className="btn-white">
                      Volunteer
                    </Link>

                    <Link href="#partner" className="btn-white">
                      Partner
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