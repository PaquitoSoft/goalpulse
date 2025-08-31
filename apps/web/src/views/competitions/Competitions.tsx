import { Trophy, Users, Calendar } from 'lucide-react';
import { Card } from '@/components/ui/card';

const competitions = [
  {
    id: 'epl',
    name: 'Premier League',
    country: 'England',
    teams: 20,
    matchday: 15,
    logo: '🇬🇧',
  },
  {
    id: 'laliga',
    name: 'La Liga',
    country: 'Spain',
    teams: 20,
    matchday: 14,
    logo: '🇪🇸',
  },
  {
    id: 'bundesliga',
    name: 'Bundesliga',
    country: 'Germany',
    teams: 18,
    matchday: 12,
    logo: '🇩🇪',
  },
  {
    id: 'seriea',
    name: 'Serie A',
    country: 'Italy',
    teams: 20,
    matchday: 16,
    logo: '🇮🇹',
  },
  {
    id: 'ligue1',
    name: 'Ligue 1',
    country: 'France',
    teams: 20,
    matchday: 13,
    logo: '🇫🇷',
  },
  {
    id: 'ucl',
    name: 'Champions League',
    country: 'Europe',
    teams: 32,
    matchday: 5,
    logo: '🏆',
  },
];

export function Competitions() {
  return (
    <div className="flex flex-col h-full bg-secondary/30">
      <div className="bg-white border-b border-border p-4">
        <h1 className="text-lg font-semibold">Competitions</h1>
        <p className="text-sm text-muted-foreground">Follow your favorite leagues</p>
      </div>

      <div className="flex-1 overflow-auto p-4 space-y-3">
        {competitions.map((competition) => (
          <Card key={competition.id} className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="text-2xl">{competition.logo}</div>
                <div>
                  <h3 className="font-semibold">{competition.name}</h3>
                  <p className="text-sm text-muted-foreground">{competition.country}</p>
                </div>
              </div>
              <Trophy className="text-primary" size={20} />
            </div>

            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-2">
                <Users size={16} className="text-muted-foreground" />
                <span className="text-sm">{competition.teams} teams</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar size={16} className="text-muted-foreground" />
                <span className="text-sm">MD {competition.matchday}</span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
