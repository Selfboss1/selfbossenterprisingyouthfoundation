import FadeIn from "../animations/FadeIn";

export default function MissionVision() {
  return (
    <section className="grid-dark section-padding text-white">
      <div className="section-container">
        <FadeIn>
          <div className="mb-10 text-center">
            <span className="text-xs font-black uppercase tracking-[0.2em] text-selfboss-yellow">
              What Drives Us
            </span>

            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              Purpose behind the work.
            </h2>
          </div>
        </FadeIn>

        <div className="grid gap-4 lg:grid-cols-2">
          <FadeIn>
            <article className="h-full rounded-3xl border border-white/10 bg-white/5 p-7 sm:p-9">
              <span className="text-xs font-black uppercase tracking-[0.2em] text-selfboss-yellow">
                Our Vision
              </span>

              <h3 className="mt-5 text-2xl font-black leading-tight sm:text-3xl">
                To create a thriving community of young
                entrepreneurs who drive economic development
                and social change in Nigeria.
              </h3>
            </article>
          </FadeIn>

          <FadeIn delay={0.12}>
            <article className="h-full rounded-3xl bg-selfboss-yellow p-7 text-selfboss-black sm:p-9">
              <span className="text-xs font-black uppercase tracking-[0.2em]">
                Our Mission
              </span>

              <h3 className="mt-5 text-2xl font-black leading-tight sm:text-3xl">
                Empowering Nigeria&apos;s enterprising youth
                with the necessary business equipment and
                training to foster innovation, entrepreneurship,
                and sustainable economic growth.
              </h3>
            </article>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}