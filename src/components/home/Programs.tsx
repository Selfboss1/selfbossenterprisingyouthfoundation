import {
  ArrowRight,
  BriefcaseBusiness,
  GraduationCap,
  Handshake,
  Rocket,
  Users,
} from "lucide-react";
import FadeIn from "../animations/FadeIn";
import SectionHeading from "../ui/SectionHeading";

const programs = [
  {
    number: "01",
    icon: BriefcaseBusiness,
    title: "Business Equipment Grants",
    description:
      "Computers, manufacturing tools, and essential resources that help youth start and grow businesses.",
  },
  {
    number: "02",
    icon: GraduationCap,
    title: "Entrepreneurship Training",
    description:
      "Business planning, financial literacy, branding, marketing, and practical digital skills.",
  },
  {
    number: "03",
    icon: Handshake,
    title: "Mentorship",
    description:
      "Personalized guidance from experienced professionals who understand the realities of business.",
  },
  {
    number: "04",
    icon: Users,
    title: "Networking Events",
    description:
      "Connecting young entrepreneurs with industry experts, investors, and business communities.",
  },
  {
    number: "05",
    icon: Rocket,
    title: "Startup Incubation",
    description:
      "Workspace, services, mentorship, and access to funding opportunities for promising ideas.",
  },
];

export default function Programs() {
  return (
    <section
      id="programs"
      className="section-padding bg-selfboss-soft"
    >
      <div className="section-container">
        <FadeIn>
          <SectionHeading
            eyebrow="Our Key Programs"
            title="From ideas to sustainable businesses."
            description="We combine practical training, resources, mentorship, and networks to help young people move from potential to progress."
            centered
          />
        </FadeIn>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((program, index) => {
            const Icon = program.icon;

            return (
              <FadeIn
                key={program.title}
                delay={index * 0.06}
              >
                <article
                  className={`group relative h-full overflow-hidden rounded-3xl border p-6 transition duration-300 hover:-translate-y-1 hover:shadow-card ${
                    index === 0
                      ? "border-selfboss-black bg-selfboss-black text-white"
                      : "border-black/5 bg-white"
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-selfboss-yellow text-black">
                      <Icon size={21} />
                    </div>

                    <span
                      className={`text-xs font-black ${
                        index === 0
                          ? "text-white/30"
                          : "text-gray-300"
                      }`}
                    >
                      {program.number}
                    </span>
                  </div>

                  <h3 className="mt-7 text-xl font-black">
                    {program.title}
                  </h3>

                  <p
                    className={`mt-3 text-sm leading-6 ${
                      index === 0
                        ? "text-white/55"
                        : "text-gray-600"
                    }`}
                  >
                    {program.description}
                  </p>

                  <div
                    className={`mt-7 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.15em] ${
                      index === 0
                        ? "text-selfboss-yellow"
                        : "text-selfboss-black"
                    }`}
                  >
                    Explore program
                    <ArrowRight
                      size={14}
                      className="transition group-hover:translate-x-1"
                    />
                  </div>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}