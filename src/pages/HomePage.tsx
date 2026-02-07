import { useEffect, useRef } from 'react';
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

function AnimatedBody() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    // Animate the flow paths with a drawing effect
    const svg = svgRef.current;
    if (!svg) return;
    const flowPaths = svg.querySelectorAll('.flow-path');
    flowPaths.forEach((path) => {
      const el = path as SVGPathElement;
      const length = el.getTotalLength();
      el.style.strokeDasharray = `${length}`;
      el.style.strokeDashoffset = `${length}`;
    });
  }, []);

  return (
    <svg ref={svgRef} viewBox="0 0 200 440" className="hero-body-svg">
      <defs>
        <linearGradient id="skinGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#c792ea" stopOpacity="0.5" />
          <stop offset="50%" stopColor="#e8b4b8" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#c792ea" stopOpacity="0.2" />
        </linearGradient>
        <radialGradient id="pulseGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#c792ea" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#c792ea" stopOpacity="0" />
        </radialGradient>
        <filter id="softGlow">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Anatomical body - front view, realistic proportions */}
      <g className="body-structure">
        {/* Head */}
        <ellipse cx="100" cy="38" rx="18" ry="22" className="body-line" />
        {/* Jaw detail */}
        <path d="M 85,48 Q 90,58 100,60 Q 110,58 115,48" className="body-line-detail" />

        {/* Neck - with sternocleidomastoid hints */}
        <path d="M 92,58 L 90,75" className="body-line" />
        <path d="M 108,58 L 110,75" className="body-line" />
        <path d="M 95,60 Q 100,68 105,60" className="body-line-detail" />

        {/* Shoulders - trapezius curve */}
        <path d="M 90,75 Q 75,72 58,80 Q 48,85 42,92" className="body-line" />
        <path d="M 110,75 Q 125,72 142,80 Q 152,85 158,92" className="body-line" />

        {/* Clavicle */}
        <path d="M 90,76 Q 78,74 65,78" className="body-line-detail" />
        <path d="M 110,76 Q 122,74 135,78" className="body-line-detail" />

        {/* Torso - left side */}
        <path d="M 70,82 Q 66,100 65,120 Q 64,145 67,165 Q 70,180 75,192 Q 78,198 82,202" className="body-line" />
        {/* Torso - right side */}
        <path d="M 130,82 Q 134,100 135,120 Q 136,145 133,165 Q 130,180 125,192 Q 122,198 118,202" className="body-line" />

        {/* Chest muscles - pectoral lines */}
        <path d="M 75,88 Q 85,94 100,96 Q 115,94 125,88" className="body-line-detail" />
        <path d="M 78,96 Q 88,100 100,101" className="body-line-detail" />
        <path d="M 122,96 Q 112,100 100,101" className="body-line-detail" />

        {/* Abs - subtle midline */}
        <path d="M 100,100 L 100,195" className="body-line-detail abs-line" />
        {/* Oblique hints */}
        <path d="M 72,155 Q 80,158 88,155" className="body-line-detail" />
        <path d="M 128,155 Q 120,158 112,155" className="body-line-detail" />

        {/* Hip / pelvis */}
        <path d="M 82,202 Q 90,208 100,210 Q 110,208 118,202" className="body-line" />

        {/* Left arm */}
        <path d="M 42,92 Q 36,110 32,130 Q 30,145 30,155" className="body-line" />
        <path d="M 58,85 Q 50,105 47,125 Q 45,140 44,155" className="body-line" />
        {/* Left forearm */}
        <path d="M 30,155 Q 27,175 24,195 Q 22,210 20,220" className="body-line" />
        <path d="M 44,155 Q 40,175 37,195 Q 35,210 33,220" className="body-line" />
        {/* Left hand */}
        <path d="M 20,220 Q 18,228 17,232 Q 19,236 22,234" className="body-line" />
        <path d="M 33,220 Q 30,228 28,232" className="body-line" />

        {/* Right arm */}
        <path d="M 158,92 Q 164,110 168,130 Q 170,145 170,155" className="body-line" />
        <path d="M 142,85 Q 150,105 153,125 Q 155,140 156,155" className="body-line" />
        {/* Right forearm */}
        <path d="M 170,155 Q 173,175 176,195 Q 178,210 180,220" className="body-line" />
        <path d="M 156,155 Q 160,175 163,195 Q 165,210 167,220" className="body-line" />
        {/* Right hand */}
        <path d="M 180,220 Q 182,228 183,232 Q 181,236 178,234" className="body-line" />
        <path d="M 167,220 Q 170,228 172,232" className="body-line" />

        {/* Left leg */}
        <path d="M 82,202 Q 78,225 76,250 Q 74,275 73,295 Q 72,310 72,320" className="body-line" />
        <path d="M 100,210 Q 96,230 94,250 Q 92,275 91,295 Q 90,310 89,320" className="body-line" />
        {/* Left knee detail */}
        <path d="M 74,295 Q 80,298 88,295" className="body-line-detail" />
        {/* Left calf */}
        <path d="M 72,320 Q 70,345 69,365 Q 68,380 67,395 Q 66,405 65,410" className="body-line" />
        <path d="M 89,320 Q 87,345 85,365 Q 83,380 82,395 Q 81,405 80,410" className="body-line" />
        {/* Calf muscle shape */}
        <path d="M 72,325 Q 68,340 70,355" className="body-line-detail" />
        {/* Left foot */}
        <path d="M 65,410 Q 60,415 58,418 Q 60,420 68,420 Q 76,420 80,418 L 80,410" className="body-line" />

        {/* Right leg */}
        <path d="M 118,202 Q 122,225 124,250 Q 126,275 127,295 Q 128,310 128,320" className="body-line" />
        <path d="M 100,210 Q 104,230 106,250 Q 108,275 109,295 Q 110,310 111,320" className="body-line" />
        {/* Right knee detail */}
        <path d="M 112,295 Q 120,298 126,295" className="body-line-detail" />
        {/* Right calf */}
        <path d="M 128,320 Q 130,345 131,365 Q 132,380 133,395 Q 134,405 135,410" className="body-line" />
        <path d="M 111,320 Q 113,345 115,365 Q 117,380 118,395 Q 119,405 120,410" className="body-line" />
        {/* Calf muscle shape */}
        <path d="M 128,325 Q 132,340 130,355" className="body-line-detail" />
        {/* Right foot */}
        <path d="M 135,410 Q 140,415 142,418 Q 140,420 132,420 Q 124,420 120,418 L 120,410" className="body-line" />
      </g>

      {/* Breathing chest animation - subtle expansion */}
      <ellipse cx="100" cy="108" rx="28" ry="16" className="breathing-zone" />

      {/* Pulse points - anatomical arterial points */}
      <circle cx="100" cy="42" r="2" className="pulse-point" style={{ animationDelay: '0s' }} />
      <circle cx="92" cy="75" r="1.5" className="pulse-point" style={{ animationDelay: '0.3s' }} />
      <circle cx="108" cy="75" r="1.5" className="pulse-point" style={{ animationDelay: '0.3s' }} />
      <circle cx="100" cy="140" r="2" className="pulse-point" style={{ animationDelay: '0.6s' }} />
      <circle cx="36" cy="140" r="1.5" className="pulse-point" style={{ animationDelay: '0.5s' }} />
      <circle cx="164" cy="140" r="1.5" className="pulse-point" style={{ animationDelay: '0.5s' }} />
      <circle cx="80" cy="300" r="1.5" className="pulse-point" style={{ animationDelay: '0.8s' }} />
      <circle cx="120" cy="300" r="1.5" className="pulse-point" style={{ animationDelay: '0.8s' }} />

      {/* Flow lines - ink flowing through the body contours */}
      <path
        d="M 100,60 Q 95,80 92,100 Q 88,130 85,160 Q 82,185 82,202"
        className="flow-path flow-1"
      />
      <path
        d="M 100,60 Q 105,80 108,100 Q 112,130 115,160 Q 118,185 118,202"
        className="flow-path flow-2"
      />
      <path
        d="M 58,85 Q 48,110 38,140 Q 32,160 28,185"
        className="flow-path flow-3"
      />
      <path
        d="M 142,85 Q 152,110 162,140 Q 168,160 172,185"
        className="flow-path flow-4"
      />
      <path
        d="M 85,210 Q 80,250 76,290 Q 73,320 70,360"
        className="flow-path flow-5"
      />
      <path
        d="M 115,210 Q 120,250 124,290 Q 127,320 130,360"
        className="flow-path flow-6"
      />

      {/* Tattoo placement zones - subtle highlight areas */}
      <circle cx="50" cy="92" r="10" className="zone-hint" style={{ animationDelay: '1s' }} />
      <circle cx="150" cy="92" r="10" className="zone-hint" style={{ animationDelay: '1.5s' }} />
      <circle cx="100" cy="92" r="14" className="zone-hint" style={{ animationDelay: '2s' }} />
      <circle cx="37" cy="140" r="8" className="zone-hint" style={{ animationDelay: '2.5s' }} />
      <circle cx="163" cy="140" r="8" className="zone-hint" style={{ animationDelay: '3s' }} />
      <circle cx="80" cy="260" r="10" className="zone-hint" style={{ animationDelay: '3.5s' }} />
      <circle cx="120" cy="260" r="10" className="zone-hint" style={{ animationDelay: '4s' }} />
    </svg>
  );
}

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="home-page">
      <header className="hero">
        <div className="hero-content anim-fade-up">
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
          <AnimatedBody />
        </div>
      </header>

      <section className="features-grid">
        {features.map((feature, i) => {
          const Icon = feature.icon;
          return (
            <button
              key={feature.section}
              className="feature-card anim-fade-up"
              style={{ animationDelay: `${0.1 * i}s` }}
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
          {[
            { n: '01', t: 'El cuerpo no es un lienzo plano', p: 'A diferencia del papel, el cuerpo tiene curvas, pliegues, músculos y huesos. Un diseño exitoso abraza esta tridimensionalidad en lugar de ignorarla.' },
            { n: '02', t: 'El movimiento es parte del diseño', p: 'Cuando el brazo se flexiona, cuando el torso gira, cuando la pierna se estira — tu tatuaje cobra vida. Diseña para el cuerpo en movimiento.' },
            { n: '03', t: 'La piel es tu medio', p: 'Cada tono de piel interactúa diferente con la tinta. El grosor, la elasticidad, y la textura varían en cada parte del cuerpo y cada persona.' },
            { n: '04', t: 'El tiempo es una dimensión', p: 'Los tatuajes envejecen con la persona. Un gran artista diseña no solo para hoy, sino para cómo se verá en 10, 20 y 30 años.' },
          ].map((card, i) => (
            <div key={card.n} className="philosophy-card anim-fade-up" style={{ animationDelay: `${0.15 * i}s` }}>
              <span className="philosophy-number">{card.n}</span>
              <h3>{card.t}</h3>
              <p>{card.p}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
