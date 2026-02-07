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

interface MobileNavProps {
  activeSection: AppSection;
  onNavigate: (section: AppSection) => void;
}

const navItems: { id: AppSection; label: string; icon: typeof Home }[] = [
  { id: 'home', label: 'Inicio', icon: Home },
  { id: 'bodymap', label: 'Mapa', icon: MapPin },
  { id: 'skintone', label: 'Color', icon: Palette },
  { id: 'anatomy', label: 'Anatomía', icon: Activity },
  { id: 'clients', label: 'Clientes', icon: Users },
  { id: 'simulator', label: 'Simular', icon: Crosshair },
  { id: 'principles', label: 'Guía', icon: BookOpen },
];

export default function MobileNav({ activeSection, onNavigate }: MobileNavProps) {
  return (
    <nav className="mobile-nav">
      {navItems.map((item) => {
        const Icon = item.icon;
        return (
          <button
            key={item.id}
            className={`mobile-nav-item ${activeSection === item.id ? 'active' : ''}`}
            onClick={() => onNavigate(item.id)}
          >
            <Icon size={18} />
            <span>{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
}
