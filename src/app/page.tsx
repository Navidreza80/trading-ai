// imports

import Features from "@/components/Landing/Features";
import HeroSection from "@/components/Landing/HeroSection";
import Stats from "@/components/Landing/Stats";
import UserExperience from "@/components/Landing/UserExperience";
import StartTrading from "@/components/Landing/StartTrading";
import Footer from "@/components/Footer/Footer";

export default function Home() {

  // jsx return
  return (
    <main className="min-h-screen bg-[#0a0a0a] dark:bg-black text-white flex flex-col">

      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <Features />

      {/* Stats Section */}
      <Stats />

      {/* User Experience Section */}
      <UserExperience />

      {/* Start Trading Section */}
      <StartTrading />

      <Footer />
    </main>
  );
}
