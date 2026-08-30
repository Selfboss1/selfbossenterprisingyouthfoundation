import { ArrowRight } from "lucide-react";
import Image from "next/image";
import FadeIn from "../animations/FadeIn";
import SectionHeading from "../ui/SectionHeading";

const events = [
  {
    image: "/images/gallery13.jpeg",
    title: "Entrepreneurship Bootcamp 2024",
    description:
      "A 3-day intensive bootcamp where over 300 youth learned practical business development, branding, and digital marketing strategies.",
  },
  {
    image: "/images/gallery5.jpeg",
    title: "Innovation Fair & Pitch Day",
    description:
      "Young entrepreneurs pitched their ideas to a panel of investors, securing mentorship and funding opportunities.",
  },
  {
    image: "/images/gallery14.jpeg",
    title: "Skill-Up Weekend Workshop",
    description:
      "Hands-on training on graphics design, website development, and digital skills for youth in Aba.",
  },
  {
    image: "/images/gallery4.jpeg",
    title: "Women in Enterprise Forum",
    description:
      "Empowering young women to build businesses through storytelling, mentoring, and business grant sessions.",
  },
  {
    image: "/images/gallery8.jpeg",
    title: "Street-to-Startup Youth Campaign",
    description:
      "An awareness campaign across local communities to identify and equip street youth with startup kits and training.",
  },
  {
    image: "/images/gallery6.jpeg",
    title: "Community Market Day",
    description:
      "Youth entrepreneurs showcased and sold handmade crafts, clothing, and agricultural products to the public.",
  },
];

export default function Events() {
  return (
    <section
      id="events"
      className="section-padding bg-white"
    >
      <div className="section-container">
        <FadeIn>
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              eyebrow="Past Empowerment Events"
              title="Impact in action."
            />

            <a
              href="#contact"
              className="btn-black self-start sm:self-auto"
            >
              Get Involved
              <ArrowRight size={16} />
            </a>
          </div>
        </FadeIn>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((event, index) => (
            <FadeIn
              key={event.title}
              delay={index * 0.06}
            >
              <article className="group overflow-hidden rounded-3xl border border-black/5 bg-white shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-card">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />

                  <div className="absolute left-4 top-4 rounded-full bg-selfboss-yellow px-3 py-1.5 text-[9px] font-black uppercase tracking-wider">
                    SEYF
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-black leading-tight sm:text-xl">
                    {event.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    {event.description}
                  </p>

                  <div className="mt-5 flex items-center gap-2 text-[10px] font-black uppercase tracking-wider">
                    View impact
                    <ArrowRight
                      size={13}
                      className="transition group-hover:translate-x-1"
                    />
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}