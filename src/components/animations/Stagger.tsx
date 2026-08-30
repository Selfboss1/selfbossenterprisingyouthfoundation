"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

interface StaggerProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  staggerChildren?: number;
  duration?: number;
}

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0,
    },
  },
};

const itemVariants = (duration: number): Variants => ({
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration,
      ease: [0.22, 1, 0.36, 1],
    },
  },
});

export default function Stagger({
  children,
  className = "",
  delay = 0,
  staggerChildren = 0.08,
  duration = 0.5,
}: StaggerProps) {
  const childrenArray = Array.isArray(children)
    ? children
    : [children];

  return (
    <motion.div
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren,
            delayChildren: delay,
          },
        },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.15,
      }}
      className={className}
    >
      {childrenArray.map((child, index) => (
        <motion.div
          key={index}
          variants={itemVariants(duration)}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}