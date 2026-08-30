import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ChevronDown,
  HelpCircle,
  Mail,
  MessageCircle,
} from "lucide-react";

import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import BottomNav from "@/components/layout/BottomNav";
import FloatingActions from "@/components/layout/FloatingActions";
import Footer from "@/components/layout/Footer";

import FadeIn from "@/components/animations/FadeIn";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | SelfBoss Enterprising Youth Foundation",
  description:
    "Find answers to frequently asked questions about SelfBoss Enterprising Youth Foundation, our youth empowerment programs, entrepreneurship training, grants, mentorship, volunteering, donations, and partnerships.",
};

const faqs = [
  {
    question: "What is SelfBoss Enterprising Youth Foundation?",
    answer:
      "SelfBoss Enterprising Youth Foundation (SEYF) is a nonprofit organization focused on supporting and empowering young entrepreneurs across Nigeria through business equipment, entrepreneurship training, mentorship, networking, and other youth development opportunities.",
  },
  {
    question: "When was SelfBoss Enterprising Youth Foundation established?",
    answer:
      "The SelfBoss Foundation began its journey in 2020 and was publicly launched in 2024. Since then, the Foundation has continued to expand its youth empowerment and entrepreneurship activities.",
  },
  {
    question: "Where is SelfBoss Foundation located?",
    answer:
      "The Foundation is based in Aba, Abia State, Nigeria, while its mission and programs are focused on supporting young people more broadly across Nigeria.",
  },
  {
    question: "Who can benefit from SelfBoss programs?",
    answer:
      "Our programs are primarily designed for young Nigerians interested in entrepreneurship, business development, practical skills, innovation, leadership, and personal development. Specific eligibility requirements may vary depending on the program.",
  },
  {
    question: "What kind of programs does SelfBoss offer?",
    answer:
      "Our key programs include business equipment grants, entrepreneurship training, mentorship, networking events, startup incubation, school outreach, community empowerment, and practical digital and business skills development.",
  },
  {
    question: "Does SelfBoss provide business equipment?",
    answer:
      "Yes. Business equipment support is one of our key program areas. Depending on the program and available resources, support may include computers, manufacturing tools, startup kits, and other resources that can help young entrepreneurs start or grow their businesses.",
  },
  {
    question: "Does SelfBoss provide entrepreneurship training?",
    answer:
      "Yes. Our entrepreneurship training focuses on practical and theoretical areas such as business planning, financial literacy, branding, marketing, digital skills, business development, and other skills that can help young people build sustainable ventures.",
  },
  {
    question: "Can I become a mentor?",
    answer:
      "Yes. We welcome experienced professionals and individuals who are willing to share their knowledge, experience, networks, and guidance with young entrepreneurs. You can contact us to discuss your area of expertise and how you would like to contribute.",
  },
  {
    question: "How can I volunteer?",
    answer:
      "You can volunteer as a mentor, trainer, community outreach volunteer, event support volunteer, or in another capacity that matches your skills. Visit our Volunteer page or contact us directly to start a conversation.",
  },
  {
    question: "How can my organization partner with SelfBoss?",
    answer:
      "Organizations can partner with us through sponsorships, grants, corporate social responsibility initiatives, training partnerships, community programs, knowledge sharing, and other forms of strategic collaboration. Visit our Partner With Us page or contact the Foundation directly.",
  },
  {
    question: "How can I donate?",
    answer:
      "You can support SelfBoss through a direct bank transfer to our Foundation account. Visit the Donate page for the current donation account details and other ways to support our work.",
  },
  {
    question: "How is my donation used?",
    answer:
      "Donations help support youth empowerment activities including entrepreneurship training, business equipment, community outreach, mentorship, digital skills development, and other programs designed to create opportunities for young Nigerians.",
  },
  {
    question: "Does SelfBoss work with other organizations?",
    answer:
      "Yes. We believe collaboration is important to sustainable youth development. The Foundation has engaged in strategic collaborations with organizations and stakeholders, including the National Drug Law Enforcement Agency (NDLEA), as part of broader youth-focused initiatives.",
  },
  {
    question: "How many young people has SelfBoss impacted?",
    answer:
      "Through consistent programs and outreach efforts, the Foundation reports having empowered over 5,000 Nigerian youths with knowledge, skills, and opportunities. Our work has also reached more than 20 rural communities and included over 100 workshops and training sessions.",
  },
  {
    question: "How can I contact SelfBoss Foundation?",
    answer:
      "You can contact us by email at Selfbossbiz@gmail.com or by phone at +234 704 320 2431. Our Foundation location is Aba, Abia State, Nigeria.",
  },
];

