import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Badge } from "@/components/ui/badge";
import { Trophy, Medal, Award, Search, Crown } from "lucide-react";
// import { useState } from "react";

// const leaderboardData = [
//   { rank: 1, name: "Arjun Sharma", rollNo: "21CS001", totalPoints: 2850, roundsAttempted: 4, avatar: "AS" },
//   { rank: 2, name: "Priya Patel", rollNo: "21CS045", totalPoints: 2720, roundsAttempted: 4, avatar: "PP" },
//   { rank: 3, name: "Rohit Kumar", rollNo: "21CS089", totalPoints: 2680, roundsAttempted: 4, avatar: "RK" },
//   { rank: 4, name: "Sneha Reddy", rollNo: "21CS023", totalPoints: 2540, roundsAttempted: 3, avatar: "SR" },
//   { rank: 5, name: "Vikram Singh", rollNo: "21CS067", totalPoints: 2490, roundsAttempted: 4, avatar: "VS" },
//   { rank: 6, name: "Anita Desai", rollNo: "21CS012", totalPoints: 2380, roundsAttempted: 3, avatar: "AD" },
//   { rank: 7, name: "Karthik Raj", rollNo: "21CS034", totalPoints: 2290, roundsAttempted: 4, avatar: "KR" },
//   { rank: 8, name: "Meera Joshi", rollNo: "21CS056", totalPoints: 2180, roundsAttempted: 3, avatar: "MJ" },
//   { rank: 9, name: "Suresh Nair", rollNo: "21CS078", totalPoints: 2050, roundsAttempted: 3, avatar: "SN" },
//   { rank: 10, name: "Divya Mehta", rollNo: "21CS091", totalPoints: 1980, roundsAttempted: 3, avatar: "DM" }
// ];

// const getRankIcon = (rank: number) => {
//   switch (rank) {
//     case 1:
//       return <Crown className="w-5 h-5 text-yellow-400" />;
//     case 2:
//       return <Medal className="w-5 h-5 text-gray-400" />;
//     case 3:
//       return <Award className="w-5 h-5 text-orange-400" />;
//     default:
//       return <span className="w-5 h-5 flex items-center justify-center text-sm font-bold text-muted-foreground">#{rank}</span>;
//   }
// };

// const getRankBg = (rank: number) => {
//   switch (rank) {
//     case 1:
//       return "bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 border-yellow-500/30";
//     case 2:
//       return "bg-gradient-to-r from-gray-400/20 to-gray-500/20 border-gray-400/30";
//     case 3:
//       return "bg-gradient-to-r from-orange-500/20 to-orange-600/20 border-orange-500/30";
//     default:
//       return "bg-gradient-card border-border";
//   }
// };

const Leaderboard = () => {
  // const [searchTerm, setSearchTerm] = useState("");

  // const filteredData = leaderboardData.filter(
  //   (participant) =>
  //     participant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //     participant.rollNo.toLowerCase().includes(searchTerm.toLowerCase())
  // );

  return (
    <section className="py-20 px-6 bg-gradient-hero">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Live Leaderboard
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Competition rankings will appear here once the contest begins
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
                    The leaderboard will be updated in real-time once the competition starts. Check back to see the rankings!
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Commented out content */}
        {/* Search */}
        {/* <div className="mb-8">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search by name or roll number..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-card border-border"
            />
          </div>
        </div> */}

        {/* Top 3 Podium */}
        {/* <div className="grid md:grid-cols-3 gap-6 mb-12">
          {filteredData.slice(0, 3).map((participant) => (
            <Card key={participant.rank} className={`${getRankBg(participant.rank)} text-center p-6 shadow-glow`}>
              <div className="space-y-4">
                <div className="flex justify-center">
                  {getRankIcon(participant.rank)}
                </div>
                <div className="w-16 h-16 mx-auto bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {participant.avatar}
                </div>
                <div>
                  <h3 className="font-bold text-lg text-foreground">{participant.name}</h3>
                  <p className="text-sm text-muted-foreground">{participant.rollNo}</p>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-accent">{participant.totalPoints}</div>
                  <div className="text-sm text-muted-foreground">Total Points</div>
                  <Badge className="bg-primary/20 text-primary border-primary/30">
                    {participant.roundsAttempted} Rounds
                  </Badge>
                </div>
              </div>
            </Card>
          ))}
        </div> */}

        {/* Full Leaderboard Table */}
        {/* <Card className="bg-gradient-card shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl">
              <Trophy className="w-5 h-5 text-accent" />
              Complete Rankings
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {filteredData.map((participant) => (
                <div
                  key={participant.rank}
                  className={`${getRankBg(participant.rank)} rounded-lg p-4 transition-all duration-200 hover:shadow-tech`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        {getRankIcon(participant.rank)}
                      </div>
                      <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center text-white font-semibold">
                        {participant.avatar}
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">{participant.name}</div>
                        <div className="text-sm text-muted-foreground">{participant.rollNo}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="text-right">
                        <div className="text-xl font-bold text-accent">{participant.totalPoints}</div>
                        <div className="text-sm text-muted-foreground">Points</div>
                      </div>
                      <Badge className="bg-primary/20 text-primary border-primary/30">
                        {participant.roundsAttempted} Rounds
                      </Badge>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card> */}
      </div>
    </section>
  );
};

export default Leaderboard;