import About from "@/components/home/About";
import Compliance from "@/components/home/Compliance";
import ContactCTA from "@/components/home/ContactCTA";
import Donation from "@/components/home/Donation";
import Events from "@/components/home/Events";
import GetInvolved from "@/components/home/GetInvolved";
import Hero from "@/components/home/Hero";
import ImpactStats from "@/components/home/ImpactStats";
import MissionVision from "@/components/home/MissionVision";
import Programs from "@/components/home/Programs";

import BottomNav from "@/components/layout/BottomNav";
import FloatingActions from "@/components/layout/FloatingActions";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import TopBar from "@/components/layout/TopBar";
import UpcomingEvent from "@/components/home/UpcomingEvent";

export default function HomePage() {
  return (
    <>
      <TopBar />

      <Navbar />

      <main className="overflow-hidden">
        <Hero />

        <UpcomingEvent />

        <ImpactStats />

        <About />

        <MissionVision />

        <Programs />

        <Events />

        <GetInvolved />

        <Donation />

        <Compliance />

        <ContactCTA />
      </main>

      <Footer />

      <FloatingActions />

      <BottomNav />
    </>
  );
}