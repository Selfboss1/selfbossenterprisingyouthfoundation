import { Mail, MapPin, Phone } from "lucide-react";

export default function TopBar() {
  return (
    <div className="hidden bg-selfboss-black text-white lg:block">
      <div className="section-container flex min-h-10 items-center justify-between">
        <div className="flex items-center gap-2 text-xs font-bold text-white/60">
          <MapPin size={13} />
          Aba, Abia State, Nigeria
        </div>

        <div className="flex items-center gap-6 text-xs font-bold">
          <a
            href="tel:+2347043202431"
            className="flex items-center gap-2 transition hover:text-selfboss-yellow"
          >
            <Phone size={13} />
            +234 704 320 2431
          </a>

          <a
            href="mailto:selfbossbiz@gmail.com"
            className="flex items-center gap-2 transition hover:text-selfboss-yellow"
          >
            <Mail size={13} />
            info@selfbossyouthfoundation.com
          </a>
        </div>
      </div>
    </div>
  );
}