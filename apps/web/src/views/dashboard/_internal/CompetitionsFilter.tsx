import { Check } from 'lucide-react';
// import { Badge } from '@/components/ui/badge';

interface Competition {
  id: string;
  name: string;
  country?: string;
}

type TCompetitionsFilterProps = {
  competitions: Competition[];
  selectedCompetitions: string[];
  onSelectionChange: (competitionIds: string[]) => void;
};

export function CompetitionsFilter({
  competitions,
  selectedCompetitions,
  onSelectionChange,
}: TCompetitionsFilterProps) {
  const toggleCompetition = (competitionId: string) => {
    if (selectedCompetitions.includes(competitionId)) {
      onSelectionChange(selectedCompetitions.filter((id) => id !== competitionId));
    } else {
      onSelectionChange([...selectedCompetitions, competitionId]);
    }
  };

  const selectAll = () => {
    onSelectionChange(competitions.map((c) => c.id));
  };

  const clearAll = () => {
    onSelectionChange([]);
  };

  return (
    <div className="bg-white border-b border-border p-4">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold">Competitions</h3>
        <div className="flex items-center space-x-2">
          <button
            onClick={selectAll}
            className="text-xs text-primary hover:text-primary/80 transition-colors"
          >
            All
          </button>
          <span className="text-xs text-muted-foreground">|</span>
          <button
            onClick={clearAll}
            className="text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            Clear
          </button>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {competitions.map((competition) => {
          const isSelected = selectedCompetitions.includes(competition.id);

          return (
            <button
              key={competition.id}
              onClick={() => toggleCompetition(competition.id)}
              className={`inline-flex items-center space-x-1 px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                isSelected
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary text-secondary-foreground hover:bg-primary/10 hover:text-primary'
              }`}
            >
              {isSelected && <Check size={12} />}
              <span>{competition.name}</span>
            </button>
          );
        })}
      </div>

      {selectedCompetitions.length > 0 && (
        <div className="mt-3 pt-3 border-t border-border">
          <p className="text-xs text-muted-foreground">
            {selectedCompetitions.length} competition{selectedCompetitions.length !== 1 ? 's' : ''} selected
          </p>
        </div>
      )}
    </div>
  );
}
