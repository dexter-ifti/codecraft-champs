import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Trophy, Medal, Award, Search, Crown } from "lucide-react";
import { useState } from "react";
import leaderboardData from "../data/Leaderboard1.json";

// Transform and properly rank JSON data
const sortedData = leaderboardData.models
  .map((participant) => ({
    name: participant.hacker,
    rollNo: `ID: ${participant.hacker_id}`,
    totalPoints: participant.score,
    timeSpent: participant.time_taken,
    avatar: participant.avatar.includes('hrcdn.net') || participant.avatar.includes('gravatar') 
      ? participant.avatar 
      : participant.hacker.substring(0, 2).toUpperCase(),
    hacker_id: participant.hacker_id
  }))
  .sort((a, b) => {
    // First sort by score (descending - higher score is better)
    if (b.totalPoints !== a.totalPoints) {
      return b.totalPoints - a.totalPoints;
    }
    // If scores are equal, sort by time (ascending - faster time is better)
    // Note: time_taken of 0 means no submission, so put them at the end
    if (a.timeSpent === 0 && b.timeSpent === 0) return 0;
    if (a.timeSpent === 0) return 1;
    if (b.timeSpent === 0) return -1;
    return a.timeSpent - b.timeSpent;
  });

// Add proper ranks based on the sorted order
const transformedData = sortedData.map((participant, index) => ({
  ...participant,
  rank: index + 1
}));

const getRankIcon = (rank: number) => {
  switch (rank) {
    case 1:
      return <Crown className="w-5 h-5 text-yellow-400" />;
    case 2:
      return <Medal className="w-5 h-5 text-gray-400" />;
    case 3:
      return <Award className="w-5 h-5 text-orange-400" />;
    default:
      return <span className="w-5 h-5 flex items-center justify-center text-sm font-bold text-muted-foreground">#{rank}</span>;
  }
};

const getRankBg = (rank: number) => {
  switch (rank) {
    case 1:
      return "bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 border-yellow-500/30";
    case 2:
      return "bg-gradient-to-r from-gray-400/20 to-gray-500/20 border-gray-400/30";
    case 3:
      return "bg-gradient-to-r from-orange-500/20 to-orange-600/20 border-orange-500/30";
    default:
      return "bg-gradient-card border-border";
  }
};

// Helper function to format time
const formatTime = (seconds: number) => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;
  
  if (hours > 0) {
    return `${hours}h ${minutes}m ${secs}s`;
  } else if (minutes > 0) {
    return `${minutes}m ${secs}s`;
  } else {
    return `${secs}s`;
  }
};

const Leaderboard = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = transformedData.filter(
    (participant) =>
      participant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      participant.rollNo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="leaderboard" className="py-20 px-6 bg-gradient-hero">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Live Leaderboard
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Round 1 Results - CodeCraft Championship 2025
          </p>
        </div>

        {/* Search */}
        <div className="mb-8">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search by name or ID..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-card border-border"
            />
          </div>
        </div>

        {/* Top 3 Podium */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {filteredData.slice(0, 3).map((participant) => (
            <Card key={participant.hacker_id} className={`${getRankBg(participant.rank)} text-center p-6 shadow-glow`}>
              <div className="space-y-4">
                <div className="flex justify-center">
                  {getRankIcon(participant.rank)}
                </div>
                <div className="w-16 h-16 mx-auto bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-lg overflow-hidden">
                  {participant.avatar.startsWith('http') ? (
                    <img 
                      src={participant.avatar} 
                      alt={participant.name} 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'flex';
                      }}
                    />
                  ) : (
                    <span>{participant.avatar}</span>
                  )}
                  <span className="hidden w-full h-full items-center justify-center">
                    {participant.name.substring(0, 2).toUpperCase()}
                  </span>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-foreground">{participant.name}</h3>
                  <p className="text-sm text-muted-foreground">{participant.rollNo}</p>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-accent">{participant.totalPoints}</div>
                  <div className="text-sm text-muted-foreground">Score</div>
                  <Badge className="bg-primary/20 text-primary border-primary/30">
                    {formatTime(participant.timeSpent)}
                  </Badge>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Full Leaderboard Table */}
        <Card className="bg-gradient-card shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl">
              <Trophy className="w-5 h-5 text-accent" />
              Complete Rankings ({filteredData.length} participants)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 max-h-96 overflow-y-auto">
              {filteredData.map((participant) => (
                <div
                  key={participant.hacker_id}
                  className={`${getRankBg(participant.rank)} rounded-lg p-4 transition-all duration-200 hover:shadow-tech`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        {getRankIcon(participant.rank)}
                      </div>
                      <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center text-white font-semibold overflow-hidden">
                        {participant.avatar.startsWith('http') ? (
                          <img 
                            src={participant.avatar} 
                            alt={participant.name} 
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.currentTarget.style.display = 'none';
                              (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'flex';
                            }}
                          />
                        ) : (
                          <span>{participant.avatar}</span>
                        )}
                        <span className="hidden w-full h-full items-center justify-center text-xs">
                          {participant.name.substring(0, 2).toUpperCase()}
                        </span>
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">{participant.name}</div>
                        <div className="text-sm text-muted-foreground">{participant.rollNo}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="text-right">
                        <div className="text-xl font-bold text-accent">{participant.totalPoints}</div>
                        <div className="text-sm text-muted-foreground">Score</div>
                      </div>
                      <Badge className="bg-primary/20 text-primary border-primary/30">
                        {formatTime(participant.timeSpent)}
                      </Badge>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Leaderboard;