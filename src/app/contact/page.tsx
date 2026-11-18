import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Mail,
  MapPin,
  Phone,
  Clock3,
  HeartHandshake,
  MessageCircle,
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
  title: "Contact Us | SelfBoss Enterprising Youth Foundation",
  description:
    "Contact SelfBoss Enterprising Youth Foundation in Aba, Abia State, Nigeria. Reach us for youth empowerment, partnerships, volunteering, donations, training and community programs.",
};

const contactDetails = [
  {
    icon: Phone,
    title: "Call Us",
    value: "+234 704 320 2431",
    description: "Speak with our team about our programs and initiatives.",
    href: "tel:+2347043202431",
  },
  {
    icon: Mail,
    title: "Email Us",
    value: "Selfbossbiz@gmail.com",
    description: "Send us an email for enquiries, partnerships or support.",
    href: "mailto:Selfbossbiz@gmail.com",
  },
  {
    icon: MapPin,
    title: "Our Location",
    value: "Aba, Abia State",
    description: "Serving young people and communities across Nigeria.",
    href: "https://www.google.com/maps/search/?api=1&query=Aba%2C%20Abia%20State%2C%20Nigeria",
  },
];

const enquiryTypes = [
  "Youth empowerment programs",
  "Entrepreneurship training",
  "Volunteer opportunities",
  "Donations and support",
  "Corporate partnerships",
  "Community outreach",
];

