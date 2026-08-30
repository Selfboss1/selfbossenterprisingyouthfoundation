import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-selfboss-black pb-28 pt-14 text-white lg:pb-10">
      <div className="section-container">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_0.7fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-selfboss-yellow font-black text-black">
                SB
              </div>

              <div>
                <p className="font-black tracking-tight">
                  SELFBOSS
                </p>

                <p className="text-[8px] font-black uppercase tracking-[0.18em] text-white/40">
                  Enterprising Youth Foundation
                </p>
              </div>
            </div>

            <p className="mt-6 max-w-md text-sm leading-7 text-white/50">
              Equipping young Nigerians with skills, support,
              and opportunities for lasting impact.
            </p>

            <div className="mt-6 inline-flex rounded-full bg-selfboss-yellow px-4 py-2 text-xs font-black text-black">
              Empowering Youth. Creating Impact.
            </div>
          </div>

          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-selfboss-yellow">
              Explore
            </p>

            <div className="mt-5 flex flex-col gap-3 text-sm text-white/50">
              <a href="/about" className="hover:text-white">
                About Us
              </a>

              <a
                href="/programs"
                className="hover:text-white"
              >
                Programs
              </a>

              <a href="/impact" className="hover:text-white">
                Our Impact
              </a>

              <a href="/events" className="hover:text-white">
                Events
              </a>

              <a href="/donate" className="hover:text-white">
                Donate
              </a>
            </div>
          </div>

          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-selfboss-yellow">
              Contact
            </p>

            <div className="mt-5 space-y-4 text-sm text-white/50">
              <a
                  href="mailto:info@selfbossyouthfoundation.com?subject=Enquiry%20to%20SelfBoss%20Enterprising%20Youth%20Foundation"
                  aria-label="Email SelfBoss Enterprising Youth Foundation"
                  className="flex gap-3 hover:text-white"
                >
                  <Mail
                    size={17}
                    className="mt-0.5 shrink-0"
                  />
                  info@selfbossyouthfoundation.com
              </a>

              <a
                href="tel:+2347043202431"
                className="flex gap-3 hover:text-white"
              >
                <Phone
                  size={17}
                  className="mt-0.5 shrink-0"
                />
                +234 704 320 2431
              </a>

              <div className="flex gap-3">
                <MapPin
                  size={17}
                  className="mt-0.5 shrink-0"
                />
                Aba, Abia State, Nigeria
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-xs text-white/30 sm:flex sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} SelfBoss Enterprising
            Youth Foundation.
          </p>

          <a
            href="#"
            className="mt-3 flex items-center gap-1 hover:text-white sm:mt-0"
          >
            Back to top
            <ArrowUpRight size={13} />
          </a>
        </div>
      </div>
    </footer>
  );
}