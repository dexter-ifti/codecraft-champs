import Leaderboard from "@/components/Leaderboard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import leaderboardData from "@/data/CurrentLeaderboard.json";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

// Prepare round-wise data
const participants = leaderboardData.models.map(p => ({
  ...p,
  round1_score: p.round1_score || 0,
  round2_score: p.round2_score || 0,
  round3_score: p.round3_score || 0,
  round4_score: p.round4_score || 0,
}));

const roundWise = (round: 1 | 2 | 3 | 4) => {
  const scoreKey = `round${round}_score` as const;
  const timeKey = `round${round}_time` as const;
  return participants
    .filter(p => p[scoreKey] && p[scoreKey] > 0)
    .map(p => ({
      hacker: p.hacker,
      hacker_id: p.hacker_id,
      score: p[scoreKey],
      time_taken: p[timeKey] || 0,
      avatar: p.avatar,
      is_cheating: p.is_cheating,
    }))
    .sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      return a.time_taken - b.time_taken;
    })
    .map((p, idx) => ({ ...p, rank: idx + 1 }));
};

const round1 = roundWise(1);
const round2 = roundWise(2);
const round3 = roundWise(3);
const round4 = roundWise(4);

const LeaderboardPage = () => {
  return (
    <div className="min-h-screen bg-gradient-hero py-12 px-4">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex items-center gap-4">
          <Link to="/" className="inline-flex items-center text-sm text-primary hover:underline">
            <ArrowLeft className="w-4 h-4 mr-1" /> Back Home
          </Link>
        </div>
        <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">Leaderboard Center</h1>
        <p className="text-muted-foreground max-w-2xl">View cumulative and round-wise rankings. Cumulative ranks are based on total score across all rounds (time as tie-breaker). Round tabs show standalone performance.</p>
        <Tabs defaultValue="cumulative" className="w-full">
          <TabsList className="grid grid-cols-5 max-w-2xl">
            <TabsTrigger value="cumulative">Cumulative</TabsTrigger>
            <TabsTrigger value="round1">Round 1</TabsTrigger>
            <TabsTrigger value="round2">Round 2</TabsTrigger>
            <TabsTrigger value="round3">Round 3</TabsTrigger>
            <TabsTrigger value="round4">Round 4</TabsTrigger>
          </TabsList>
          <TabsContent value="cumulative">
            <Leaderboard />
          </TabsContent>
          <TabsContent value="round1">
            <RoundTable title="Round 1" data={round1} />
          </TabsContent>
          <TabsContent value="round2">
            <RoundTable title="Round 2" data={round2} />
          </TabsContent>
          <TabsContent value="round3">
            <RoundTable title="Round 3" data={round3} />
          </TabsContent>
          <TabsContent value="round4">
            <RoundTable title="Round 4" data={round4} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

interface RoundRow {
  rank: number;
  hacker: string;
  hacker_id: number;
  score: number;
  time_taken: number;
  avatar: string;
  is_cheating: boolean;
}

const formatTime = (seconds: number) => {
  if (!seconds) return "0s";
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return m ? `${m}m ${s}s` : `${s}s`;
};

const RoundTable = ({ title, data }: { title: string; data: RoundRow[] }) => (
  <Card className="bg-gradient-card">
    <CardHeader>
      <CardTitle className="flex items-center justify-between">
        <span>{title} Rankings ({data.length})</span>
      </CardTitle>
    </CardHeader>
    <CardContent>
      <div className="space-y-2 max-h-[70vh] overflow-y-auto pr-2">
        {data.map(row => (
          <div key={row.hacker_id} className="flex items-center justify-between rounded-lg border border-border bg-background/40 p-3">
            <div className="flex items-center gap-3">
              <span className="w-8 text-sm font-semibold">{row.rank}</span>
              <div className="w-10 h-10 rounded-full overflow-hidden bg-gradient-primary flex items-center justify-center text-white text-sm font-bold">
                {row.avatar?.startsWith('http') ? (
                  <img src={row.avatar} alt={row.hacker} className="w-full h-full object-cover" />
                ) : (
                  row.hacker.substring(0,2).toUpperCase()
                )}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-medium">{row.hacker}</span>
                  {row.is_cheating && (
                    <Badge variant="destructive" className="text-xs">Flagged</Badge>
                  )}
                </div>
                <div className="text-xs text-muted-foreground">ID: {row.hacker_id}</div>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="text-right">
                <div className="text-lg font-semibold">{row.score}</div>
                <div className="text-xs text-muted-foreground">Score</div>
              </div>
              <Badge variant="outline" className="text-xs">{formatTime(row.time_taken)}</Badge>
            </div>
          </div>
        ))}
        {!data.length && <div className="text-sm text-muted-foreground">No submissions.</div>}
      </div>
    </CardContent>
  </Card>
);

export default LeaderboardPage;
