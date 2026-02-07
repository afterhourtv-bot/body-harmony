import { useState } from 'react';
import { bodyZones } from '../data/bodyZones';
import type { BodyZone } from '../types';
import { X, AlertTriangle, Dumbbell, Droplets, Wind, Star } from 'lucide-react';

export default function BodyMapPage() {
  const [selectedZone, setSelectedZone] = useState<BodyZone | null>(null);
  const [hoveredZone, setHoveredZone] = useState<string | null>(null);
  const [viewFilter, setViewFilter] = useState<'all' | 'pain' | 'movement' | 'aging'>('all');

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
          <svg viewBox="0 0 430 420" className="body-svg">
            <defs>
              <filter id="glow">
                <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Body outline - front view */}
            <g className="body-outline" opacity="0.3">
              {/* Head */}
              <ellipse cx="215" cy="35" rx="22" ry="28" fill="none" stroke="var(--text-secondary)" strokeWidth="1" />
              {/* Neck */}
              <rect x="208" y="62" width="14" height="12" rx="4" fill="none" stroke="var(--text-secondary)" strokeWidth="1" />
              {/* Torso */}
              <path d="M 175,75 Q 170,100 170,130 Q 170,165 178,190 Q 185,200 200,200 L 230,200 Q 245,200 252,190 Q 260,165 260,130 Q 260,100 255,75 Z" fill="none" stroke="var(--text-secondary)" strokeWidth="1" />
              {/* Left arm */}
              <path d="M 175,78 Q 155,82 140,95 Q 125,115 120,140 Q 115,165 112,190 Q 108,215 105,240 Q 102,260 98,275" fill="none" stroke="var(--text-secondary)" strokeWidth="1" />
              <path d="M 175,82 Q 160,90 150,100 Q 138,120 132,145 Q 128,170 125,195 Q 120,220 118,245 Q 115,260 112,275" fill="none" stroke="var(--text-secondary)" strokeWidth="1" />
              {/* Right arm */}
              <path d="M 255,78 Q 275,82 290,95 Q 305,115 310,140 Q 315,165 318,190 Q 322,215 325,240 Q 328,260 332,275" fill="none" stroke="var(--text-secondary)" strokeWidth="1" />
              <path d="M 255,82 Q 270,90 280,100 Q 292,120 298,145 Q 302,170 305,195 Q 310,220 312,245 Q 315,260 318,275" fill="none" stroke="var(--text-secondary)" strokeWidth="1" />
              {/* Left leg */}
              <path d="M 190,200 Q 185,240 183,280 Q 181,310 180,340 Q 179,365 178,390 Q 177,400 175,410" fill="none" stroke="var(--text-secondary)" strokeWidth="1" />
              <path d="M 210,200 Q 208,240 206,280 Q 204,310 203,340 Q 202,365 200,390 Q 199,400 197,410" fill="none" stroke="var(--text-secondary)" strokeWidth="1" />
              {/* Right leg */}
              <path d="M 220,200 Q 222,240 224,280 Q 226,310 227,340 Q 228,365 230,390 Q 231,400 233,410" fill="none" stroke="var(--text-secondary)" strokeWidth="1" />
              <path d="M 240,200 Q 245,240 247,280 Q 249,310 250,340 Q 251,365 252,390 Q 253,400 255,410" fill="none" stroke="var(--text-secondary)" strokeWidth="1" />
            </g>

            {/* Interactive zones */}
            {bodyZones.map((zone) => (
              <g key={zone.id}>
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
                  strokeWidth={selectedZone?.id === zone.id ? 2 : 1}
                  className="body-zone"
                  onClick={() => setSelectedZone(zone)}
                  onMouseEnter={() => setHoveredZone(zone.id)}
                  onMouseLeave={() => setHoveredZone(null)}
                  filter={selectedZone?.id === zone.id ? 'url(#glow)' : undefined}
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
                  opacity={hoveredZone === zone.id || selectedZone?.id === zone.id ? 1 : 0.6}
                >
                  {zone.nameEs}
                </text>
              </g>
            ))}
          </svg>
        </div>

        <div className="zone-details-panel">
          {selectedZone ? (
            <div className="zone-details">
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
              onClick={() => setSelectedZone(zone)}
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
