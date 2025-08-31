import { useState } from 'react';
import { Button } from './components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <div className="container mx-auto p-8">
        <Card className="max-w-md mx-auto">
          <CardHeader>
            <CardTitle className="text-center">GoalPulse</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-center text-muted-foreground">
              Your React PWA is ready! This is a placeholder component.
            </p>
            <div className="flex flex-col items-center space-y-4">
              <Button onClick={() => setCount((count) => count + 1)} className="w-full">
                Count is {count}
              </Button>
              <p className="text-sm text-muted-foreground">Click the button to test React state management</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default App;
