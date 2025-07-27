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
      
      {/* Footer */}
      <footer className="bg-gradient-card border-t border-border py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-muted-foreground">
                © 2025 CodeCraft Championship. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;