export default function FAQPage() {
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
                  <HelpCircle size={14} />
                  Frequently Asked Questions
                </span>
              </FadeIn>

              <FadeIn delay={0.1}>
                <h1 className="mt-6 text-4xl font-black leading-[1.02] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                  Questions?{" "}
                  <span className="text-selfboss-yellow">
                    We've got answers.
                  </span>
                </h1>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/60 sm:text-base sm:leading-8">
                  Find quick answers about our Foundation, programs,
                  volunteering, partnerships, donations, and youth empowerment
                  work.
                </p>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                  <a href="#questions" className="btn-yellow">
                    Browse Questions
                    <ArrowRight size={16} />
                  </a>

                  <Link href="/contact" className="btn-white">
                    Ask Us Directly
                  </Link>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* =====================================================
            FAQ LIST
        ===================================================== */}
        <section id="questions" className="relative bg-selfboss-soft">
          <div className="absolute inset-0 opacity-[0.35]">
            <div className="h-full w-full bg-[linear-gradient(rgba(0,0,0,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.035)_1px,transparent_1px)] bg-[size:45px_45px]" />
          </div>

          <div className="section-container relative section-padding">
            <div className="mx-auto max-w-3xl text-center">
              <SectionHeading
                eyebrow="Answers"
                title="Everything you need to know."
                description="We've answered some of the questions we receive most often. If you can't find what you're looking for, contact us directly."
              />
            </div>

            <div className="mx-auto mt-12 max-w-4xl space-y-3">
              {faqs.map((faq, index) => (
                <FadeIn
                  key={faq.question}
                  delay={index * 0.025}
                  direction="up"
                >
                  <details className="group rounded-[1.5rem] border border-black/5 bg-white transition hover:shadow-sm">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-5 p-5 sm:p-6">
                      <span className="text-sm font-black leading-6 text-selfboss-black sm:text-base">
                        {faq.question}
                      </span>

                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-selfboss-yellow text-black transition duration-300 group-open:rotate-180">
                        <ChevronDown size={17} />
                      </span>
                    </summary>

                    <div className="px-5 pb-6 sm:px-6">
                      <div className="border-t border-black/5 pt-5">
                        <p className="text-sm leading-7 text-gray-500">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </details>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            QUICK LINKS
        ===================================================== */}
        <section className="bg-white">
          <div className="section-container section-padding">
            <div className="mx-auto max-w-3xl text-center">
              <FadeIn>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
                  Explore SelfBoss
                </p>

                <h2 className="mt-3 text-3xl font-black text-selfboss-black sm:text-4xl">
                  Looking for something specific?
                </h2>
              </FadeIn>
            </div>

            <div className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-3">
              {[
                {
                  href: "/programs",
                  title: "Our Programs",
                  text: "Explore the initiatives we run for young Nigerians.",
                },
                {
                  href: "/get-involved",
                  title: "Get Involved",
                  text: "Discover different ways to contribute to our mission.",
                },
                {
                  href: "/impact",
                  title: "Our Impact",
                  text: "See the communities and young people we've reached.",
                },
              ].map((item, index) => (
                <FadeIn key={item.title} delay={index * 0.08}>
                  <Link
                    href={item.href}
                    className="group block h-full rounded-[2rem] border border-black/5 bg-selfboss-soft p-6 transition duration-300 hover:-translate-y-1 hover:shadow-card"
                  >
                    <h3 className="text-lg font-black text-selfboss-black">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-gray-500">
                      {item.text}
                    </p>

                    <div className="mt-5 flex items-center gap-2 text-xs font-black uppercase tracking-wider text-black transition group-hover:text-selfboss-yellow">
                      Explore
                      <ArrowRight size={14} />
                    </div>
                  </Link>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            CONTACT CTA
        ===================================================== */}
        <section className="bg-selfboss-black text-white">
          <div className="mx-auto max-w-5xl px-5 py-20 text-center sm:px-6 sm:py-24 lg:px-8">
            <FadeIn>
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-selfboss-yellow text-black">
                <MessageCircle size={24} />
              </div>

              <p className="mt-6 text-[10px] font-black uppercase tracking-[0.2em] text-selfboss-yellow">
                Still Have Questions?
              </p>

              <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl md:text-5xl">
                Let's talk.
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/45 sm:text-base">
                Can't find the answer you're looking for? Our team will be
                happy to hear from you and provide more information.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href="mailto:Selfbossbiz@gmail.com?subject=General%20Enquiry"
                  className="btn-yellow"
                >
                  Email SelfBoss
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
                Ready to be part of the change?
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-black/60 sm:text-base">
                Whether you want to volunteer, partner, donate, or participate
                in a program, there is a place for you in the SelfBoss
                movement.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Link href="/get-involved" className="btn-black">
                  Get Involved
                  <ArrowRight size={16} />
                </Link>

                <Link href="/donate" className="btn-white">
                  Support Our Work
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