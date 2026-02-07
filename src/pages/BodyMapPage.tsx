import { useState } from 'react';
import { bodyZones } from '../data/bodyZones';
import type { BodyZone } from '../types';
import { X, AlertTriangle, Dumbbell, Droplets, Wind, Star } from 'lucide-react';

function FrontBodyOutline() {
  return (
    <g className="body-outline" fill="none" stroke="var(--text-secondary)" strokeWidth="1.2">
      {/* Head */}
      <ellipse cx="200" cy="28" rx="20" ry="24" opacity="0.35" />
      <path d="M 183,40 Q 192,55 200,57 Q 208,55 217,40" opacity="0.25" strokeWidth="0.8" />

      {/* Neck with SCM */}
      <path d="M 192,55 L 190,72" opacity="0.35" />
      <path d="M 208,55 L 210,72" opacity="0.35" />
      <path d="M 196,57 Q 200,65 204,57" opacity="0.15" strokeWidth="0.7" />

      {/* Trapezius / Shoulders */}
      <path d="M 190,72 Q 168,68 145,76 Q 126,84 114,94 Q 108,100 106,108" opacity="0.35" />
      <path d="M 210,72 Q 232,68 255,76 Q 274,84 286,94 Q 292,100 294,108" opacity="0.35" />

      {/* Clavicles */}
      <path d="M 192,73 Q 174,70 158,75" opacity="0.2" strokeWidth="0.7" />
      <path d="M 208,73 Q 226,70 242,75" opacity="0.2" strokeWidth="0.7" />

      {/* Torso left contour */}
      <path d="M 150,82 Q 145,100 143,122 Q 141,148 141,168 Q 143,188 148,202 Q 155,213 165,218" opacity="0.35" />
      {/* Torso right contour */}
      <path d="M 250,82 Q 255,100 257,122 Q 259,148 259,168 Q 257,188 252,202 Q 245,213 235,218" opacity="0.35" />

      {/* Pectorals */}
      <path d="M 156,88 Q 175,97 200,99 Q 225,97 244,88" opacity="0.2" strokeWidth="0.8" />
      <path d="M 160,96 Q 178,103 200,105" opacity="0.15" strokeWidth="0.7" />
      <path d="M 240,96 Q 222,103 200,105" opacity="0.15" strokeWidth="0.7" />

      {/* Abs midline */}
      <line x1="200" y1="105" x2="200" y2="215" opacity="0.12" strokeWidth="0.6" />
      {/* Oblique hints */}
      <path d="M 148,152 Q 160,157 170,152" opacity="0.12" strokeWidth="0.6" />
      <path d="M 252,152 Q 240,157 230,152" opacity="0.12" strokeWidth="0.6" />

      {/* Hip / pelvis */}
      <path d="M 165,218 Q 182,226 200,228 Q 218,226 235,218" opacity="0.3" />

      {/* ===== LEFT ARM ===== */}
      <path d="M 106,108 Q 100,125 96,145 Q 92,165 90,182 Q 86,202 82,225 Q 78,248 74,268 Q 70,285 66,300 Q 63,310 62,316" opacity="0.35" />
      <path d="M 140,90 Q 136,110 132,132 Q 128,152 126,172 Q 122,192 118,212 Q 112,235 108,252 Q 102,270 96,288 Q 92,302 88,314" opacity="0.35" />
      {/* Elbow */}
      <path d="M 92,184 Q 100,190 108,184" opacity="0.18" strokeWidth="0.7" />
      {/* Hand */}
      <path d="M 62,316 Q 58,324 60,328 Q 66,330 74,327 Q 82,322 87,316 L 88,314" opacity="0.35" />

      {/* ===== RIGHT ARM (mirror) ===== */}
      <path d="M 294,108 Q 300,125 304,145 Q 308,165 310,182 Q 314,202 318,225 Q 322,248 326,268 Q 330,285 334,300 Q 337,310 338,316" opacity="0.35" />
      <path d="M 260,90 Q 264,110 268,132 Q 272,152 274,172 Q 278,192 282,212 Q 288,235 292,252 Q 298,270 304,288 Q 308,302 312,314" opacity="0.35" />
      <path d="M 292,184 Q 300,190 308,184" opacity="0.18" strokeWidth="0.7" />
      <path d="M 338,316 Q 342,324 340,328 Q 334,330 326,327 Q 318,322 313,316 L 312,314" opacity="0.35" />

      {/* ===== LEFT LEG ===== */}
      <path d="M 155,218 Q 150,250 148,280 Q 146,308 146,330 Q 144,358 142,385 Q 140,412 139,435 Q 138,452 137,465 Q 136,472 135,478" opacity="0.35" />
      <path d="M 192,228 Q 190,255 188,280 Q 186,308 185,330 Q 183,358 181,385 Q 179,412 178,435 Q 177,452 176,465 Q 175,472 174,478" opacity="0.35" />
      {/* Kneecap */}
      <path d="M 148,325 Q 156,335 166,338 Q 176,335 183,325" opacity="0.18" strokeWidth="0.7" />
      {/* Calf shape */}
      <path d="M 146,342 Q 142,360 144,378" opacity="0.15" strokeWidth="0.7" />
      {/* Foot */}
      <path d="M 135,478 Q 128,483 127,487 Q 132,491 146,493 Q 160,493 172,491 Q 176,487 175,482 L 174,478" opacity="0.35" />

      {/* ===== RIGHT LEG (mirror) ===== */}
      <path d="M 245,218 Q 250,250 252,280 Q 254,308 254,330 Q 256,358 258,385 Q 260,412 261,435 Q 262,452 263,465 Q 264,472 265,478" opacity="0.35" />
      <path d="M 208,228 Q 210,255 212,280 Q 214,308 215,330 Q 217,358 219,385 Q 221,412 222,435 Q 223,452 224,465 Q 225,472 226,478" opacity="0.35" />
      <path d="M 218,325 Q 226,335 236,338 Q 246,335 253,325" opacity="0.18" strokeWidth="0.7" />
      <path d="M 254,342 Q 258,360 256,378" opacity="0.15" strokeWidth="0.7" />
      <path d="M 265,478 Q 272,483 273,487 Q 268,491 254,493 Q 240,493 228,491 Q 224,487 225,482 L 226,478" opacity="0.35" />

      {/* View label */}
      <text x="200" y="510" textAnchor="middle" fill="var(--text-muted)" fontSize="10" fontFamily="Inter, sans-serif" opacity="0.5">
        VISTA FRONTAL
      </text>
    </g>
  );
}

