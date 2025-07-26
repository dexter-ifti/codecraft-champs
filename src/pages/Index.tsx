import Hero from "@/components/Hero";
import ContestSchedule from "@/components/ContestSchedule";
import Leaderboard from "@/components/Leaderboard";
import About from "@/components/About";
import Rules from "@/components/Rules";
import Prizes from "@/components/Prizes";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <ContestSchedule />
      <Leaderboard />
      <About />
      <Rules />
      <Prizes />
      <Contact />
    </div>
  );
};

export default Index;