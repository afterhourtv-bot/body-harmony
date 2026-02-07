import { useState } from 'react';
import { bodyZones } from '../data/bodyZones';
import { Dumbbell, TrendingUp, RotateCcw, ArrowDown, ArrowUp, ArrowRight as ArrowRightIcon, Minus } from 'lucide-react';

interface MuscleGroup {
  name: string;
  zones: string[];
  movementDescription: string;
  tattooImpact: string;
  flexDemo: string;
  highlightPaths: string[];
  highlightColor: string;
}

const muscleGroups: MuscleGroup[] = [
  {
    name: 'Deltoides',
    zones: ['shoulder', 'upper-arm-outer'],
    movementDescription: 'Abducción, flexión y extensión del brazo',
    tattooImpact: 'Los diseños se comprimen con la abducción del brazo. La parte redonda del deltoides distorsiona círculos en óvalos.',
    flexDemo: 'Pide al cliente que levante el brazo lateralmente para ver la máxima distorsión.',
    highlightPaths: [
      'M 190,72 Q 168,68 145,76 Q 126,84 114,94 Q 108,100 106,108 Q 104,118 106,128 Q 118,130 135,118 Q 148,106 155,92 Q 165,80 190,72 Z',
    ],
    highlightColor: '#ef4444',
  },
  {
    name: 'Bíceps / Tríceps',
    zones: ['upper-arm-outer', 'upper-arm-inner'],
    movementDescription: 'Flexión y extensión del codo',
    tattooImpact: 'La contracción del bíceps acorta los diseños verticales hasta un 15%. Los diseños envolventes cambian de perspectiva con la rotación.',
    flexDemo: 'Haz que el cliente flexione el brazo: observa cómo se acorta el bíceps y se estira el tríceps.',
    highlightPaths: [
      'M 106,128 Q 100,145 96,165 Q 93,178 92,188 Q 110,192 126,178 Q 130,160 134,140 Q 136,128 138,118 Q 125,120 112,126 Z',
    ],
    highlightColor: '#f97316',
  },
  {
    name: 'Pectorales',
    zones: ['chest'],
    movementDescription: 'Aducción y rotación interna del brazo',
    tattooImpact: 'Los diseños sobre el pectoral se mueven con la aducción del brazo. Importante para chest pieces simétricos.',
    flexDemo: 'El cliente junta las palmas frente al pecho para ver la contracción máxima del pectoral.',
    highlightPaths: [
      'M 155,88 Q 170,96 200,98 Q 230,96 245,88 Q 250,100 248,115 Q 238,125 200,128 Q 162,125 152,115 Q 150,100 155,88 Z',
    ],
    highlightColor: '#eab308',
  },
  {
    name: 'Abdominales / Oblicuos',
    zones: ['abdomen', 'ribs'],
    movementDescription: 'Flexión del tronco, rotación lateral',
    tattooImpact: 'La respiración mueve constantemente esta zona. La flexión del trunko puede acortar diseños hasta un 20%. Los cambios de peso tienen máximo impacto aquí.',
    flexDemo: 'Observa la zona mientras el cliente respira profundamente y se inclina hacia los lados.',
    highlightPaths: [
      'M 158,128 Q 172,134 200,136 Q 228,134 242,128 Q 248,150 246,175 Q 238,195 200,198 Q 162,195 152,175 Q 150,150 158,128 Z',
      'M 143,118 Q 140,138 140,158 Q 142,175 148,185 Q 155,178 158,160 Q 160,140 158,125 Z',
      'M 257,118 Q 260,138 260,158 Q 258,175 252,185 Q 245,178 242,160 Q 240,140 242,125 Z',
    ],
    highlightColor: '#22c55e',
  },
  {
    name: 'Cuádriceps',
    zones: ['thigh-front'],
    movementDescription: 'Extensión de la rodilla, flexión de cadera',
    tattooImpact: 'Al sentarse, la cara frontal se comprime y la piel se tensa lateralmente. Los diseños deben considerar la vista sentado vs. de pie.',
    flexDemo: 'El cliente se sienta y se para alternadamente para observar los cambios en la superficie.',
    highlightPaths: [
      'M 165,218 Q 158,248 156,278 Q 154,305 154,328 Q 170,335 186,328 Q 188,305 190,278 Q 192,250 192,225 Q 182,220 170,218 Z',
    ],
    highlightColor: '#3b82f6',
  },
  {
    name: 'Gastrocnemio',
    zones: ['calf'],
    movementDescription: 'Plantiflexión del tobillo',
    tattooImpact: 'La contracción al caminar crea un efecto de "bombeo" visual. La forma de diamante del gastrocnemio se pronuncia al ponerse de puntas.',
    flexDemo: 'El cliente se pone de puntas para ver la contracción máxima del gemelo.',
    highlightPaths: [
      'M 152,348 Q 148,370 148,395 Q 150,420 155,440 Q 168,445 178,440 Q 180,420 180,395 Q 180,370 176,350 Q 166,345 155,348 Z',
    ],
    highlightColor: '#8b5cf6',
  },
  {
    name: 'Trapecio / Dorsal',
    zones: ['back-upper', 'back-lower'],
    movementDescription: 'Retracción escapular, extensión de columna',
    tattooImpact: 'Los omóplatos se mueven significativamente. Los diseños entre escápulas se distorsionan al sacar el pecho. La espalda baja se comprime al extenderse.',
    flexDemo: 'El cliente junta los omóplatos hacia atrás para ver el movimiento de la espalda superior.',
    highlightPaths: [
      'M 190,72 Q 200,68 210,72 L 215,85 Q 235,78 252,82 Q 255,95 252,115 Q 242,130 200,135 Q 158,130 148,115 Q 145,95 148,82 Q 165,78 185,85 Z',
      'M 158,138 Q 172,145 200,148 Q 228,145 242,138 Q 248,158 245,180 Q 235,195 200,198 Q 165,195 155,180 Q 152,158 158,138 Z',
    ],
    highlightColor: '#ec4899',
  }
];