function BackBodyOutline() {
  return (
    <g className="body-outline" fill="none" stroke="var(--text-secondary)" strokeWidth="1.2">
      {/* Head (back of head) */}
      <ellipse cx="200" cy="28" rx="20" ry="24" opacity="0.35" />
      {/* Ear hints */}
      <path d="M 180,26 Q 177,22 180,18" opacity="0.2" strokeWidth="0.7" />
      <path d="M 220,26 Q 223,22 220,18" opacity="0.2" strokeWidth="0.7" />

      {/* Neck */}
      <path d="M 192,50 L 190,72" opacity="0.35" />
      <path d="M 208,50 L 210,72" opacity="0.35" />
      {/* Neck tendons */}
      <path d="M 196,52 L 194,68" opacity="0.12" strokeWidth="0.6" />
      <path d="M 204,52 L 206,68" opacity="0.12" strokeWidth="0.6" />

      {/* Trapezius - prominent from back */}
      <path d="M 190,72 Q 165,66 142,74 Q 124,83 114,94 Q 108,100 106,108" opacity="0.35" />
      <path d="M 210,72 Q 235,66 258,74 Q 276,83 286,94 Q 292,100 294,108" opacity="0.35" />

      {/* Spine */}
      <line x1="200" y1="52" x2="200" y2="215" opacity="0.2" strokeWidth="0.8" strokeDasharray="3 4" />
      {/* Vertebrae hints */}
      <path d="M 197,80 L 203,80" opacity="0.12" strokeWidth="0.6" />
      <path d="M 197,100 L 203,100" opacity="0.12" strokeWidth="0.6" />
      <path d="M 197,120 L 203,120" opacity="0.12" strokeWidth="0.6" />
      <path d="M 197,140 L 203,140" opacity="0.12" strokeWidth="0.6" />
      <path d="M 197,160 L 203,160" opacity="0.12" strokeWidth="0.6" />
      <path d="M 197,180 L 203,180" opacity="0.12" strokeWidth="0.6" />
      <path d="M 197,200 L 203,200" opacity="0.12" strokeWidth="0.6" />

      {/* Scapulae (shoulder blades) */}
      <path d="M 170,82 Q 162,98 160,115 Q 162,128 170,135" opacity="0.22" strokeWidth="0.9" />
      <path d="M 230,82 Q 238,98 240,115 Q 238,128 230,135" opacity="0.22" strokeWidth="0.9" />
      {/* Scapular spine */}
      <path d="M 170,90 Q 165,88 158,92" opacity="0.15" strokeWidth="0.6" />
      <path d="M 230,90 Q 235,88 242,92" opacity="0.15" strokeWidth="0.6" />

      {/* Torso sides */}
      <path d="M 150,82 Q 145,100 143,122 Q 141,148 141,168 Q 143,188 148,202 Q 155,213 165,218" opacity="0.35" />
      <path d="M 250,82 Q 255,100 257,122 Q 259,148 259,168 Q 257,188 252,202 Q 245,213 235,218" opacity="0.35" />

      {/* Latissimus dorsi */}
      <path d="M 152,118 Q 160,138 166,155 Q 173,168 180,175" opacity="0.18" strokeWidth="0.7" />
      <path d="M 248,118 Q 240,138 234,155 Q 227,168 220,175" opacity="0.18" strokeWidth="0.7" />

      {/* Lower back dimples (Venus dimples) */}
      <circle cx="190" cy="200" r="3" opacity="0.15" strokeWidth="0.6" />
      <circle cx="210" cy="200" r="3" opacity="0.15" strokeWidth="0.6" />

      {/* Sacral triangle */}
      <path d="M 195,205 L 200,215 L 205,205 Z" opacity="0.1" strokeWidth="0.5" />

      {/* Hip / gluteal fold */}
      <path d="M 165,218 Q 182,226 200,228 Q 218,226 235,218" opacity="0.3" />

      {/* ===== LEFT ARM ===== */}
      <path d="M 106,108 Q 100,125 96,145 Q 92,165 90,182 Q 86,202 82,225 Q 78,248 74,268 Q 70,285 66,300 Q 63,310 62,316" opacity="0.35" />
      <path d="M 140,90 Q 136,110 132,132 Q 128,152 126,172 Q 122,192 118,212 Q 112,235 108,252 Q 102,270 96,288 Q 92,302 88,314" opacity="0.35" />
      <path d="M 92,184 Q 100,190 108,184" opacity="0.18" strokeWidth="0.7" />
      <path d="M 62,316 Q 58,324 60,328 Q 66,330 74,327 Q 82,322 87,316 L 88,314" opacity="0.35" />

      {/* ===== RIGHT ARM ===== */}
      <path d="M 294,108 Q 300,125 304,145 Q 308,165 310,182 Q 314,202 318,225 Q 322,248 326,268 Q 330,285 334,300 Q 337,310 338,316" opacity="0.35" />
      <path d="M 260,90 Q 264,110 268,132 Q 272,152 274,172 Q 278,192 282,212 Q 288,235 292,252 Q 298,270 304,288 Q 308,302 312,314" opacity="0.35" />
      <path d="M 292,184 Q 300,190 308,184" opacity="0.18" strokeWidth="0.7" />
      <path d="M 338,316 Q 342,324 340,328 Q 334,330 326,327 Q 318,322 313,316 L 312,314" opacity="0.35" />

      {/* ===== LEFT LEG ===== */}
      <path d="M 155,218 Q 150,250 148,280 Q 146,308 146,330 Q 144,358 142,385 Q 140,412 139,435 Q 138,452 137,465 Q 136,472 135,478" opacity="0.35" />
      <path d="M 192,228 Q 190,255 188,280 Q 186,308 185,330 Q 183,358 181,385 Q 179,412 178,435 Q 177,452 176,465 Q 175,472 174,478" opacity="0.35" />
      <path d="M 148,325 Q 156,335 166,338 Q 176,335 183,325" opacity="0.18" strokeWidth="0.7" />
      {/* Calf muscle - more prominent from back */}
      <path d="M 148,340 Q 143,355 145,372 Q 150,382 158,378" opacity="0.18" strokeWidth="0.7" />
      <path d="M 174,340 Q 178,355 176,372 Q 170,382 164,378" opacity="0.18" strokeWidth="0.7" />
      <path d="M 135,478 Q 128,483 127,487 Q 132,491 146,493 Q 160,493 172,491 Q 176,487 175,482 L 174,478" opacity="0.35" />

      {/* ===== RIGHT LEG ===== */}
      <path d="M 245,218 Q 250,250 252,280 Q 254,308 254,330 Q 256,358 258,385 Q 260,412 261,435 Q 262,452 263,465 Q 264,472 265,478" opacity="0.35" />
      <path d="M 208,228 Q 210,255 212,280 Q 214,308 215,330 Q 217,358 219,385 Q 221,412 222,435 Q 223,452 224,465 Q 225,472 226,478" opacity="0.35" />
      <path d="M 218,325 Q 226,335 236,338 Q 246,335 253,325" opacity="0.18" strokeWidth="0.7" />
      <path d="M 218,340 Q 222,355 220,372 Q 215,382 208,378" opacity="0.18" strokeWidth="0.7" />
      <path d="M 254,340 Q 258,355 256,372 Q 250,382 243,378" opacity="0.18" strokeWidth="0.7" />
      <path d="M 265,478 Q 272,483 273,487 Q 268,491 254,493 Q 240,493 228,491 Q 224,487 225,482 L 226,478" opacity="0.35" />

      {/* View label */}
      <text x="200" y="510" textAnchor="middle" fill="var(--text-muted)" fontSize="10" fontFamily="Inter, sans-serif" opacity="0.5">
        VISTA POSTERIOR
      </text>
    </g>
  );
}

