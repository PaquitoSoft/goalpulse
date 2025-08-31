import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface DateSelectorProps {
  selectedDate: Date;
  onDateChange: (date: Date) => void;
}

export function DateSelector({ selectedDate, onDateChange }: DateSelectorProps) {
  const formatDate = (date: Date) => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);

    if (date.toDateString() === today.toDateString()) {
      return 'Today';
    } else if (date.toDateString() === tomorrow.toDateString()) {
      return 'Tomorrow';
    } else if (date.toDateString() === yesterday.toDateString()) {
      return 'Yesterday';
    } else {
      return date.toLocaleDateString('en-US', {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
      });
    }
  };

  const handlePrevDay = () => {
    const prevDay = new Date(selectedDate);
    prevDay.setDate(selectedDate.getDate() - 1);
    onDateChange(prevDay);
  };

  const handleNextDay = () => {
    const nextDay = new Date(selectedDate);
    nextDay.setDate(selectedDate.getDate() + 1);
    onDateChange(nextDay);
  };

  return (
    <div className="flex items-center justify-between bg-white px-4 py-3 border-b border-border">
      <Button variant="ghost" size="sm" onClick={handlePrevDay} className="h-8 w-8 p-0">
        <ChevronLeft size={16} />
      </Button>

      <h2 className="text-base font-semibold">{formatDate(selectedDate)}</h2>

      <Button variant="ghost" size="sm" onClick={handleNextDay} className="h-8 w-8 p-0">
        <ChevronRight size={16} />
      </Button>
    </div>
  );
}