function AnatomyBodySVG({ selectedMuscle }: { selectedMuscle: MuscleGroup | null }) {
  return (
    <svg viewBox="0 0 400 520" className="anatomy-body-svg">
      <defs>
        <filter id="muscleGlow">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Body outline */}
      <g fill="none" stroke="var(--text-secondary)" strokeWidth="1.2">
        {/* Head */}
        <ellipse cx="200" cy="28" rx="20" ry="24" opacity="0.3" />
        <path d="M 183,40 Q 192,55 200,57 Q 208,55 217,40" opacity="0.2" strokeWidth="0.8" />
        {/* Neck */}
        <path d="M 192,55 L 190,72" opacity="0.3" />
        <path d="M 208,55 L 210,72" opacity="0.3" />
        {/* Shoulders */}
        <path d="M 190,72 Q 168,68 145,76 Q 126,84 114,94 Q 108,100 106,108" opacity="0.3" />
        <path d="M 210,72 Q 232,68 255,76 Q 274,84 286,94 Q 292,100 294,108" opacity="0.3" />
        {/* Torso */}
        <path d="M 150,82 Q 145,100 143,122 Q 141,148 141,168 Q 143,188 148,202 Q 155,213 165,218" opacity="0.3" />
        <path d="M 250,82 Q 255,100 257,122 Q 259,148 259,168 Q 257,188 252,202 Q 245,213 235,218" opacity="0.3" />
        <path d="M 156,88 Q 175,97 200,99 Q 225,97 244,88" opacity="0.15" strokeWidth="0.8" />
        <line x1="200" y1="99" x2="200" y2="215" opacity="0.1" strokeWidth="0.6" />
        <path d="M 165,218 Q 182,226 200,228 Q 218,226 235,218" opacity="0.25" />
        {/* Left arm */}
        <path d="M 106,108 Q 100,125 96,145 Q 92,165 90,182 Q 86,202 82,225 Q 78,248 74,268 Q 70,285 66,300 Q 63,310 62,316" opacity="0.3" />
        <path d="M 140,90 Q 136,110 132,132 Q 128,152 126,172 Q 122,192 118,212 Q 112,235 108,252 Q 102,270 96,288 Q 92,302 88,314" opacity="0.3" />
        <path d="M 62,316 Q 58,324 60,328 Q 66,330 74,327 Q 82,322 87,316 L 88,314" opacity="0.3" />
        {/* Right arm */}
        <path d="M 294,108 Q 300,125 304,145 Q 308,165 310,182 Q 314,202 318,225 Q 322,248 326,268 Q 330,285 334,300 Q 337,310 338,316" opacity="0.3" />
        <path d="M 260,90 Q 264,110 268,132 Q 272,152 274,172 Q 278,192 282,212 Q 288,235 292,252 Q 298,270 304,288 Q 308,302 312,314" opacity="0.3" />
        <path d="M 338,316 Q 342,324 340,328 Q 334,330 326,327 Q 318,322 313,316 L 312,314" opacity="0.3" />
        {/* Left leg */}
        <path d="M 155,218 Q 150,250 148,280 Q 146,308 146,330 Q 144,358 142,385 Q 140,412 139,435 Q 138,452 137,465 Q 136,472 135,478" opacity="0.3" />
        <path d="M 192,228 Q 190,255 188,280 Q 186,308 185,330 Q 183,358 181,385 Q 179,412 178,435 Q 177,452 176,465 Q 175,472 174,478" opacity="0.3" />
        <path d="M 135,478 Q 128,483 127,487 Q 132,491 146,493 Q 160,493 172,491 Q 176,487 175,482 L 174,478" opacity="0.3" />
        {/* Right leg */}
        <path d="M 245,218 Q 250,250 252,280 Q 254,308 254,330 Q 256,358 258,385 Q 260,412 261,435 Q 262,452 263,465 Q 264,472 265,478" opacity="0.3" />
        <path d="M 208,228 Q 210,255 212,280 Q 214,308 215,330 Q 217,358 219,385 Q 221,412 222,435 Q 223,452 224,465 Q 225,472 226,478" opacity="0.3" />
        <path d="M 265,478 Q 272,483 273,487 Q 268,491 254,493 Q 240,493 228,491 Q 224,487 225,482 L 226,478" opacity="0.3" />
      </g>

      {/* Highlighted muscle group */}
      {selectedMuscle && selectedMuscle.highlightPaths.map((path, i) => (
        <path
          key={i}
          d={path}
          fill={selectedMuscle.highlightColor}
          fillOpacity="0.25"
          stroke={selectedMuscle.highlightColor}
          strokeWidth="1.5"
          opacity="0.8"
          filter="url(#muscleGlow)"
          className="muscle-highlight"
        />
      ))}

      {/* Muscle group labels when selected */}
      {selectedMuscle && (
        <text
          x="200"
          y="510"
          textAnchor="middle"
          fill={selectedMuscle.highlightColor}
          fontSize="11"
          fontFamily="Inter, sans-serif"
          fontWeight="600"
        >
          {selectedMuscle.name}
        </text>
      )}

      {!selectedMuscle && (
        <text x="200" y="510" textAnchor="middle" fill="var(--text-muted)" fontSize="10" fontFamily="Inter, sans-serif" opacity="0.5">
          Selecciona un grupo muscular
        </text>
      )}
    </svg>
  );
}

