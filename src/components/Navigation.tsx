import type { AppSection } from '../types';
import {
  Home,
  MapPin,
  Palette,
  Activity,
  Users,
  Crosshair,
  BookOpen,
} from 'lucide-react';

interface NavigationProps {
  activeSection: AppSection;
  onNavigate: (section: AppSection) => void;
}

const navItems: { id: AppSection; label: string; icon: typeof Home }[] = [
  { id: 'home', label: 'Inicio', icon: Home },
  { id: 'bodymap', label: 'Mapa Corporal', icon: MapPin },
  { id: 'skintone', label: 'Piel & Color', icon: Palette },
  { id: 'anatomy', label: 'Anatomía', icon: Activity },
  { id: 'clients', label: 'Clientes', icon: Users },
  { id: 'simulator', label: 'Simulador', icon: Crosshair },
  { id: 'principles', label: 'Principios', icon: BookOpen },
];

export default function Navigation({ activeSection, onNavigate }: NavigationProps) {
  return (
    <nav className="nav-sidebar">
      <div className="nav-brand">
        <div className="brand-icon">BH</div>
        <span className="brand-text">Body Harmony</span>
      </div>
      <ul className="nav-list">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <li key={item.id}>
              <button
                className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
                onClick={() => onNavigate(item.id)}
              >
                <Icon size={20} />
                <span>{item.label}</span>
              </button>
            </li>
          );
        })}
      </ul>
      <div className="nav-footer">
        <p className="nav-footer-text">Para artistas del tatuaje</p>
      </div>
    </nav>
  );
}
