import Leaderboard from "@/components/Leaderboard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import leaderboardData from "@/data/Leaderboard_Rounds_3_8.json";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

// Prepare round-wise data
const participants = leaderboardData.models.map(p => ({
  ...p,
  round3_score: (p as any).round3_score || 0,
  round4_score: (p as any).round4_score || 0,
  round5_score: (p as any).round5_score || 0,
  round6_score: (p as any).round6_score || 0,
  round7_score: (p as any).round7_score || 0,
  round8_score: (p as any).round8_score || 0,
  is_cheating: (p as any).is_cheating || false,
}));

const roundWise = (round: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8) => {
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
      is_cheating: p.is_cheating || false,
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
const round5 = roundWise(5);
const round6 = roundWise(6);
const round7 = roundWise(7);
const round8 = roundWise(8);

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
          <TabsList className="grid grid-cols-7 max-w-4xl">
            <TabsTrigger value="cumulative">Cumulative</TabsTrigger>
            <TabsTrigger value="round3">Round 3</TabsTrigger>
            <TabsTrigger value="round4">Round 4</TabsTrigger>
            <TabsTrigger value="round5">Round 5</TabsTrigger>
            <TabsTrigger value="round6">Round 6</TabsTrigger>
            <TabsTrigger value="round7">Round 7</TabsTrigger>
            <TabsTrigger value="round8">Round 8</TabsTrigger>
          </TabsList>
          <TabsContent value="cumulative">
            <Leaderboard />
          </TabsContent>
          <TabsContent value="round3">
            <RoundTable title="Round 3" data={round3} />
          </TabsContent>
          <TabsContent value="round4">
            <RoundTable title="Round 4" data={round4} />
          </TabsContent>
          <TabsContent value="round5">
            <RoundTable title="Round 5" data={round5} />
          </TabsContent>
          <TabsContent value="round6">
            <RoundTable title="Round 6" data={round6} />
          </TabsContent>
          <TabsContent value="round7">
            <RoundTable title="Round 7" data={round7} />
          </TabsContent>
          <TabsContent value="round8">
            <RoundTable title="Round 8" data={round8} />
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
