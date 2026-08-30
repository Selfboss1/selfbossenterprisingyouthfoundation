"use client";

import { motion } from "framer-motion";
import Counter from "../animations/Counter";

const stats = [
  {
    value: 5000,
    suffix: "+",
    label: "Youth empowered",
  },
  {
    value: 20,
    suffix: "+",
    label: "Rural communities",
  },
  {
    value: 100,
    suffix: "+",
    label: "Workshops & trainings",
  },
  {
    value: 300,
    suffix: "+",
    label: "Bootcamp participants",
  },
];

export default function ImpactStats() {
  return (
    <section
      id="impact"
      className="bg-selfboss-yellow"
    >
      <div className="section-container grid grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: index * 0.08,
            }}
            className="border-black/10 px-3 py-7 text-center first:border-l-0 sm:py-8 lg:border-l"
          >
            <p className="text-3xl font-black tracking-tight sm:text-4xl">
              <Counter
                value={stat.value}
                suffix={stat.suffix}
              />
            </p>

            <p className="mt-1 text-[9px] font-black uppercase tracking-wider opacity-60 sm:text-xs">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}