"use client";

import {
  CalendarDays,
  CircleDollarSign,
  Home,
  Info,
  LayoutGrid,
} from "lucide-react";

const items = [
  {
    label: "Home",
    href: "/",
    icon: Home,
  },
  {
    label: "About",
    href: "/about",
    icon: Info,
  },
  {
    label: "Programs",
    href: "/programs",
    icon: LayoutGrid,
  },
  {
    label: "Events",
    href: "/events",
    icon: CalendarDays,
  },
  {
    label: "Donate",
    href: "/donate",
    icon: CircleDollarSign,
  },
];

export default function BottomNav() {
  return (
    <nav className="safe-bottom fixed bottom-0 left-0 right-0 z-40 border-t border-black/10 bg-white/95 px-2 py-2 shadow-[0_-10px_30px_rgba(0,0,0,0.08)] backdrop-blur-xl lg:hidden">
      <div className="mx-auto grid max-w-md grid-cols-5">
        {items.map((item) => {
          const Icon = item.icon;
          const donate = item.label === "Donate";

          return (
            <a
              key={item.label}
              href={item.href}
              className={`flex flex-col items-center justify-center gap-1 rounded-xl py-2 text-[9px] font-black transition ${
                donate
                  ? "bg-selfboss-yellow text-selfboss-black"
                  : "text-gray-500 hover:bg-gray-100 hover:text-black"
              }`}
            >
              <Icon size={17} />
              {item.label}
            </a>
          );
        })}
      </div>
    </nav>
  );
}