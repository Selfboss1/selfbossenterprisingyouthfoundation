import {
  ArrowRight,
  Award,
  HeartHandshake,
  Target,
  Users,
} from "lucide-react";
import Image from "next/image";

import FadeIn from "../animations/FadeIn";
import SectionHeading from "../ui/SectionHeading";

const highlights = [
  {
    icon: Users,
    title: "Youth Focused",
    text: "Creating practical opportunities for young Nigerians to thrive.",
  },
  {
    icon: Target,
    title: "Impact Driven",
    text: "Focused on measurable change in communities and businesses.",
  },
  {
    icon: HeartHandshake,
    title: "Community First",
    text: "Building supportive networks where young people can grow together.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="section-padding overflow-hidden bg-white"
    >
      <div className="section-container">
        {/* SECTION INTRO */}
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          {/* IMAGE SIDE */}
          <FadeIn direction="right">
            <div className="relative mx-auto w-full max-w-xl">
              {/* Decorative yellow block */}
              <div className="absolute -left-4 -top-4 h-24 w-24 rounded-2xl bg-selfboss-yellow sm:-left-6 sm:-top-6" />

              {/* Main image */}
              <div className="relative overflow-hidden rounded-[2rem] bg-selfboss-black p-2 shadow-card">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem]">
                  <Image
                    src="/images/gallery14.jpeg"
                    alt="Young people participating in a SelfBoss youth training program"
                    fill
                    className="object-cover transition duration-700 hover:scale-105"
                    sizes="(max-width: 1024px) 90vw, 45vw"
                  />

                  {/* Image overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                  {/* Image caption */}
                  <div className="absolute bottom-5 left-5 right-5">
                    <div className="rounded-2xl border border-white/10 bg-black/70 p-5 backdrop-blur-md">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-selfboss-yellow text-black">
                          <Award size={19} />
                        </div>

                        <div>
                          <p className="text-xs font-black text-white">
                            Empowerment in Action
                          </p>

                          <p className="mt-1 text-[10px] text-white/45">
                            Skills • Opportunity • Impact
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating statistic */}
              <div className="absolute -bottom-5 -right-3 rounded-2xl bg-selfboss-yellow px-5 py-4 shadow-yellow sm:-right-6">
                <p className="text-2xl font-black leading-none">
                  5,000+
                </p>

                <p className="mt-1 text-[9px] font-black uppercase tracking-[0.12em]">
                  Youth Reached
                </p>
              </div>
            </div>
          </FadeIn>

          {/* CONTENT SIDE */}
          <FadeIn direction="left" delay={0.1}>
            <div className="text-center lg:text-left">
              <SectionHeading
                eyebrow="Who We Are"
                title="Building a generation of enterprising Nigerians."
                description="SelfBoss Enterprising Youth Foundation (SEYF) is a non-profit organization committed to supporting and empowering young entrepreneurs across Nigeria."
              />

              <div className="mx-auto mt-6 max-w-2xl lg:mx-0">
                <p className="text-sm leading-7 text-gray-600 sm:text-base">
                  We focus on providing essential business
                  equipment and impactful training programs that
                  help young people launch, develop, and grow
                  successful businesses.
                </p>

                <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
                  Our journey began in{" "}
                  <strong className="font-black text-selfboss-black">
                    2020
                  </strong>
                  , with the foundation publicly launched in{" "}
                  <strong className="font-black text-selfboss-black">
                    2024
                  </strong>
                  . Since then, we have continued working to
                  address the challenges facing young people and
                  communities, particularly across Abia State.
                </p>
              </div>

              {/* Journey Card */}
              <div className="mx-auto mt-7 flex max-w-2xl items-start gap-4 rounded-2xl border border-black/5 bg-selfboss-soft p-5 text-left lg:mx-0">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-selfboss-yellow text-black">
                  <Award size={20} />
                </div>

                <div>
                  <p className="text-sm font-black">
                    From an idea to a growing movement
                  </p>

                  <p className="mt-1 text-xs leading-6 text-gray-600">
                    What started in 2020 has grown into a
                    community-driven movement empowering young
                    Nigerians with knowledge, tools, mentorship,
                    and opportunities.
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-7 flex justify-center lg:justify-start">
                <a
                  href="#programs"
                  className="btn-black"
                >
                  Discover Our Programs
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* HIGHLIGHTS */}
        <FadeIn delay={0.15}>
          <div className="mt-20 border-t border-black/10 pt-10">
            <div className="grid gap-4 md:grid-cols-3">
              {highlights.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="group rounded-3xl border border-black/5 bg-selfboss-soft p-6 text-center transition duration-300 hover:-translate-y-1 hover:bg-selfboss-black hover:text-white hover:shadow-card sm:p-7"
                  >
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-selfboss-yellow text-black transition-transform duration-300 group-hover:scale-105">
                      <Icon size={21} />
                    </div>

                    <h3 className="mt-5 text-lg font-black">
                      {item.title}
                    </h3>

                    <p className="mx-auto mt-2 max-w-xs text-sm leading-6 text-gray-600 transition-colors group-hover:text-white/55">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}