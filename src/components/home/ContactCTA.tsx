import { Mail, Phone } from "lucide-react";
import FadeIn from "../animations/FadeIn";

export default function ContactCTA() {
  return (
    <section
      id="contact"
      className="grid-dark section-padding text-white"
    >
      <div className="section-container">
        <FadeIn>
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.2em] text-selfboss-yellow">
                Let&apos;s Build Together
              </span>

              <h2 className="mt-4 max-w-3xl text-3xl font-black leading-[1.05] tracking-tight sm:text-4xl lg:text-5xl">
                Have a skill, resource, idea, or opportunity to
                share?
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-white/55 sm:text-base">
                Whether you want to donate, volunteer, partner,
                or connect us with young entrepreneurs, we would
                love to hear from you.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <a
                href="mailto:selfbossbiz@gmail.com"
                className="btn-primary"
              >
                <Mail size={17} />
                Email Us
              </a>

              <a
                href="tel:+2347043202431"
                className="btn-outline border-white/30 text-white hover:bg-white hover:text-black"
              >
                <Phone size={17} />
                Call Us
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}