import { Badge } from '@/components/ui/badge';

interface Team {
  id: string;
  name: string;
  logo: string;
  score?: number;
}

interface Match {
  id: string;
  homeTeam: Team;
  awayTeam: Team;
  status: 'live' | 'finished' | 'scheduled';
  time: string;
  minute?: number;
  competition: string;
}

type TMatchCardProps = {
  match: Match;
};

export function MatchCard({ match }: TMatchCardProps) {
  const getStatusBadge = () => {
    switch (match.status) {
      case 'live':
        return <Badge className="bg-red-500 text-white text-xs px-2 py-1">{match.minute}'</Badge>;
      case 'finished':
        return (
          <Badge variant="secondary" className="text-xs px-2 py-1">
            FT
          </Badge>
        );
      case 'scheduled':
        return <span className="text-sm text-muted-foreground">{match.time}</span>;
    }
  };

  return (
    <div className="bg-white rounded-lg border border-border p-4 mb-3 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs text-muted-foreground uppercase tracking-wide">{match.competition}</span>
        {getStatusBadge()}
      </div>

      <div className="flex items-center justify-between">
        {/* Home Team */}
        <div className="flex items-center space-x-3 flex-1">
          <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
            <span className="text-xs font-medium">{match.homeTeam.name.slice(0, 2).toUpperCase()}</span>
          </div>
          <span className="text-sm font-medium truncate">{match.homeTeam.name}</span>
        </div>

        {/* Score */}
        <div className="flex items-center space-x-4 px-4">
          {match.homeTeam.score !== undefined && match.awayTeam.score !== undefined ? (
            <div className="flex items-center space-x-2">
              <span className="text-xl font-semibold">{match.homeTeam.score}</span>
              <span className="text-muted-foreground">-</span>
              <span className="text-xl font-semibold">{match.awayTeam.score}</span>
            </div>
          ) : (
            <span className="text-sm text-muted-foreground">vs</span>
          )}
        </div>

        {/* Away Team */}
        <div className="flex items-center space-x-3 flex-1 justify-end">
          <span className="text-sm font-medium truncate text-right">{match.awayTeam.name}</span>
          <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
            <span className="text-xs font-medium">{match.awayTeam.name.slice(0, 2).toUpperCase()}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
