import { Calendar, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { MatchCard } from '../../components/domain/MatchCard';

const upcomingMatches = [
  {
    id: 'upcoming1',
    homeTeam: { id: 'liverpool', name: 'Liverpool', logo: '' },
    awayTeam: { id: 'city', name: 'Manchester City', logo: '' },
    status: 'scheduled' as const,
    time: '16:30',
    competition: 'Premier League',
  },
  {
    id: 'upcoming2',
    homeTeam: { id: 'atletico', name: 'Atletico Madrid', logo: '' },
    awayTeam: { id: 'sevilla', name: 'Sevilla', logo: '' },
    status: 'scheduled' as const,
    time: '19:00',
    competition: 'La Liga',
  },
  {
    id: 'upcoming3',
    homeTeam: { id: 'juventus', name: 'Juventus', logo: '' },
    awayTeam: { id: 'napoli', name: 'Napoli', logo: '' },
    status: 'scheduled' as const,
    time: '20:45',
    competition: 'Serie A',
  },
];

export function Matches() {
  return (
    <div className="flex flex-col h-full bg-secondary/30">
      <div className="bg-white border-b border-border p-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-lg font-semibold">All Matches</h1>
            <p className="text-sm text-muted-foreground">Browse all fixtures</p>
          </div>
          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
            <Filter size={16} />
          </Button>
        </div>
      </div>

      <div className="flex-1 overflow-auto p-4 space-y-4">
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <Calendar size={16} />
          <span>Tomorrow's Fixtures</span>
        </div>

        {upcomingMatches.map((match) => (
          <MatchCard key={match.id} match={match} />
        ))}

        <div className="text-center py-8">
          <p className="text-sm text-muted-foreground">Load more matches from previous days</p>
          <Button variant="outline" className="mt-2" size="sm">
            Load More
          </Button>
        </div>
      </div>
    </div>
  );
}
