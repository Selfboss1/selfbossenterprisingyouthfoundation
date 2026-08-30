import {
  Handshake,
  HeartHandshake,
  Users,
} from "lucide-react";
import FadeIn from "../animations/FadeIn";
import SectionHeading from "../ui/SectionHeading";

const options = [
  {
    icon: HeartHandshake,
    title: "Donate",
    text: "Help us equip and train more young innovators with the resources they need.",
    action: "Support Us",
    href: "#donate",
    yellow: true,
  },
  {
    icon: Users,
    title: "Volunteer",
    text: "Join our passionate team as a mentor, trainer, or event organizer.",
    action: "Volunteer",
    href: "#contact",
    yellow: false,
  },
  {
    icon: Handshake,
    title: "Partner",
    text: "Collaborate through sponsorships, grants, and meaningful community initiatives.",
    action: "Partner With Us",
    href: "#contact",
    yellow: false,
  },
];

export default function GetInvolved() {
  return (
    <section className="grid-dark section-padding text-white">
      <div className="section-container">
        <FadeIn>
          <SectionHeading
            eyebrow="Get Involved"
            title="Help us equip the next generation."
            description="Your support helps us reach more young innovators with impactful programs, equipment, mentorship, and opportunities."
            centered
            dark
          />
        </FadeIn>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {options.map((option, index) => {
            const Icon = option.icon;

            return (
              <FadeIn
                key={option.title}
                delay={index * 0.08}
              >
                <article
                  className={`h-full rounded-3xl p-7 ${
                    option.yellow
                      ? "bg-selfboss-yellow text-black"
                      : "border border-white/10 bg-white/5"
                  }`}
                >
                  <Icon
                    size={31}
                    className={
                      option.yellow
                        ? "text-black"
                        : "text-selfboss-yellow"
                    }
                  />

                  <h3 className="mt-6 text-xl font-black">
                    {option.title}
                  </h3>

                  <p
                    className={`mt-3 text-sm leading-6 ${
                      option.yellow
                        ? "text-black/60"
                        : "text-white/55"
                    }`}
                  >
                    {option.text}
                  </p>

                  <a
                    href={option.href}
                    className={`mt-6 inline-flex rounded-xl px-4 py-3 text-xs font-black ${
                      option.yellow
                        ? "bg-black text-white"
                        : "bg-white text-black"
                    }`}
                  >
                    {option.action}
                  </a>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}