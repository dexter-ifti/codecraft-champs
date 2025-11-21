import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Clock, Users, Trophy, Calendar } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import qrImage from "@/assets/qr.png";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2025-11-06T13:30:00').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-gradient-hero"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay'
      }}
    >
      <div className="absolute inset-0 bg-background/80" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <div className="space-y-8">
          {/* Main Title */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-primary bg-clip-text text-transparent animate-float">
              CodeCraft Championship 2.0
            </h1>
            <div className="flex items-center justify-center gap-2 text-xl md:text-2xl text-muted-foreground">
              <Trophy className="w-6 h-6 text-accent" />
              <span>Competition concluded — thanks to everyone who participated</span>
            </div>
          </div>

          {/* Tagline */}
          <p className="text-2xl md:text-3xl font-medium text-foreground max-w-4xl mx-auto leading-relaxed">
            "From Zero to Code Hero — Prepare for Placements with Real Coding Battles"
          </p>

          {/* Event Start */}
          <div className="flex items-center justify-center gap-3 text-lg">
            <Calendar className="w-5 h-5 text-primary" />
            <span className="text-foreground font-medium">Championship concluded — results finalized</span>
          </div>

          {/* Countdown Timer */}
          <Card className="max-w-2xl mx-auto p-6 bg-gradient-card shadow-card">
            <div className="space-y-4 text-center">
              <div className="flex items-center justify-center gap-2 text-lg font-semibold text-primary">
                <Clock className="w-5 h-5" />
                <span>Event Status</span>
              </div>
              <div className="text-foreground">
                The CodeCraft Championship has ended. Final results and rankings are available on the leaderboard. Thank you to all participants and volunteers.
              </div>
              <div className="text-sm text-muted-foreground">Finalized on 6th November 2025</div>
            </div>
          </Card>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="hero" 
              size="lg" 
              className="text-lg px-8 py-6" 
              onClick={() => {
                navigate('/leaderboard');
              }}
            >
              <Trophy className="w-5 h-5" />
              View Final Leaderboard
            </Button>
            <Button 
              variant="outline_tech" 
              size="lg" 
              className="text-lg px-8 py-6" 
              onClick={() => {
                navigate('/about');
              }}
            >
              <Users className="w-5 h-5" />
              Event Highlights
            </Button>
          </div>

          {/* QR Code */}
          <div className="flex justify-center">
            <Card className="p-6 bg-gradient-card shadow-card max-w-xs">
              <div className="text-center space-y-4">
                <img 
                  src={qrImage} 
                  alt="QR Code for Registration" 
                  className="w-32 h-32 mx-auto rounded-lg"
                />
                <p className="text-sm text-muted-foreground">
                  Event concluded — QR previously used for registration
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;