export default function ContactPage() {
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

          <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-selfboss-yellow/10 blur-3xl" />

          <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-selfboss-yellow/10 blur-3xl" />

          <div className="relative mx-auto flex min-h-[440px] max-w-7xl items-center px-5 py-20 text-center sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <FadeIn>
                <span className="inline-flex items-center gap-2 rounded-full border border-selfboss-yellow/30 bg-selfboss-yellow/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-selfboss-yellow">
                  <MessageCircle size={14} />
                  Contact SelfBoss
                </span>
              </FadeIn>

              <FadeIn delay={0.1}>
                <h1 className="mt-6 text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                  Let's build{" "}
                  <span className="text-selfboss-yellow">
                    opportunities together.
                  </span>
                </h1>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/60 sm:text-base sm:leading-8">
                  Have a question, partnership idea, volunteering opportunity,
                  or simply want to learn more about our work? We'd love to
                  hear from you.
                </p>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                  <a href="tel:+2347043202431" className="btn-yellow">
                    Call Us
                    <Phone size={16} />
                  </a>

                  <a
                    href="mailto:Selfbossbiz@gmail.com"
                    className="btn-white"
                  >
                    Send an Email
                    <Mail size={16} />
                  </a>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* =====================================================
            CONTACT CARDS
        ===================================================== */}
        <section className="section-padding bg-white">
          <div className="section-container">
            <div className="mx-auto max-w-3xl text-center">
              <SectionHeading
                eyebrow="Reach Out"
                title="We're here to connect."
                description="Choose the easiest way to reach the SelfBoss team."
              />
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-3">
              <Stagger>
                {contactDetails.map((item) => {
                  const Icon = item.icon;

                  return (
                    <a
                      key={item.title}
                      href={item.href}
                      target={
                        item.title === "Our Location"
                          ? "_blank"
                          : undefined
                      }
                      rel={
                        item.title === "Our Location"
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="group rounded-[2rem] border border-black/5 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-card"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-selfboss-yellow text-black">
                        <Icon size={21} />
                      </div>

                      <p className="mt-6 text-[10px] font-black uppercase tracking-[0.18em] text-gray-400">
                        {item.title}
                      </p>

                      <h2 className="mt-2 break-words text-lg font-black text-selfboss-black">
                        {item.value}
                      </h2>

                      <p className="mt-3 text-sm leading-6 text-gray-500">
                        {item.description}
                      </p>

                      <div className="mt-5 flex items-center gap-2 text-xs font-black text-selfboss-black">
                        Contact
                        <ArrowRight
                          size={14}
                          className="transition group-hover:translate-x-1"
                        />
                      </div>
                    </a>
                  );
                })}
              </Stagger>
            </div>
          </div>
        </section>

        {/* =====================================================
            MAIN CONTACT AREA
        ===================================================== */}
        <section className="bg-selfboss-black text-white">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
              {/* LEFT */}
              <FadeIn direction="right">
                <div>
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-selfboss-yellow text-black">
                    <HeartHandshake size={22} />
                  </span>

                  <p className="mt-6 text-[10px] font-black uppercase tracking-[0.2em] text-selfboss-yellow">
                    Start a Conversation
                  </p>

                  <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">
                    Your idea could become someone else's opportunity.
                  </h2>

                  <p className="mt-5 text-sm leading-7 text-white/50 sm:text-base">
                    SelfBoss works with young people, volunteers,
                    professionals, businesses, organizations, community
                    leaders, and development partners.
                  </p>

                  <div className="mt-8 space-y-3">
                    <a
                      href="tel:+2347043202431"
                      className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-selfboss-yellow/30 hover:bg-white/10"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-selfboss-yellow text-black">
                        <Phone size={17} />
                      </span>

                      <div>
                        <p className="text-[9px] font-black uppercase tracking-wider text-white/35">
                          Phone
                        </p>

                        <p className="mt-1 text-sm font-bold">
                          +234 704 320 2431
                        </p>
                      </div>
                    </a>

                    <a
                      href="mailto:nomail"
                      className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-selfboss-yellow/30 hover:bg-white/10"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-selfboss-yellow text-black">
                        <Mail size={17} />
                      </span>

                      <div>
                        <p className="text-[9px] font-black uppercase tracking-wider text-white/35">
                          Email
                        </p>

                        <p className="mt-1 break-all text-sm font-bold">
                          no mail
                        </p>
                      </div>
                    </a>

                    <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-selfboss-yellow text-black">
                        <MapPin size={17} />
                      </span>

                      <div>
                        <p className="text-[9px] font-black uppercase tracking-wider text-white/35">
                          Location
                        </p>

                        <p className="mt-1 text-sm font-bold">
                          Aba, Abia State, Nigeria
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>

              {/* RIGHT */}
              <FadeIn direction="left" delay={0.1}>
                <div className="rounded-[2rem] bg-white p-7 text-selfboss-black sm:p-9">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
                    How Can We Help?
                  </p>

                  <h2 className="mt-3 text-2xl font-black sm:text-3xl">
                    Let's talk about your interest.
                  </h2>

                  <p className="mt-4 text-sm leading-6 text-gray-500">
                    Reach out directly by phone or email and let us know how
                    you'd like to connect with SelfBoss.
                  </p>

                  <div className="mt-7 space-y-3">
                    {enquiryTypes.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-3 rounded-xl border border-black/5 bg-selfboss-soft px-4 py-3"
                      >
                        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-selfboss-yellow text-black">
                          <ArrowRight size={13} />
                        </div>

                        <span className="text-xs font-bold text-gray-700">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-7 grid gap-3 sm:grid-cols-2">
                    <a
                      href="#"
                      className="btn-black w-full"
                    >
                      <Mail size={15} />
                      Email Us
                    </a>

                    <a
                      href="tel:+2347043202431"
                      className="btn-yellow w-full"
                    >
                      <Phone size={15} />
                      Call Us
                    </a>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* =====================================================
            VISITING / AVAILABILITY
        ===================================================== */}
        <section className="section-padding bg-selfboss-soft">
          <div className="section-container">
            <div className="grid gap-5 md:grid-cols-2">
              <FadeIn direction="right">
                <div className="rounded-[2rem] bg-white p-7 sm:p-9">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-selfboss-yellow text-black">
                    <MapPin size={21} />
                  </div>

                  <h2 className="mt-6 text-2xl font-black text-selfboss-black">
                    Find Us
                  </h2>

                  <p className="mt-3 text-sm leading-6 text-gray-500">
                    SelfBoss Enterprising Youth Foundation is based in Aba,
                    Abia State, Nigeria, with programs and outreach extending
                    to communities beyond our immediate location.
                  </p>

                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Aba%2C%20Abia%20State%2C%20Nigeria"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-black mt-6"
                  >
                    Open Location
                    <ArrowRight size={15} />
                  </a>
                </div>
              </FadeIn>

              <FadeIn direction="left" delay={0.1}>
                <div className="rounded-[2rem] bg-selfboss-yellow p-7 text-black sm:p-9">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-black text-selfboss-yellow">
                    <Clock3 size={21} />
                  </div>

                  <h2 className="mt-6 text-2xl font-black">
                    Connect With Us
                  </h2>

                  <p className="mt-3 text-sm leading-6 text-black/60">
                    For program enquiries, partnerships, volunteering,
                    donations, and other matters, please contact us directly
                    by phone or email.
                  </p>

                  <div className="mt-6 space-y-2 text-sm font-bold">
                    <p>Phone: +234 704 320 2431</p>
                    <p>Email: Selfbossbiz@gmail.com</p>
                    <p>Location: Aba, Abia State, Nigeria</p>
                  </div>
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
                Keep The Movement Growing
              </p>

              <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl md:text-5xl">
                Ready to make an impact?
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-black/60 sm:text-base">
                Whether you want to support a young entrepreneur, volunteer
                your skills, or build a strategic partnership, there is a place
                for you in the SelfBoss movement.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Link href="/get-involved" className="btn-black">
                  Get Involved
                  <ArrowRight size={16} />
                </Link>

                <Link href="/programs" className="btn-white">
                  Explore Programs
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