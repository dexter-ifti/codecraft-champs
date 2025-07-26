import { Card, CardContent } from "@/components/ui/card";
import { Target, TrendingUp, Users, Award, Code, Brain } from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Placement Focused",
    description: "Specifically designed to prepare students for coding interviews at top tech companies"
  },
  {
    icon: TrendingUp,
    title: "Progressive Difficulty", 
    description: "Each round increases in complexity, gradually building your problem-solving skills"
  },
  {
    icon: Users,
    title: "Real Competition",
    description: "Compete with fellow students in a live environment that simulates actual interview pressure"
  },
  {
    icon: Award,
    title: "Recognition & Rewards",
    description: "Top performers receive certificates, tech goodies, and special recognition"
  },
  {
    icon: Code,
    title: "Multi-Language Support",
    description: "Code in your preferred language - C++, Java, or Python"
  },
  {
    icon: Brain,
    title: "Comprehensive DSA",
    description: "Covers all essential data structures and algorithms topics for placements"
  }
];

const About = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            About CodeCraft Championship 2.0
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            A comprehensive competitive programming series designed to bridge the gap between academic learning 
            and industry requirements. Our championship helps students master data structures and algorithms 
            through structured practice and real coding battles.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="bg-gradient-card shadow-card hover:shadow-glow transition-all duration-300 p-6">
              <CardContent className="space-y-4 p-0">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-foreground">What Makes This Championship Unique?</h3>
            <div className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                Unlike traditional coding competitions, CodeCraft Championship 2.0 is specifically tailored for 
                campus placement preparation. Each round is carefully designed to mirror the types of problems 
                and pressure you'll face in actual technical interviews.
              </p>
              <p className="leading-relaxed">
                Our progressive difficulty model ensures that beginners can participate and grow, while experienced 
                coders are challenged at the highest levels. The live leaderboard creates healthy competition and 
                motivation to improve.
              </p>
              <p className="leading-relaxed">
                The grand finale brings together the best performers for an ultimate coding showdown, with prizes 
                and recognition that can boost your profile for placements.
              </p>
            </div>
          </div>
          
          <Card className="bg-gradient-card shadow-glow p-8">
            <div className="space-y-6">
              <h4 className="text-2xl font-bold text-foreground text-center">Championship Goals</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2" />
                  <p className="text-muted-foreground">Build confidence in solving complex coding problems under time pressure</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2" />
                  <p className="text-muted-foreground">Master essential DSA concepts through practical application</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2" />
                  <p className="text-muted-foreground">Create a competitive environment that simulates real interview scenarios</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2" />
                  <p className="text-muted-foreground">Provide recognition and motivation for consistent performance</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2" />
                  <p className="text-muted-foreground">Connect students with mentors and career guidance</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;