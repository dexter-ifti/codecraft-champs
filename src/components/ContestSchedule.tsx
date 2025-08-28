import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, PlayCircle, CheckCircle2, Timer } from "lucide-react";

type ContestStatus = "upcoming" | "ongoing" | "completed";

const contests: Array<{
  id: number;
  name: string;
  date: string;
  time: string;
  duration: string;
  status: ContestStatus;
  difficulty: string;
  confirmed: boolean;
}> = [
  {
    id: 1,
    name: "Round 1",
    date: "26 July 2025",
    time: "6:00 PM",
    duration: "60 mins",
    status: "completed",
    difficulty: "Easy",
    confirmed: true
  },
  {
    id: 2,
    name: "Round 2", 
    date: "02 August 2025",
    time: "6:00 PM",
    duration: "60 mins",
    status: "completed",
    difficulty: "Medium",
    confirmed: true
  },
  {
    id: 3,
    name: "Round 3",
    date: "11 August 2025", 
    time: "1:30 PM",
    duration: "60 mins",
    status: "completed",
    difficulty: "Medium",
    confirmed: true
  },
  {
    id: 4,
    name: "Round 4",
    date: "18 August 2025", 
    time: "1:30 PM",
    duration: "60 mins",
    status: "completed",
    difficulty: "Medium",
    confirmed: true
  },
  {
    id: 5,
    name: "Round 5",
    date: "25 August 2025", 
    time: "1:30 PM",
    duration: "60 mins",
    status: "completed",
    difficulty: "Medium",
    confirmed: true
  },
  {
    id: 6,
    name: "Round 6",
    date: "01 September 2025", 
    time: "1:30 PM",
    duration: "60 mins",
    status: "upcoming",
    difficulty: "Medium",
    confirmed: true
  },
  {
    id: 7,
    name: "Additional Rounds",
    date: "TBD", 
    time: "TBD",
    duration: "TBD",
    status: "upcoming",
    difficulty: "TBD",
    confirmed: false
  }
];

const getStatusIcon = (status: string) => {
  switch (status) {
    case "upcoming":
      return <Timer className="w-4 h-4" />;
    case "ongoing":
      return <PlayCircle className="w-4 h-4" />;
    case "completed":
      return <CheckCircle2 className="w-4 h-4" />;
    default:
      return <Timer className="w-4 h-4" />;
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case "upcoming":
      return "bg-primary/20 text-primary border-primary/30";
    case "ongoing":
      return "bg-accent/20 text-accent border-accent/30";
    case "completed":
      return "bg-green-500/20 text-green-400 border-green-500/30";
    default:
      return "bg-primary/20 text-primary border-primary/30";
  }
};

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case "Easy":
      return "bg-green-500/20 text-green-400 border-green-500/30";
    case "Medium":
      return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
    case "Medium-Hard":
      return "bg-orange-500/20 text-orange-400 border-orange-500/30";
    case "Hard":
      return "bg-red-500/20 text-red-400 border-red-500/30";
    default:
      return "bg-primary/20 text-primary border-primary/30";
  }
};

const ContestSchedule = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Contest Schedule
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Multiple rounds of competitive programming challenges with increasing difficulty
          </p>
          <div className="bg-primary/10 border border-primary/30 rounded-lg p-4 max-w-3xl mx-auto mt-6">
            <p className="text-sm text-muted-foreground">
              📅 <strong>Schedule Update:</strong> Additional rounds may be added based on participation and response. 
              Stay tuned to our WhatsApp group for the latest announcements!
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {contests.map((contest) => (
            <Card key={contest.id} className={`bg-gradient-card shadow-card hover:shadow-glow transition-all duration-300 border-border ${!contest.confirmed ? 'opacity-80' : ''}`}>
              <CardHeader className="space-y-4">
                <div className="flex items-start justify-between">
                  <CardTitle className="text-xl font-bold text-foreground">
                    {contest.name}
                  </CardTitle>
                  {contest.confirmed ? (
                    <Badge className={`${getDifficultyColor(contest.difficulty)} text-xs`}>
                      {contest.difficulty}
                    </Badge>
                  ) : (
                    <Badge className="bg-gray-500/20 text-gray-400 border-gray-500/30 text-xs">
                      TBD
                    </Badge>
                  )}
                </div>
                <div className="flex gap-2">
                  <Badge className={`${getStatusColor(contest.status)} w-fit flex items-center gap-1 text-xs`}>
                    {getStatusIcon(contest.status)}
                    {contest.status.charAt(0).toUpperCase() + contest.status.slice(1)}
                  </Badge>
                  {!contest.confirmed && (
                    <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30 text-xs">
                      Tentative
                    </Badge>
                  )}
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span>{contest.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 text-primary" />
                    <span>{contest.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Timer className="w-4 h-4 text-primary" />
                    <span>{contest.duration}</span>
                  </div>
                </div>
                
                {contest.confirmed ? (
                  <Button 
                    variant={contest.status === "upcoming" ? "tech" : "outline_tech"} 
                    className="w-full"
                    disabled={contest.status === "completed"}
                    onClick={() => {
                      alert("Please check the WhatsApp group for the contest link.");
                    }}
                  >
                    {contest.status === "upcoming" && "Join Contest"}
                    {contest.status === "ongoing" && "Enter Contest"}
                    {contest.status === "completed" && "View Results"}
                  </Button>
                ) : (
                  <Button 
                    variant="outline_tech" 
                    className="w-full" 
                    disabled
                  >
                    Details Coming Soon
                  </Button>
                )}
                
                {!contest.confirmed && (
                  <p className="text-xs text-muted-foreground text-center">
                    More rounds may be announced based on participation
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContestSchedule;