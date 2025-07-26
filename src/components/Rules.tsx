import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, AlertTriangle, Clock, Code, Users, Shield } from "lucide-react";

const ruleCategories = [
  {
    icon: Users,
    title: "Participation Rules",
    color: "text-primary",
    rules: [
      "Open to all undergraduate students",
      "Must register with valid college email ID and roll number",
      "One account per participant - multiple accounts will lead to disqualification",
      "Must participate in at least 2 rounds to be eligible for final rankings"
    ]
  },
  {
    icon: Code,
    title: "Technical Guidelines", 
    color: "text-accent",
    rules: [
      "Allowed languages: C++, Java, Python",
      "Standard libraries and built-in functions are permitted",
      "External libraries or custom imports are not allowed",
      "Code must be original and written during the contest"
    ]
  },
  {
    icon: Clock,
    title: "Contest Format",
    color: "text-green-400",
    rules: [
      "Each round has a fixed duration (90-120 minutes)",
      "Problems range from 3-5 questions per round",
      "Partial scoring available for incomplete solutions",
      "Time penalty applies for multiple submissions"
    ]
  },
  {
    icon: Shield,
    title: "Anti-Plagiarism Policy",
    color: "text-red-400",
    rules: [
      "Copying code from online sources is strictly prohibited",
      "Collaboration with other participants is not allowed",
      "Plagiarism detection tools will be used to verify submissions",
      "Violations result in immediate disqualification"
    ]
  }
];

const scoringRules = [
  {
    aspect: "Problem Solving",
    points: "20-100 points per problem",
    description: "Based on difficulty level"
  },
  {
    aspect: "Time Bonus",
    points: "Up to 0 bonus points",
    description: "For solving within first 30 minutes"
  },
  {
    aspect: "Accuracy Bonus", 
    points: "0 points",
    description: "For solving on first attempt"
  },
  {
    aspect: "Submission Penalty",
    points: "0 points",
    description: "For each wrong submission"
  }
];

const Rules = () => {
  return (
    <section className="py-20 px-6 bg-gradient-hero">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Rules & Guidelines
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Fair play guidelines to ensure a competitive and enjoyable experience for all participants
          </p>
        </div>

        {/* Main Rules Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {ruleCategories.map((category, index) => (
            <Card key={index} className="bg-gradient-card shadow-card hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <category.icon className={`w-6 h-6 ${category.color}`} />
                  <span className="text-foreground">{category.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {category.rules.map((rule, ruleIndex) => (
                    <div key={ruleIndex} className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                      <p className="text-muted-foreground text-sm leading-relaxed">{rule}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Scoring System */}
        <Card className="bg-gradient-card shadow-glow mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl">
              <AlertTriangle className="w-6 h-6 text-accent" />
              <span className="text-foreground">Scoring System</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {scoringRules.map((rule, index) => (
                <div key={index} className="text-center space-y-3 p-4 rounded-lg bg-secondary/50">
                  <h4 className="font-semibold text-foreground">{rule.aspect}</h4>
                  <Badge className="bg-primary/20 text-primary border-primary/30 text-lg font-bold">
                    {rule.points}
                  </Badge>
                  <p className="text-sm text-muted-foreground">{rule.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Important Notes */}
        <Card className="bg-gradient-to-r from-red-500/10 to-orange-500/10 border-red-500/30">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-red-400">
              <AlertTriangle className="w-6 h-6" />
              Important Notes
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
              <p className="text-muted-foreground text-sm">
                <strong className="text-red-400">Contest Timings:</strong> All contests start at 6:00 PM IST sharp. 
                Late entries are not allowed.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
              <p className="text-muted-foreground text-sm">
                <strong className="text-red-400">Technical Issues:</strong> Contact organizers immediately if you 
                face any technical difficulties. Screenshots must be provided for verification.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
              <p className="text-muted-foreground text-sm">
                <strong className="text-red-400">Final Decision:</strong> All decisions made by the organizing 
                committee are final and binding.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Rules;