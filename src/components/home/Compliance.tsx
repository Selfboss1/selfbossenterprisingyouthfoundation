import { CheckCircle2, ShieldCheck } from "lucide-react";
import FadeIn from "../animations/FadeIn";
import SectionHeading from "../ui/SectionHeading";

const items = [
  "Registered with the Corporate Affairs Commission (CAC)",
  "Tax Identification Number (TIN) available",
  "In partnership with local authorities",
  "Adheres to international nonprofit ethics and transparency",
];

export default function Compliance() {
  return (
    <section className="section-padding bg-white">
      <div className="section-container">
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-selfboss-yellow">
              <ShieldCheck size={28} />
            </div>

            <div className="mt-6">
              <SectionHeading
                eyebrow="Legality & Compliance"
                title="Built on transparency and accountability."
                description="SelfBoss Enterprising Youth Foundation is a legally registered NGO committed to transparency and accountability. We comply with legal frameworks governing youth development and nonprofit operations in Nigeria."
                centered
              />
            </div>
          </div>
        </FadeIn>

        <div className="mx-auto mt-10 grid max-w-4xl gap-3 sm:grid-cols-2">
          {items.map((item, index) => (
            <FadeIn
              key={item}
              delay={index * 0.07}
            >
              <div className="flex items-start gap-3 rounded-2xl border border-black/5 bg-selfboss-soft p-5">
                <CheckCircle2
                  size={19}
                  className="mt-0.5 shrink-0 text-selfboss-yellow-dark"
                />

                <p className="text-sm font-bold leading-6">
                  {item}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}