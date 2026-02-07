import { useState } from 'react';
import { bodyZones } from '../data/bodyZones';
import { Dumbbell, TrendingUp, RotateCcw, ArrowDown, ArrowUp, ArrowRight as ArrowRightIcon, Minus } from 'lucide-react';

interface MuscleGroup {
  name: string;
  zones: string[];
  movementDescription: string;
  tattooImpact: string;
  flexDemo: string;
}

const muscleGroups: MuscleGroup[] = [
  {
    name: 'Deltoides',
    zones: ['shoulder', 'upper-arm-outer'],
    movementDescription: 'Abducción, flexión y extensión del brazo',
    tattooImpact: 'Los diseños se comprimen con la abducción del brazo. La parte redonda del deltoides distorsiona círculos en óvalos.',
    flexDemo: 'Pide al cliente que levante el brazo lateralmente para ver la máxima distorsión.'
  },
  {
    name: 'Bíceps / Tríceps',
    zones: ['upper-arm-outer', 'upper-arm-inner'],
    movementDescription: 'Flexión y extensión del codo',
    tattooImpact: 'La contracción del bíceps acorta los diseños verticales hasta un 15%. Los diseños envolventes cambian de perspectiva con la rotación.',
    flexDemo: 'Haz que el cliente flexione el brazo: observa cómo se acorta el bíceps y se estira el tríceps.'
  },
  {
    name: 'Pectorales',
    zones: ['chest'],
    movementDescription: 'Aducción y rotación interna del brazo',
    tattooImpact: 'Los diseños sobre el pectoral se mueven con la aducción del brazo. Importante para chest pieces simétricos.',
    flexDemo: 'El cliente junta las palmas frente al pecho para ver la contracción máxima del pectoral.'
  },
  {
    name: 'Abdominales / Oblicuos',
    zones: ['abdomen', 'ribs'],
    movementDescription: 'Flexión del tronco, rotación lateral',
    tattooImpact: 'La respiración mueve constantemente esta zona. La flexión del tronco puede acortar diseños hasta un 20%. Los cambios de peso tienen máximo impacto aquí.',
    flexDemo: 'Observa la zona mientras el cliente respira profundamente y se inclina hacia los lados.'
  },
  {
    name: 'Cuádriceps',
    zones: ['thigh-front'],
    movementDescription: 'Extensión de la rodilla, flexión de cadera',
    tattooImpact: 'Al sentarse, la cara frontal se comprime y la piel se tensa lateralmente. Los diseños deben considerar la vista sentado vs. de pie.',
    flexDemo: 'El cliente se sienta y se para alternadamente para observar los cambios en la superficie.'
  },
  {
    name: 'Gastrocnemio',
    zones: ['calf'],
    movementDescription: 'Plantiflexión del tobillo',
    tattooImpact: 'La contracción al caminar crea un efecto de "bombeo" visual. La forma de diamante del gastrocnemio se pronuncia al ponerse de puntas.',
    flexDemo: 'El cliente se pone de puntas para ver la contracción máxima del gemelo.'
  },
  {
    name: 'Trapecio / Dorsal',
    zones: ['back-upper', 'back-lower'],
    movementDescription: 'Retracción escapular, extensión de columna',
    tattooImpact: 'Los omóplatos se mueven significativamente. Los diseños entre escápulas se distorsionan al sacar el pecho. La espalda baja se comprime al extenderse.',
    flexDemo: 'El cliente junta los omóplatos hacia atrás para ver el movimiento de la espalda superior.'
  }
];

export default function AnatomyPage() {
  const [selectedMuscle, setSelectedMuscle] = useState<MuscleGroup | null>(null);
  const [distortionView, setDistortionView] = useState<'relaxed' | 'flexed'>('relaxed');

  return (
    <div className="anatomy-page">
      <div className="page-header">
        <h1>Anatomía & Flujo Muscular</h1>
        <p>Entiende cómo el movimiento del cuerpo afecta tus diseños. El cuerpo no es estático — tu arte tampoco debería serlo.</p>
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
        <h2>Grupos Musculares & Impacto en Tatuajes</h2>
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
