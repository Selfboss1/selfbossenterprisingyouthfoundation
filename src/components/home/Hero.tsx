"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="grid-dark relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_20%,rgba(250,204,21,0.18),transparent_35%)]" />

      <div className="absolute right-[-10%] top-[10%] -z-10 h-64 w-64 rounded-full bg-selfboss-yellow/10 blur-3xl" />

      <div className="section-container flex min-h-[calc(100svh-64px)] items-center py-14 sm:py-20 lg:py-24">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-selfboss-yellow/30 bg-selfboss-yellow/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-selfboss-yellow sm:text-xs"
            >
              <span className="h-2 w-2 animate-pulse rounded-full bg-selfboss-yellow" />
              Empowering Nigeria&apos;s Youth
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.1,
              }}
              className="text-5xl font-black leading-[0.91] tracking-[-0.06em] text-white sm:text-6xl md:text-7xl lg:text-8xl"
            >
              Equip.
              <br />
              <span className="text-selfboss-yellow">
                Empower.
              </span>
              <br />
              Impact.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.7,
                delay: 0.35,
              }}
              className="mx-auto mt-7 max-w-xl text-sm leading-7 text-white/65 sm:text-base lg:mx-0 lg:text-lg"
            >
              SelfBoss Enterprising Youth Foundation equips
              young Nigerians with skills, support, and
              opportunities to build sustainable businesses and
              create lasting impact.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.5,
              }}
              className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start"
            >
              <a
                href="#programs"
                className="btn-primary"
              >
                Explore Programs
                <ArrowRight size={17} />
              </a>

              <a
                href="#donate"
                className="btn-outline border-white/30 text-white hover:bg-white hover:text-black"
              >
                Support Our Mission
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.7,
              }}
              className="mt-9 flex flex-wrap justify-center gap-x-4 gap-y-2 text-[10px] font-bold uppercase tracking-wider text-white/35 lg:justify-start sm:text-xs"
            >
              <span>Since 2020</span>
              <span>•</span>
              <span>Launched 2024</span>
              <span>•</span>
              <span>Aba, Nigeria</span>
            </motion.div>
          </div>

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95,
              y: 25,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            transition={{
              duration: 0.9,
              delay: 0.2,
            }}
            className="relative mx-auto w-full max-w-md lg:max-w-none"
          >
            <div className="absolute -inset-4 rounded-[2rem] bg-selfboss-yellow/20 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-2">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem]">
                <Image
                  src="/images/gallery13.jpeg"
                  alt="SelfBoss Entrepreneurship Bootcamp"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 90vw, 45vw"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/5 to-transparent" />

                <div className="absolute bottom-5 left-5 right-5">
                  <div className="rounded-2xl border border-white/10 bg-black/70 p-5 backdrop-blur-md">
                    <div className="flex items-end justify-between gap-4">
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-selfboss-yellow">
                          Our Reach
                        </p>

                        <p className="mt-1 text-3xl font-black text-white">
                          5,000+
                        </p>

                        <p className="text-xs text-white/50">
                          young Nigerians empowered
                        </p>
                      </div>

                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-selfboss-yellow text-black">
                        <ArrowRight size={18} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-5 -left-3 hidden rounded-2xl bg-selfboss-yellow px-5 py-4 shadow-yellow sm:block"
            >
              <p className="text-2xl font-black">20+</p>
              <p className="text-[9px] font-black uppercase tracking-wider">
                Communities
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <a
        href="#impact"
        className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[9px] font-black uppercase tracking-[0.2em] text-white/30 lg:flex"
      >
        Scroll
        <ArrowDown size={15} />
      </a>
    </section>
  );
}