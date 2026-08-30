import type { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
  dark?: boolean;
  children?: ReactNode;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
  dark = false,
  children,
}: SectionHeadingProps) {
  return (
    <div
      className={`${
        centered
          ? "mx-auto text-center"
          : "text-left"
      } max-w-3xl`}
    >
      {eyebrow && (
        <div
          className={`mb-4 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] ${
            dark
              ? "text-selfboss-yellow"
              : "text-selfboss-yellow-dark"
          }`}
        >
          <span className="h-2 w-2 rounded-full bg-selfboss-yellow" />
          {eyebrow}
        </div>
      )}

      <h2
        className={`text-3xl font-black leading-[1.05] tracking-tight sm:text-4xl lg:text-5xl ${
          dark ? "text-white" : "text-selfboss-black"
        }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mt-5 text-base leading-7 sm:text-lg ${
            dark
              ? "text-white/60"
              : "text-gray-600"
          }`}
        >
          {description}
        </p>
      )}

      {children}
    </div>
  );
}