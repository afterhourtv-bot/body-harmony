import type { AppSection } from '../types';
import { MapPin, Palette, Activity, Users, Crosshair, BookOpen, ArrowRight } from 'lucide-react';

interface HomePageProps {
  onNavigate: (section: AppSection) => void;
}

const features = [
  {
    section: 'bodymap' as AppSection,
    icon: MapPin,
    title: 'Mapa Corporal',
    description: 'Explora cada zona del cuerpo con guías detalladas sobre músculos, piel, dolor y estilos recomendados.',
  },
  {
    section: 'skintone' as AppSection,
    icon: Palette,
    title: 'Piel & Color',
    description: 'Analiza tonos de piel y descubre qué colores de tinta funcionan mejor para cada cliente.',
  },
  {
    section: 'anatomy' as AppSection,
    icon: Activity,
    title: 'Anatomía & Flujo',
    description: 'Entiende cómo los músculos y el movimiento afectan tus diseños para lograr armonía perfecta.',
  },
  {
    section: 'clients' as AppSection,
    icon: Users,
    title: 'Clientes',
    description: 'Gestiona perfiles de clientes con sus características únicas de piel y tatuajes existentes.',
  },
  {
    section: 'simulator' as AppSection,
    icon: Crosshair,
    title: 'Simulador',
    description: 'Planifica la colocación de tu diseño con guías de flujo y consideraciones anatómicas.',
  },
  {
    section: 'principles' as AppSection,
    icon: BookOpen,
    title: 'Principios de Flujo',
    description: 'Aprende los principios fundamentales para hacer que el arte fluya naturalmente con el cuerpo.',
  },
];

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="home-page">
      <header className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Body <span className="highlight">Harmony</span>
          </h1>
          <p className="hero-subtitle">
            El arte del tatuaje que fluye con el cuerpo
          </p>
          <p className="hero-description">
            Cada cuerpo es un lienzo único. Cada curva, cada músculo, cada tono de piel
            cuenta una historia. <strong>Body Harmony</strong> te ayuda a crear tatuajes que
            no solo se colocan <em>sobre</em> el cuerpo — se convierten en <em>parte</em> de él.
          </p>
          <button className="cta-button" onClick={() => onNavigate('bodymap')}>
            Explorar el Mapa Corporal
            <ArrowRight size={18} />
          </button>
        </div>
        <div className="hero-visual">
          <svg viewBox="0 0 300 400" className="hero-body-outline">
            <defs>
              <linearGradient id="bodyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="var(--accent-primary)" stopOpacity="0.6" />
                <stop offset="100%" stopColor="var(--accent-secondary)" stopOpacity="0.3" />
              </linearGradient>
            </defs>
            {/* Head */}
            <ellipse cx="150" cy="45" rx="25" ry="30" fill="none" stroke="url(#bodyGradient)" strokeWidth="1.5" />
            {/* Neck */}
            <line x1="150" y1="75" x2="150" y2="90" stroke="url(#bodyGradient)" strokeWidth="1.5" />
            {/* Shoulders */}
            <path d="M 150,90 Q 120,85 100,100" fill="none" stroke="url(#bodyGradient)" strokeWidth="1.5" />
            <path d="M 150,90 Q 180,85 200,100" fill="none" stroke="url(#bodyGradient)" strokeWidth="1.5" />
            {/* Torso */}
            <path d="M 100,100 Q 95,140 100,180 Q 110,200 120,200" fill="none" stroke="url(#bodyGradient)" strokeWidth="1.5" />
            <path d="M 200,100 Q 205,140 200,180 Q 190,200 180,200" fill="none" stroke="url(#bodyGradient)" strokeWidth="1.5" />
            {/* Arms */}
            <path d="M 100,100 Q 80,130 70,170 Q 65,200 60,230" fill="none" stroke="url(#bodyGradient)" strokeWidth="1.5" />
            <path d="M 200,100 Q 220,130 230,170 Q 235,200 240,230" fill="none" stroke="url(#bodyGradient)" strokeWidth="1.5" />
            {/* Hands */}
            <path d="M 60,230 Q 55,240 52,250" fill="none" stroke="url(#bodyGradient)" strokeWidth="1.5" />
            <path d="M 240,230 Q 245,240 248,250" fill="none" stroke="url(#bodyGradient)" strokeWidth="1.5" />
            {/* Legs */}
            <path d="M 120,200 Q 115,250 110,300 Q 108,340 105,370" fill="none" stroke="url(#bodyGradient)" strokeWidth="1.5" />
            <path d="M 140,200 Q 135,250 130,300 Q 128,340 125,370" fill="none" stroke="url(#bodyGradient)" strokeWidth="1.5" />
            <path d="M 160,200 Q 165,250 170,300 Q 172,340 175,370" fill="none" stroke="url(#bodyGradient)" strokeWidth="1.5" />
            <path d="M 180,200 Q 185,250 190,300 Q 192,340 195,370" fill="none" stroke="url(#bodyGradient)" strokeWidth="1.5" />
            {/* Flow lines */}
            <path d="M 90,120 Q 110,150 95,190" fill="none" stroke="var(--accent-primary)" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.4" />
            <path d="M 210,120 Q 190,150 205,190" fill="none" stroke="var(--accent-primary)" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.4" />
            <path d="M 150,100 Q 145,140 150,180" fill="none" stroke="var(--accent-secondary)" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.4" />
            {/* Dots on key points */}
            <circle cx="150" cy="90" r="3" fill="var(--accent-primary)" opacity="0.6" />
            <circle cx="100" cy="100" r="3" fill="var(--accent-primary)" opacity="0.6" />
            <circle cx="200" cy="100" r="3" fill="var(--accent-primary)" opacity="0.6" />
            <circle cx="150" cy="140" r="3" fill="var(--accent-secondary)" opacity="0.6" />
            <circle cx="120" cy="200" r="3" fill="var(--accent-primary)" opacity="0.6" />
            <circle cx="180" cy="200" r="3" fill="var(--accent-primary)" opacity="0.6" />
          </svg>
        </div>
      </header>

      <section className="features-grid">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <button
              key={feature.section}
              className="feature-card"
              onClick={() => onNavigate(feature.section)}
            >
              <div className="feature-icon">
                <Icon size={28} />
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
              <span className="feature-link">
                Explorar <ArrowRight size={14} />
              </span>
            </button>
          );
        })}
      </section>

      <section className="philosophy">
        <h2>La Filosofía</h2>
        <div className="philosophy-grid">
          <div className="philosophy-card">
            <span className="philosophy-number">01</span>
            <h3>El cuerpo no es un lienzo plano</h3>
            <p>
              A diferencia del papel, el cuerpo tiene curvas, pliegues, músculos y huesos.
              Un diseño exitoso abraza esta tridimensionalidad en lugar de ignorarla.
            </p>
          </div>
          <div className="philosophy-card">
            <span className="philosophy-number">02</span>
            <h3>El movimiento es parte del diseño</h3>
            <p>
              Cuando el brazo se flexiona, cuando el torso gira, cuando la pierna se estira —
              tu tatuaje cobra vida. Diseña para el cuerpo en movimiento.
            </p>
          </div>
          <div className="philosophy-card">
            <span className="philosophy-number">03</span>
            <h3>La piel es tu medio</h3>
            <p>
              Cada tono de piel interactúa diferente con la tinta. El grosor, la elasticidad,
              y la textura varían en cada parte del cuerpo y cada persona.
            </p>
          </div>
          <div className="philosophy-card">
            <span className="philosophy-number">04</span>
            <h3>El tiempo es una dimensión</h3>
            <p>
              Los tatuajes envejecen con la persona. Un gran artista diseña no solo para hoy,
              sino para cómo se verá en 10, 20 y 30 años.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
