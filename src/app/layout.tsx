import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://selfbossfoundation.org"),

  title: {
    default:
      "SelfBoss Enterprising Youth Foundation | Empowering Young Nigerians",
    template: "%s | SelfBoss Enterprising Youth Foundation",
  },

  description:
    "SelfBoss Enterprising Youth Foundation equips young Nigerians with business skills, training, equipment, mentorship, and opportunities to build sustainable businesses and create lasting impact.",

  keywords: [
    "SelfBoss Foundation",
    "SelfBoss Enterprising Youth Foundation",
    "youth empowerment Nigeria",
    "youth entrepreneurship Nigeria",
    "entrepreneurship training",
    "youth development Abia State",
    "youth empowerment Aba",
    "business grants Nigeria",
    "youth skills development",
    "entrepreneurship Aba",
    "nonprofit Nigeria",
    "NGO Abia State",
  ],

  authors: [
    {
      name: "SelfBoss Enterprising Youth Foundation",
    },
  ],

  creator: "SelfBoss Enterprising Youth Foundation",

  openGraph: {
    type: "website",
    locale: "en_NG",
    siteName: "SelfBoss Enterprising Youth Foundation",
    title:
      "SelfBoss Enterprising Youth Foundation | Empowering Young Nigerians",
    description:
      "Equipping young Nigerians with skills, support, and opportunities for lasting impact.",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "SelfBoss Enterprising Youth Foundation | Empowering Young Nigerians",
    description:
      "Equipping young Nigerians with skills, support, and opportunities for lasting impact.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-NG">
      <body className="bg-white text-selfboss-black antialiased">
        {children}
      </body>
    </html>
  );
}