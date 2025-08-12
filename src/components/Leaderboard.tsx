import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Trophy, Medal, Award, Search, Crown, AlertTriangle, Shield } from "lucide-react";
import { useState } from "react";
import leaderboardData from "../data/CurrentLeaderboard.json";

// Transform merged leaderboard data (already sorted and ranked)
const sortedData = leaderboardData.models
  .map((participant) => ({
    name: participant.hacker,
    rollNo: `ID: ${participant.hacker_id}`,
    totalPoints: participant.score,
    timeSpent: participant.time_taken,
    round1Score: participant.round1_score || 0,
    round1Time: participant.round1_time || 0,
    round2Score: participant.round2_score || 0,
    round2Time: participant.round2_time || 0,
    round3Score: participant.round3_score || 0,
    round3Time: participant.round3_time || 0,
    isCheating: participant.is_cheating || false,
    avatar: participant.avatar.includes('hrcdn.net') || participant.avatar.includes('gravatar') 
      ? participant.avatar 
      : participant.hacker.substring(0, 2).toUpperCase(),
    hacker_id: participant.hacker_id,
    rank: participant.rank
  }));

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
  const [showFlagged, setShowFlagged] = useState<"all" | "flagged" | "clean">("all");

  const filteredData = sortedData.filter((participant) => {
    const matchesSearch = 
      participant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      participant.rollNo.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = 
      showFlagged === "all" ? true :
      showFlagged === "flagged" ? participant.isCheating :
      showFlagged === "clean" ? !participant.isCheating : true;
    
    return matchesSearch && matchesFilter;
  });

  return (
    <section id="leaderboard" className="py-20 px-6 bg-gradient-hero">
      <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
            Competition Leaderboard
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Combined results from all three rounds • {sortedData.length} participants • Ranked by total score, then by time
          </p>
          <div className="flex justify-center gap-4 mt-4 text-sm">
            <div className="flex items-center gap-1 text-green-600">
              <Shield className="w-4 h-4" />
              <span>{sortedData.filter(p => !p.isCheating).length} Clean</span>
            </div>
            <div className="flex items-center gap-1 text-red-500">
              <AlertTriangle className="w-4 h-4" />
              <span>{sortedData.filter(p => p.isCheating).length} Flagged</span>
            </div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search by name or ID..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-card border-border"
            />
          </div>
          
          {/* Filter Buttons */}
          <div className="flex justify-center gap-2 flex-wrap">
            <Button
              variant={showFlagged === "all" ? "default" : "outline"}
              size="sm"
              onClick={() => setShowFlagged("all")}
              className="flex items-center gap-2"
            >
              <Shield className="w-4 h-4" />
              All ({sortedData.length})
            </Button>
            <Button
              variant={showFlagged === "clean" ? "default" : "outline"}
              size="sm"
              onClick={() => setShowFlagged("clean")}
              className="flex items-center gap-2"
            >
              <Shield className="w-4 h-4 text-green-500" />
              Clean ({sortedData.filter(p => !p.isCheating).length})
            </Button>
            <Button
              variant={showFlagged === "flagged" ? "default" : "outline"}
              size="sm"
              onClick={() => setShowFlagged("flagged")}
              className="flex items-center gap-2"
            >
              <AlertTriangle className="w-4 h-4 text-red-500" />
              Flagged ({sortedData.filter(p => p.isCheating).length})
            </Button>
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
                  <div className="flex items-center justify-center gap-2">
                    <h3 className="font-bold text-lg text-foreground">{participant.name}</h3>
                    {participant.isCheating && (
                      <AlertTriangle className="w-4 h-4 text-red-500" />
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">{participant.rollNo}</p>
                  {participant.isCheating && (
                    <Badge variant="destructive" className="text-xs mt-1">
                      <AlertTriangle className="w-3 h-3 mr-1" />
                      Flagged
                    </Badge>
                  )}
                </div>
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-accent">{participant.totalPoints}</div>
                  <div className="text-sm text-muted-foreground">Total Score</div>
                  <div className="flex gap-2 justify-center text-xs">
                    <Badge variant="outline" className="text-xs">
                      R1: {participant.round1Score}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      R2: {participant.round2Score}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      R3: {participant.round3Score}
                    </Badge>
                  </div>
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
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-foreground">{participant.name}</span>
                          {participant.isCheating && (
                            <AlertTriangle className="w-4 h-4 text-red-500" />
                          )}
                        </div>
                        <div className="text-sm text-muted-foreground">{participant.rollNo}</div>
                        {participant.isCheating && (
                          <div className="mt-1">
                            <Badge variant="destructive" className="text-xs">
                              <AlertTriangle className="w-3 h-3 mr-1" />
                              Flagged
                            </Badge>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="text-right">
                        <div className="text-xl font-bold text-accent">{participant.totalPoints}</div>
                        <div className="text-sm text-muted-foreground">Total Score</div>
                        <div className="flex gap-1 justify-end mt-1">
                          <Badge variant="outline" className="text-xs px-1 py-0">
                            R1: {participant.round1Score}
                          </Badge>
                          <Badge variant="outline" className="text-xs px-1 py-0">
                            R2: {participant.round2Score}
                          </Badge>
                          <Badge variant="outline" className="text-xs px-1 py-0">
                            R3: {participant.round3Score}
                          </Badge>
                        </div>
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