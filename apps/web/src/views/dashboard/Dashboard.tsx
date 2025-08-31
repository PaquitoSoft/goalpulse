import { useState } from 'react';
import { MatchCard } from '@/views/matches/MatchCard';
import { DateSelector } from './DateSelector';
// TODO: Where this component belongs to?
import { CompetitionFilter } from '../competitions/CompetitionFilter';
import { RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Mock data
const competitions = [
  { id: 'epl', name: 'Premier League', country: 'England' },
  { id: 'laliga', name: 'La Liga', country: 'Spain' },
  { id: 'bundesliga', name: 'Bundesliga', country: 'Germany' },
  { id: 'seriea', name: 'Serie A', country: 'Italy' },
  { id: 'ligue1', name: 'Ligue 1', country: 'France' },
  { id: 'ucl', name: 'Champions League' },
];

const mockMatches = [
  {
    id: '1',
    homeTeam: { id: 'arsenal', name: 'Arsenal', logo: '', score: 2 },
    awayTeam: { id: 'chelsea', name: 'Chelsea', logo: '', score: 1 },
    status: 'live' as const,
    time: '15:00',
    minute: 67,
    competition: 'Premier League',
  },
  {
    id: '2',
    homeTeam: { id: 'madrid', name: 'Real Madrid', logo: '', score: 3 },
    awayTeam: { id: 'barcelona', name: 'Barcelona', logo: '', score: 2 },
    status: 'finished' as const,
    time: '20:00',
    competition: 'La Liga',
  },
  {
    id: '3',
    homeTeam: { id: 'bayern', name: 'Bayern Munich', logo: '' },
    awayTeam: { id: 'dortmund', name: 'Borussia Dortmund', logo: '' },
    status: 'scheduled' as const,
    time: '18:30',
    competition: 'Bundesliga',
  },
  {
    id: '4',
    homeTeam: { id: 'milan', name: 'AC Milan', logo: '', score: 1 },
    awayTeam: { id: 'inter', name: 'Inter Milan', logo: '', score: 1 },
    status: 'live' as const,
    time: '17:00',
    minute: 45,
    competition: 'Serie A',
  },
  {
    id: '5',
    homeTeam: { id: 'psg', name: 'Paris Saint-Germain', logo: '' },
    awayTeam: { id: 'marseille', name: 'Marseille', logo: '' },
    status: 'scheduled' as const,
    time: '21:00',
    competition: 'Ligue 1',
  },
];

export function Dashboard() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedCompetitions, setSelectedCompetitions] = useState<string[]>(competitions.map((c) => c.id));
  const [isRefreshing, setIsRefreshing] = useState(false);

  const filteredMatches = mockMatches.filter(
    (match) =>
      selectedCompetitions.length === 0 ||
      selectedCompetitions.some(
        (compId) => competitions.find((comp) => comp.id === compId)?.name === match.competition
      )
  );

  const handleRefresh = async () => {
    setIsRefreshing(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsRefreshing(false);
  };

  const liveMatches = filteredMatches.filter((m) => m.status === 'live');
  const finishedMatches = filteredMatches.filter((m) => m.status === 'finished');
  const scheduledMatches = filteredMatches.filter((m) => m.status === 'scheduled');

  return (
    <div className="flex flex-col h-full bg-secondary/30">
      <DateSelector selectedDate={selectedDate} onDateChange={setSelectedDate} />

      <CompetitionFilter
        competitions={competitions}
        selectedCompetitions={selectedCompetitions}
        onSelectionChange={setSelectedCompetitions}
      />

      <div className="flex-1 overflow-auto">
        <div className="p-4 space-y-4">
          {/* Header with refresh */}
          <div className="flex items-center justify-between">
            <h1 className="text-lg font-semibold">Live Scores</h1>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleRefresh}
              disabled={isRefreshing}
              className="h-8 w-8 p-0"
            >
              <RefreshCw size={16} className={isRefreshing ? 'animate-spin' : ''} />
            </Button>
          </div>

          {/* Live Matches */}
          {liveMatches.length > 0 && (
            <div>
              <h2 className="text-sm font-semibold text-primary mb-3 flex items-center">
                <div className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></div>
                Live ({liveMatches.length})
              </h2>
              {liveMatches.map((match) => (
                <MatchCard key={match.id} match={match} />
              ))}
            </div>
          )}

          {/* Finished Matches */}
          {finishedMatches.length > 0 && (
            <div>
              <h2 className="text-sm font-semibold text-muted-foreground mb-3">
                Finished ({finishedMatches.length})
              </h2>
              {finishedMatches.map((match) => (
                <MatchCard key={match.id} match={match} />
              ))}
            </div>
          )}

          {/* Scheduled Matches */}
          {scheduledMatches.length > 0 && (
            <div>
              <h2 className="text-sm font-semibold text-muted-foreground mb-3">
                Upcoming ({scheduledMatches.length})
              </h2>
              {scheduledMatches.map((match) => (
                <MatchCard key={match.id} match={match} />
              ))}
            </div>
          )}

          {filteredMatches.length === 0 && (
            <div className="text-center py-8">
              <p className="text-muted-foreground">No matches found for the selected criteria.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