export default function BodyMapPage() {
  const [selectedZone, setSelectedZone] = useState<BodyZone | null>(null);
  const [hoveredZone, setHoveredZone] = useState<string | null>(null);
  const [viewFilter, setViewFilter] = useState<'all' | 'pain' | 'movement'>('all');
  const [bodyView, setBodyView] = useState<'front' | 'back'>('front');

  const frontZones = bodyZones.filter(z => !z.id.startsWith('back-'));
  const backZones = bodyZones.filter(z => z.id.startsWith('back-'));
  const activeZones = bodyView === 'front' ? frontZones : backZones;

  const getPainColor = (level: number) => {
    const colors = ['#4ade80', '#a3e635', '#facc15', '#fb923c', '#ef4444'];
    return colors[level - 1];
  };

  const getMovementColor = (impact: string) => {
    switch (impact) {
      case 'low': return '#4ade80';
      case 'medium': return '#facc15';
      case 'high': return '#ef4444';
      default: return '#888';
    }
  };

  const getZoneFill = (zone: BodyZone) => {
    if (hoveredZone === zone.id) return 'rgba(199, 146, 234, 0.4)';
    if (selectedZone?.id === zone.id) return 'rgba(199, 146, 234, 0.6)';

    switch (viewFilter) {
      case 'pain': return getPainColor(zone.painLevel) + '40';
      case 'movement': return getMovementColor(zone.movementImpact) + '40';
      default: return 'rgba(199, 146, 234, 0.15)';
    }
  };

  return (
    <div className="bodymap-page">
      <div className="page-header">
        <h1>Mapa Corporal</h1>
        <p>Selecciona una zona del cuerpo para ver guías detalladas de tatuaje</p>
      </div>

      <div className="body-view-toggle">
        <button
          className={`view-btn ${bodyView === 'front' ? 'active' : ''}`}
          onClick={() => { setBodyView('front'); setSelectedZone(null); }}
        >
          Vista Frontal
        </button>
        <button
          className={`view-btn ${bodyView === 'back' ? 'active' : ''}`}
          onClick={() => { setBodyView('back'); setSelectedZone(null); }}
        >
          Vista Posterior
        </button>
      </div>

      <div className="view-filters">
        <button
          className={`filter-btn ${viewFilter === 'all' ? 'active' : ''}`}
          onClick={() => setViewFilter('all')}
        >
          Todas las zonas
        </button>
        <button
          className={`filter-btn ${viewFilter === 'pain' ? 'active' : ''}`}
          onClick={() => setViewFilter('pain')}
        >
          <AlertTriangle size={14} /> Nivel de dolor
        </button>
        <button
          className={`filter-btn ${viewFilter === 'movement' ? 'active' : ''}`}
          onClick={() => setViewFilter('movement')}
        >
          <Wind size={14} /> Impacto de movimiento
        </button>
      </div>

      {viewFilter !== 'all' && (
        <div className="filter-legend">
          {viewFilter === 'pain' && (
            <div className="legend-items">
              {[1, 2, 3, 4, 5].map((level) => (
                <span key={level} className="legend-item">
                  <span className="legend-color" style={{ background: getPainColor(level) }} />
                  {level === 1 ? 'Mínimo' : level === 5 ? 'Intenso' : `Nivel ${level}`}
                </span>
              ))}
            </div>
          )}
          {viewFilter === 'movement' && (
            <div className="legend-items">
              <span className="legend-item">
                <span className="legend-color" style={{ background: '#4ade80' }} />
                Bajo
              </span>
              <span className="legend-item">
                <span className="legend-color" style={{ background: '#facc15' }} />
                Medio
              </span>
              <span className="legend-item">
                <span className="legend-color" style={{ background: '#ef4444' }} />
                Alto
              </span>
            </div>
          )}
        </div>
      )}

      <div className="bodymap-layout">
        <div className="body-svg-container">
          <svg viewBox="0 0 400 520" className="body-svg">
            <defs>
              <filter id="glow">
                <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <filter id="zoneShadow">
                <feDropShadow dx="0" dy="0" stdDeviation="1.5" floodColor="#c792ea" floodOpacity="0.3" />
              </filter>
            </defs>

            {bodyView === 'front' ? <FrontBodyOutline /> : <BackBodyOutline />}

            {/* Interactive zones */}
            {activeZones.map((zone) => {
              const transform = bodyView === 'back' ? 'translate(-100, 0)' : undefined;
              return (
                <g key={zone.id} transform={transform}>
                  <path
                    d={zone.svgPath}
                    fill={getZoneFill(zone)}
                    stroke={
                      selectedZone?.id === zone.id
                        ? 'var(--accent-primary)'
                        : hoveredZone === zone.id
                          ? 'var(--accent-secondary)'
                          : 'rgba(199, 146, 234, 0.3)'
                    }
                    strokeWidth={selectedZone?.id === zone.id ? 2.5 : 1}
                    className={`body-zone ${selectedZone?.id === zone.id ? 'selected' : ''}`}
                    onClick={() => setSelectedZone(zone)}
                    onMouseEnter={() => setHoveredZone(zone.id)}
                    onMouseLeave={() => setHoveredZone(null)}
                    filter={selectedZone?.id === zone.id ? 'url(#glow)' : hoveredZone === zone.id ? 'url(#zoneShadow)' : undefined}
                    style={{ cursor: 'pointer' }}
                  />
                  <text
                    x={zone.labelPosition.x}
                    y={zone.labelPosition.y}
                    className="zone-label"
                    fontSize="7"
                    fill="var(--text-secondary)"
                    textAnchor="middle"
                    pointerEvents="none"
                    opacity={hoveredZone === zone.id || selectedZone?.id === zone.id ? 1 : 0.7}
                    fontWeight={selectedZone?.id === zone.id ? 600 : 400}
                  >
                    {zone.nameEs}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        <div className="zone-details-panel">
          {selectedZone ? (
            <div className="zone-details anim-slide-in">
              <div className="zone-details-header">
                <h2>{selectedZone.nameEs}</h2>
                <button className="close-btn" onClick={() => setSelectedZone(null)}>
                  <X size={20} />
                </button>
              </div>

              <div className="zone-stats">
                <div className="stat-item">
                  <AlertTriangle size={16} color={getPainColor(selectedZone.painLevel)} />
                  <span>Dolor: {selectedZone.painLevel}/5</span>
                  <div className="pain-bar">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <span
                        key={i}
                        className={`pain-dot ${i <= selectedZone.painLevel ? 'filled' : ''}`}
                        style={i <= selectedZone.painLevel ? { background: getPainColor(selectedZone.painLevel) } : {}}
                      />
                    ))}
                  </div>
                </div>
                <div className="stat-item">
                  <Wind size={16} />
                  <span>Movimiento: {
                    selectedZone.movementImpact === 'low' ? 'Bajo' :
                    selectedZone.movementImpact === 'medium' ? 'Medio' : 'Alto'
                  }</span>
                </div>
              </div>

              <div className="zone-section">
                <h3><Dumbbell size={16} /> Grupos Musculares</h3>
                <div className="tag-list">
                  {selectedZone.muscleGroups.map((muscle) => (
                    <span key={muscle} className="tag">{muscle}</span>
                  ))}
                </div>
              </div>

              <div className="zone-section">
                <h3><Droplets size={16} /> Características de la Piel</h3>
                <ul className="detail-list">
                  {selectedZone.skinCharacteristics.map((char) => (
                    <li key={char}>{char}</li>
                  ))}
                </ul>
              </div>

              <div className="zone-section">
                <h3><Wind size={16} /> Dirección de Flujo</h3>
                <p className="flow-text">{selectedZone.flowDirection}</p>
              </div>

              <div className="zone-section">
                <h3><Star size={16} /> Estilos Recomendados</h3>
                <div className="tag-list">
                  {selectedZone.bestStyles.map((style) => (
                    <span key={style} className="tag style-tag">{style}</span>
                  ))}
                </div>
              </div>

              <div className="zone-section">
                <h3>Envejecimiento</h3>
                <p className="aging-text">{selectedZone.agingBehavior}</p>
              </div>

              <div className="zone-section">
                <h3>Consideraciones</h3>
                <ul className="considerations-list">
                  {selectedZone.considerations.map((consideration) => (
                    <li key={consideration}>{consideration}</li>
                  ))}
                </ul>
              </div>
            </div>
          ) : (
            <div className="zone-placeholder">
              <MapPin size={48} />
              <h3>Selecciona una zona</h3>
              <p>
                Haz clic en cualquier zona del cuerpo para ver información detallada sobre
                músculos, piel, dolor, estilos recomendados y consideraciones de flujo.
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="zones-grid">
        <h2>Todas las Zonas</h2>
        <div className="zone-cards">
          {bodyZones.map((zone) => (
            <button
              key={zone.id}
              className={`zone-card ${selectedZone?.id === zone.id ? 'selected' : ''}`}
              onClick={() => {
                setSelectedZone(zone);
                if (zone.id.startsWith('back-')) {
                  setBodyView('back');
                } else {
                  setBodyView('front');
                }
              }}
            >
              <div className="zone-card-header">
                <h4>{zone.nameEs}</h4>
                <div className="zone-card-stats">
                  <span className="pain-indicator" style={{ color: getPainColor(zone.painLevel) }}>
                    Dolor {zone.painLevel}/5
                  </span>
                </div>
              </div>
              <p className="zone-card-flow">{zone.flowDirection.substring(0, 80)}...</p>
              <div className="zone-card-styles">
                {zone.bestStyles.slice(0, 3).map((style) => (
                  <span key={style} className="mini-tag">{style}</span>
                ))}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function MapPin({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
