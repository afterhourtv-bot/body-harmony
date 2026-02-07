import { useState } from 'react';
import type { AppSection } from './types';
import Navigation from './components/Navigation';
import MobileNav from './components/MobileNav';
import HomePage from './pages/HomePage';
import BodyMapPage from './pages/BodyMapPage';
import SkinTonePage from './pages/SkinTonePage';
import AnatomyPage from './pages/AnatomyPage';
import ClientsPage from './pages/ClientsPage';
import SimulatorPage from './pages/SimulatorPage';
import PrinciplesPage from './pages/PrinciplesPage';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState<AppSection>('home');

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <HomePage onNavigate={setActiveSection} />;
      case 'bodymap':
        return <BodyMapPage />;
      case 'skintone':
        return <SkinTonePage />;
      case 'anatomy':
        return <AnatomyPage />;
      case 'clients':
        return <ClientsPage />;
      case 'simulator':
        return <SimulatorPage />;
      case 'principles':
        return <PrinciplesPage />;
      default:
        return <HomePage onNavigate={setActiveSection} />;
    }
  };

  return (
    <div className="app">
      <Navigation activeSection={activeSection} onNavigate={setActiveSection} />
      <main className="main-content">
        {renderSection()}
      </main>
      <MobileNav activeSection={activeSection} onNavigate={setActiveSection} />
    </div>
  );
}

export default App;
