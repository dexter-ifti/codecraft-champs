import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
import { Trophy, Award, Star, Gift, Crown, Medal, Zap, Target } from "lucide-react";

// const mainPrizes = [
//   {
//     position: "1st Place",
//     icon: Crown,
//     color: "text-yellow-400",
//     bgColor: "from-yellow-500/20 to-yellow-600/20 border-yellow-500/30",
//     prize: "₹10,000 + Premium Tech Goodies",
//     extras: ["Certificate of Excellence", "LinkedIn Recommendation", "Internship Referral"]
//   },
//   {
//     position: "2nd Place", 
//     icon: Medal,
//     color: "text-gray-400",
//     bgColor: "from-gray-400/20 to-gray-500/20 border-gray-400/30",
//     prize: "₹7,500 + Tech Merchandise",
//     extras: ["Certificate of Achievement", "LinkedIn Badge", "Placement Guidance"]
//   },
//   {
//     position: "3rd Place",
//     icon: Award,
//     color: "text-orange-400", 
//     bgColor: "from-orange-500/20 to-orange-600/20 border-orange-500/30",
//     prize: "₹5,000 + Coding Swag",
//     extras: ["Certificate of Recognition", "Profile Boost", "Mentorship Session"]
//   }
// ];

// const specialAwards = [
//   {
//     title: "Fastest Solver",
//     icon: Zap,
//     description: "Quickest to solve all problems in any round",
//     reward: "₹2,000 + Speed Demon Badge"
//   },
//   {
//     title: "Most Consistent",
//     icon: Target, 
//     description: "Best average performance across all rounds",
//     reward: "₹2,000 + Consistency Champion Badge"
//   },
//   {
//     title: "Best Newcomer",
//     icon: Star,
//     description: "Top performer among first-time participants",
//     reward: "₹1,500 + Rising Star Badge"
//   },
//   {
//     title: "Problem Setter's Choice",
//     icon: Gift,
//     description: "Most elegant or creative solution",
//     reward: "₹1,500 + Innovation Award"
//   }
// ];

// const participationRewards = [
//   "Digital participation certificates for all participants",
//   "Exclusive CodeCraft Championship merchandise",
//   "Access to premium coding interview preparation materials",
//   "One-on-one mentorship sessions with industry experts",
//   "Fast-track referrals for internship opportunities",
//   "Feature in college newsletter and social media"
// ];

const Prizes = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Prizes & Rewards
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get ready for amazing prizes and rewards!
          </p>
        </div>

        {/* Revealing Soon Message */}
        <div className="text-center">
          <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/30 max-w-2xl mx-auto">
            <CardContent className="p-12">
              <div className="space-y-6">
                <Trophy className="w-20 h-20 text-accent mx-auto animate-pulse" />
                <div>
                  <div className="text-4xl md:text-5xl font-bold text-accent mb-4">
                    Revealing Soon
                  </div>
                  <div className="text-lg text-muted-foreground">
                    Amazing prizes and rewards are being finalized. Stay tuned for the big reveal!
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Commented out content */}
        {/* Main Prizes Podium */}
        {/* <div className="grid md:grid-cols-3 gap-8 mb-16">
          {mainPrizes.map((prize, index) => (
            <Card key={index} className={`bg-gradient-to-br ${prize.bgColor} shadow-glow hover:shadow-tech transition-all duration-300`}>
              <CardHeader className="text-center space-y-4">
                <div className="flex justify-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center">
                    <prize.icon className={`w-8 h-8 ${prize.color}`} />
                  </div>
                </div>
                <CardTitle className="text-2xl font-bold text-foreground">{prize.position}</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-6">
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-accent">{prize.prize}</div>
                </div>
                <div className="space-y-2">
                  {prize.extras.map((extra, extraIndex) => (
                    <Badge key={extraIndex} className="bg-primary/20 text-primary border-primary/30 block w-full py-2">
                      {extra}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div> */}

        {/* Special Awards */}
        {/* <Card className="bg-gradient-card shadow-card mb-12">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center text-foreground">
              Special Awards & Recognition
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              {specialAwards.map((award, index) => (
                <div key={index} className="bg-secondary/50 rounded-lg p-6 hover:bg-secondary/70 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <award.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-bold text-lg text-foreground">{award.title}</h4>
                      <p className="text-muted-foreground text-sm">{award.description}</p>
                      <Badge className="bg-accent/20 text-accent border-accent/30">
                        {award.reward}
                      </Badge>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card> */}

        {/* Participation Rewards */}
        {/* <Card className="bg-gradient-card shadow-glow">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl text-foreground">
              <Trophy className="w-6 h-6 text-accent" />
              Participation Benefits
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {participationRewards.map((reward, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Star className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground">{reward}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card> */}

        {/* Prize Pool Summary */}
        {/* <div className="text-center mt-12">
          <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/30 max-w-md mx-auto">
            <CardContent className="p-8">
              <div className="space-y-4">
                <Trophy className="w-12 h-12 text-accent mx-auto" />
                <div>
                  <div className="text-3xl font-bold text-accent">₹50,000+</div>
                  <div className="text-lg text-muted-foreground">Total Prize Pool</div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Plus exclusive goodies, certificates, and career opportunities
                </p>
              </div>
            </CardContent>
          </Card>
        </div> */}
      </div>
    </section>
  );
};

export default Prizes;