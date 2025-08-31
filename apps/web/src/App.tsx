import { useEffect, useState } from 'react';
import { Dashboard } from './views/dashboard/Dashboard';
import { Competitions } from './views/competitions/Competitions';
import { Matches } from './views/matches/Matches';
import { Settings } from './views/settings/Settings';
import { BottomNavigation } from './components/layout/BottomNavigation';
import { isLoggedIn } from './api/auth';
import { LoginView } from './views/login/login-view';

type TAppActiveTab = 'dashboard' | 'competitions' | 'matches' | 'settings';

function App() {
  const [activeTab, setActiveTab] = useState<TAppActiveTab>('dashboard');

  if (!isLoggedIn()) {
    return <LoginView onLogin={() => false} />;
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'competitions':
        return <Competitions />;
      case 'matches':
        return <Matches />;
      case 'settings':
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="h-screen flex flex-col bg-white">
      {/* Main Content */}
      <div className="flex-1 overflow-hidden">{renderContent()}</div>

      {/* Bottom Navigation */}
      <BottomNavigation activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
}

export default App;
