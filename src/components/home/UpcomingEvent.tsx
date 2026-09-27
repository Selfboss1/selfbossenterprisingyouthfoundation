
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, MapPin, Play } from "lucide-react";

import FadeIn from "@/components/animations/FadeIn";
import Stagger from "@/components/animations/Stagger";

const videos = [
  {
    src: "/videos/concert-1.mp4",
    title: "SelfBoss Music Concert",
  },
  {
    src: "/videos/concert-2.mp4",
    title: "Preparing for Music Concert",
  },
  {
    src: "/videos/concert-3.mp4",
    title: "Preparations Ongoing",
  },
  {
    src: "/videos/concert-4.mp4",
    title: "Behind the Scenes",
  },
];

const images = [
  {
    src: "/images/events/concert-1.jpg",
    alt: "SelfBoss Music Concert",
  },
  {
    src: "/images/events/concert-2.jpg",
    alt:"Getting Ready For Concert",
  },
  {
    src: "/images/events/concert-3.jpg",
    alt: "SelfBoss Music Concert Performance",
  },
  {
    src: "/images/events/concert-4.jpg",
    alt: "SelfBoss Youth Music Preparation",
  },
  {
    src: "/images/events/concert-5.jpg",
    alt: "SelfBoss Music Concert Team",
  },
  {
    src: "/images/events/concert-6.jpg",
    alt: "Preparing of Rythms of Tomorrow",
  },
];

export default function UpcomingEvent() {
  return (
    <section className="relative overflow-hidden bg-selfboss-black py-20 sm:py-24 lg:py-28">
      {/* Background Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
          backgroundSize: "45px 45px",
        }}
      />

      <div className="section-container relative">
        {/* =========================================================
            EVENT INTRO
        ========================================================= */}
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center rounded-full bg-selfboss-yellow px-5 py-2 text-xs font-bold uppercase tracking-[0.18em] text-selfboss-black">
              Upcoming Event
            </span>

            <h2 className="mt-6 text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
              SelfBoss Music Concert
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
              A powerful celebration of young people, creativity, music,
              entrepreneurship and positive community impact.
            </p>

            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white">
                <CalendarDays
                  size={16}
                  className="text-selfboss-yellow"
                />
                Coming Soon
              </div>

              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white">
                <MapPin
                  size={16}
                  className="text-selfboss-yellow"
                />
                Aba, Abia State
              </div>
            </div>
          </div>
        </FadeIn>

        {/* =========================================================
            VIDEO SECTION
        ========================================================= */}
        <div className="mt-20 sm:mt-24">
          <FadeIn>
            <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-selfboss-yellow">
                  Watch
                </p>

                <h3 className="mt-2 text-2xl font-black text-white sm:text-3xl">
                  Concert Videos
                </h3>
              </div>

              <p className="max-w-md text-sm leading-6 text-white/60">
                Watch highlights, performances and special moments from the
                SelfBoss Music Concert.
              </p>
            </div>
          </FadeIn>

          <Stagger>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {videos.map((video, index) => (
                <FadeIn key={video.src}>
                  <div className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-card">
                    {/* Square Video */}
                    <div className="relative aspect-square overflow-hidden bg-black">
                      <video
                        className="h-full w-full object-cover"
                        controls
                        playsInline
                        preload="metadata"
                        src={video.src}
                      />

                      {/* Number Badge */}
                      <div className="pointer-events-none absolute left-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-selfboss-yellow text-xs font-black text-selfboss-black">
                        {String(index + 1).padStart(2, "0")}
                      </div>

                      {/* Play Indicator */}
                      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition duration-300 group-hover:opacity-100">
                        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-selfboss-yellow text-selfboss-black shadow-yellow">
                          <Play
                            size={22}
                            fill="currentColor"
                            className="ml-1"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="p-4">
                      <h4 className="text-sm font-bold text-white">
                        {video.title}
                      </h4>

                      <p className="mt-1 text-xs text-white/50">
                        SelfBoss Music Concert
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </Stagger>
        </div>

        {/* =========================================================
            IMAGE / REELS SECTION
        ========================================================= */}
        <div className="mt-24 sm:mt-28">
          <FadeIn>
            <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-selfboss-yellow">
                  Moments
                </p>

                <h3 className="mt-2 text-2xl font-black text-white sm:text-3xl">
                  Concert Moments
                </h3>
              </div>

              <p className="max-w-md text-sm leading-6 text-white/60">
                Explore the people, energy and unforgettable moments that make
                the SelfBoss community special.
              </p>
            </div>
          </FadeIn>

          <Stagger>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
              {images.map((image, index) => (
                <FadeIn key={image.src}>
                  <div className="group relative overflow-hidden rounded-2xl bg-white/5">
                    {/* Reels-style 9:16 image */}
                    <div className="relative aspect-[9/16] overflow-hidden">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                        className="object-cover transition duration-700 group-hover:scale-105"
                      />

                      {/* Dark Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80" />

                      {/* Number */}
                      <div className="absolute left-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-selfboss-yellow text-xs font-black text-selfboss-black">
                        {String(index + 1).padStart(2, "0")}
                      </div>

                      {/* Bottom Label */}
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <p className="text-xs font-bold uppercase tracking-wider text-white">
                          SelfBoss
                        </p>

                        <p className="mt-1 text-xs text-white/70">
                          Music Concert
                        </p>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </Stagger>
        </div>

        {/* =========================================================
            CTA
        ========================================================= */}
        <FadeIn>
          <div className="mt-16 flex justify-center">
            <Link
              href="/events"
              className="btn-yellow inline-flex items-center gap-2"
            >
              Explore Our Events
              <ArrowRight size={17} />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