export default function AnatomyPage() {
  const [selectedMuscle, setSelectedMuscle] = useState<MuscleGroup | null>(null);
  const [distortionView, setDistortionView] = useState<'relaxed' | 'flexed'>('relaxed');

  return (
    <div className="anatomy-page">
      <div className="page-header">
        <h1>Anatomía & Flujo Muscular</h1>
        <p>Entiende cómo el movimiento del cuerpo afecta tus diseños. El cuerpo no es estático — tu arte tampoco debería serlo.</p>
      </div>

      <div className="anatomy-body-layout">
        <div className="anatomy-body-container">
          <AnatomyBodySVG selectedMuscle={selectedMuscle} />
        </div>
        <div className="muscle-quick-select">
          <h3>Grupos Musculares</h3>
          <div className="muscle-quick-buttons">
            {muscleGroups.map((group) => (
              <button
                key={group.name}
                className={`muscle-quick-btn ${selectedMuscle?.name === group.name ? 'active' : ''}`}
                style={{
                  borderColor: selectedMuscle?.name === group.name ? group.highlightColor : undefined,
                  color: selectedMuscle?.name === group.name ? group.highlightColor : undefined,
                }}
                onClick={() => setSelectedMuscle(selectedMuscle?.name === group.name ? null : group)}
              >
                <span
                  className="muscle-dot"
                  style={{ background: group.highlightColor }}
                />
                {group.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="distortion-demo">
        <h2>Simulación de Distorsión</h2>
        <p>Observa cómo un diseño circular se deforma según la zona y el estado muscular</p>
        <div className="distortion-controls">
          <button
            className={`filter-btn ${distortionView === 'relaxed' ? 'active' : ''}`}
            onClick={() => setDistortionView('relaxed')}
          >
            <Minus size={14} /> Relajado
          </button>
          <button
            className={`filter-btn ${distortionView === 'flexed' ? 'active' : ''}`}
            onClick={() => setDistortionView('flexed')}
          >
            <Dumbbell size={14} /> Contraído
          </button>
        </div>

        <div className="distortion-grid">
          {[
            { zone: 'Deltoides', scaleX: distortionView === 'flexed' ? 0.85 : 1, scaleY: distortionView === 'flexed' ? 1.1 : 1, rotation: distortionView === 'flexed' ? 5 : 0 },
            { zone: 'Bíceps', scaleX: distortionView === 'flexed' ? 1.15 : 1, scaleY: distortionView === 'flexed' ? 0.85 : 1, rotation: 0 },
            { zone: 'Pectoral', scaleX: distortionView === 'flexed' ? 0.9 : 1, scaleY: distortionView === 'flexed' ? 1.08 : 1, rotation: distortionView === 'flexed' ? -3 : 0 },
            { zone: 'Abdomen', scaleX: distortionView === 'flexed' ? 1.05 : 1, scaleY: distortionView === 'flexed' ? 0.8 : 1, rotation: 0 },
            { zone: 'Pantorrilla', scaleX: distortionView === 'flexed' ? 1.12 : 1, scaleY: distortionView === 'flexed' ? 0.92 : 1, rotation: 0 },
            { zone: 'Espalda Alta', scaleX: distortionView === 'flexed' ? 0.92 : 1, scaleY: distortionView === 'flexed' ? 1.05 : 1, rotation: 0 },
          ].map((item) => (
            <div key={item.zone} className="distortion-item">
              <div className="distortion-visual">
                <svg viewBox="0 0 100 100" width="100" height="100">
                  <g transform={`translate(50,50) scale(${item.scaleX}, ${item.scaleY}) rotate(${item.rotation})`}>
                    <circle cx="0" cy="0" r="30" fill="none" stroke="var(--accent-primary)" strokeWidth="2" />
                    <line x1="-30" y1="0" x2="30" y2="0" stroke="var(--accent-primary)" strokeWidth="1" opacity="0.5" />
                    <line x1="0" y1="-30" x2="0" y2="30" stroke="var(--accent-primary)" strokeWidth="1" opacity="0.5" />
                    <circle cx="0" cy="0" r="2" fill="var(--accent-primary)" />
                  </g>
                  {distortionView === 'relaxed' && (
                    <circle cx="50" cy="50" r="30" fill="none" stroke="var(--text-muted)" strokeWidth="1" strokeDasharray="3 3" opacity="0.3" />
                  )}
                </svg>
              </div>
              <span className="distortion-label">{item.zone}</span>
              {distortionView === 'flexed' && (
                <span className="distortion-value">
                  {Math.round((item.scaleX - 1) * 100)}% H / {Math.round((item.scaleY - 1) * 100)}% V
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="muscle-groups-section">
        <h2>Detalle de Grupos Musculares</h2>
        <div className="muscle-cards">
          {muscleGroups.map((group) => (
            <button
              key={group.name}
              className={`muscle-card ${selectedMuscle?.name === group.name ? 'selected' : ''}`}
              onClick={() => setSelectedMuscle(selectedMuscle?.name === group.name ? null : group)}
            >
              <div className="muscle-card-header">
                <Dumbbell size={20} />
                <h3>{group.name}</h3>
              </div>
              <p className="muscle-movement">{group.movementDescription}</p>

              {selectedMuscle?.name === group.name && (
                <div className="muscle-details">
                  <div className="muscle-detail-section">
                    <h4><TrendingUp size={14} /> Impacto en el Tatuaje</h4>
                    <p>{group.tattooImpact}</p>
                  </div>
                  <div className="muscle-detail-section">
                    <h4><RotateCcw size={14} /> Prueba de Movimiento</h4>
                    <p>{group.flexDemo}</p>
                  </div>
                  <div className="muscle-detail-section">
                    <h4>Zonas Relacionadas</h4>
                    <div className="tag-list">
                      {group.zones.map((zoneId) => {
                        const zone = bodyZones.find((z) => z.id === zoneId);
                        return zone ? (
                          <span key={zoneId} className="tag">{zone.nameEs}</span>
                        ) : null;
                      })}
                    </div>
                  </div>
                </div>
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="flow-rules-section">
        <h2>Reglas de Flujo Anatómico</h2>
        <div className="flow-rules-grid">
          <div className="flow-rule">
            <div className="flow-rule-icon">
              <ArrowDown size={24} />
            </div>
            <h3>Gravedad Natural</h3>
            <p>Los diseños que fluyen hacia abajo (raíces, cascadas, venas) se sienten naturales porque siguen la dirección de la gravedad.</p>
          </div>
          <div className="flow-rule">
            <div className="flow-rule-icon">
              <ArrowUp size={24} />
            </div>
            <h3>Crecimiento Ascendente</h3>
            <p>Los elementos que crecen hacia arriba (flores, llamas, ramas) crean energía y dinamismo, ideal para brazos y piernas.</p>
          </div>
          <div className="flow-rule">
            <div className="flow-rule-icon">
              <RotateCcw size={24} />
            </div>
            <h3>Envolvimiento</h3>
            <p>Los diseños que envuelven el brazo o la pierna crean continuidad visual. Cada ángulo revela una parte diferente de la historia.</p>
          </div>
          <div className="flow-rule">
            <div className="flow-rule-icon">
              <ArrowRightIcon size={24} />
            </div>
            <h3>Dirección de Lectura</h3>
            <p>En culturas occidentales, la mirada se mueve naturalmente de izquierda a derecha. Usa esto para guiar la narrativa visual del tatuaje.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
