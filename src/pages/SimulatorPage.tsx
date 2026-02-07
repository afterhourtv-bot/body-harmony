import { useState } from 'react';
import { bodyZones } from '../data/bodyZones';
import { skinTones } from '../data/skinTones';
import type { BodyZone, SkinTone } from '../types';
import { Move, RotateCcw, ZoomIn, ZoomOut, Check, Info } from 'lucide-react';

function MiniBodyPreview({ selectedZone }: { selectedZone: BodyZone | null }) {
  const isBackZone = selectedZone?.id.startsWith('back-');

  return (
    <svg viewBox="0 0 400 520" className="mini-body-preview">
      {/* Body outline */}
      <g fill="none" stroke="var(--text-secondary)" strokeWidth="1" opacity="0.25">
        <ellipse cx="200" cy="28" rx="20" ry="24" />
        <path d="M 192,55 L 190,72" />
        <path d="M 208,55 L 210,72" />
        <path d="M 190,72 Q 168,68 145,76 Q 126,84 114,94 Q 108,100 106,108" />
        <path d="M 210,72 Q 232,68 255,76 Q 274,84 286,94 Q 292,100 294,108" />
        <path d="M 150,82 Q 145,100 143,122 Q 141,148 141,168 Q 143,188 148,202 Q 155,213 165,218" />
        <path d="M 250,82 Q 255,100 257,122 Q 259,148 259,168 Q 257,188 252,202 Q 245,213 235,218" />
        <path d="M 165,218 Q 182,226 200,228 Q 218,226 235,218" />
        <path d="M 106,108 Q 100,125 96,145 Q 92,165 90,182 Q 86,202 82,225 Q 78,248 74,268 Q 70,285 66,300 Q 63,310 62,316" />
        <path d="M 140,90 Q 136,110 132,132 Q 128,152 126,172 Q 122,192 118,212 Q 112,235 108,252 Q 102,270 96,288 Q 92,302 88,314" />
        <path d="M 62,316 Q 58,324 60,328 Q 66,330 74,327 Q 82,322 87,316 L 88,314" />
        <path d="M 294,108 Q 300,125 304,145 Q 308,165 310,182 Q 314,202 318,225 Q 322,248 326,268 Q 330,285 334,300 Q 337,310 338,316" />
        <path d="M 260,90 Q 264,110 268,132 Q 272,152 274,172 Q 278,192 282,212 Q 288,235 292,252 Q 298,270 304,288 Q 308,302 312,314" />
        <path d="M 338,316 Q 342,324 340,328 Q 334,330 326,327 Q 318,322 313,316 L 312,314" />
        <path d="M 155,218 Q 150,250 148,280 Q 146,308 146,330 Q 144,358 142,385 Q 140,412 139,435 Q 138,452 137,465 Q 136,472 135,478" />
        <path d="M 192,228 Q 190,255 188,280 Q 186,308 185,330 Q 183,358 181,385 Q 179,412 178,435 Q 177,452 176,465 Q 175,472 174,478" />
        <path d="M 135,478 Q 128,483 127,487 Q 132,491 146,493 Q 160,493 172,491 Q 176,487 175,482 L 174,478" />
        <path d="M 245,218 Q 250,250 252,280 Q 254,308 254,330 Q 256,358 258,385 Q 260,412 261,435 Q 262,452 263,465 Q 264,472 265,478" />
        <path d="M 208,228 Q 210,255 212,280 Q 214,308 215,330 Q 217,358 219,385 Q 221,412 222,435 Q 223,452 224,465 Q 225,472 226,478" />
        <path d="M 265,478 Q 272,483 273,487 Q 268,491 254,493 Q 240,493 228,491 Q 224,487 225,482 L 226,478" />
      </g>

      {/* Highlighted zone */}
      {selectedZone && (
        <g transform={isBackZone ? 'translate(-100, 0)' : undefined}>
          <path
            d={selectedZone.svgPath}
            fill="var(--accent-primary)"
            fillOpacity="0.35"
            stroke="var(--accent-primary)"
            strokeWidth="2"
          />
          <text
            x={selectedZone.labelPosition.x}
            y={selectedZone.labelPosition.y - 8}
            textAnchor="middle"
            fill="var(--accent-primary)"
            fontSize="8"
            fontWeight="600"
            fontFamily="Inter, sans-serif"
          >
            {selectedZone.nameEs}
          </text>
        </g>
      )}
    </svg>
  );
}

export default function SimulatorPage() {
  const [selectedZone, setSelectedZone] = useState<BodyZone | null>(null);
  const [selectedTone, setSelectedTone] = useState<SkinTone>(skinTones[2]);
  const [designShape, setDesignShape] = useState<'circle' | 'vertical' | 'horizontal' | 'freeform'>('circle');
  const [designSize, setDesignSize] = useState(60);
  const [showGuidelines, setShowGuidelines] = useState(true);
  const [showMuscleLines, setShowMuscleLines] = useState(true);
  const [positionX, setPositionX] = useState(50);
  const [positionY, setPositionY] = useState(50);

  const renderDesignShape = () => {
    const cx = positionX;
    const cy = positionY;
    const s = designSize / 2;

    switch (designShape) {
      case 'circle':
        return <ellipse cx={cx} cy={cy} rx={s} ry={s} fill="none" stroke="var(--accent-primary)" strokeWidth="2" />;
      case 'vertical':
        return <rect x={cx - s / 3} y={cy - s} width={s * 0.66} height={s * 2} rx="4" fill="none" stroke="var(--accent-primary)" strokeWidth="2" />;
      case 'horizontal':
        return <rect x={cx - s} y={cy - s / 3} width={s * 2} height={s * 0.66} rx="4" fill="none" stroke="var(--accent-primary)" strokeWidth="2" />;
      case 'freeform':
        return (
          <path
            d={`M ${cx - s},${cy} Q ${cx - s / 2},${cy - s} ${cx},${cy - s / 2} Q ${cx + s / 2},${cy} ${cx + s / 3},${cy + s / 2} Q ${cx},${cy + s} ${cx - s},${cy}`}
            fill="none"
            stroke="var(--accent-primary)"
            strokeWidth="2"
          />
        );
    }
  };

  return (
    <div className="simulator-page">
      <div className="page-header">
        <h1>Simulador de Colocación</h1>
        <p>Planifica la colocación perfecta de tu diseño considerando anatomía, flujo y tono de piel</p>
      </div>

      <div className="simulator-layout">
        <div className="simulator-controls">
          <div className="control-section">
            <h3>Zona del Cuerpo</h3>
            <select
              className="select-input"
              value={selectedZone?.id || ''}
              onChange={(e) => {
                const zone = bodyZones.find((z) => z.id === e.target.value) || null;
                setSelectedZone(zone);
              }}
            >
              <option value="">Seleccionar zona...</option>
              {bodyZones.map((zone) => (
                <option key={zone.id} value={zone.id}>{zone.nameEs}</option>
              ))}
            </select>

            {/* Mini body preview */}
            <div className="mini-body-wrapper">
              <MiniBodyPreview selectedZone={selectedZone} />
            </div>
          </div>

          <div className="control-section">
            <h3>Tono de Piel</h3>
            <div className="tone-mini-selector">
              {skinTones.map((tone) => (
                <button
                  key={tone.id}
                  className={`tone-mini ${selectedTone.id === tone.id ? 'selected' : ''}`}
                  style={{ background: tone.hexBase }}
                  onClick={() => setSelectedTone(tone)}
                  title={tone.nameEs}
                />
              ))}
            </div>
          </div>

          <div className="control-section">
            <h3>Forma del Diseño</h3>
            <div className="shape-selector">
              {[
                { id: 'circle' as const, label: 'Circular' },
                { id: 'vertical' as const, label: 'Vertical' },
                { id: 'horizontal' as const, label: 'Horizontal' },
                { id: 'freeform' as const, label: 'Orgánico' },
              ].map((shape) => (
                <button
                  key={shape.id}
                  className={`shape-btn ${designShape === shape.id ? 'active' : ''}`}
                  onClick={() => setDesignShape(shape.id)}
                >
                  {shape.label}
                </button>
              ))}
            </div>
          </div>

          <div className="control-section">
            <h3>Tamaño</h3>
            <div className="size-control">
              <button onClick={() => setDesignSize(Math.max(20, designSize - 10))}><ZoomOut size={16} /></button>
              <input
                type="range"
                min="20"
                max="90"
                value={designSize}
                onChange={(e) => setDesignSize(Number(e.target.value))}
              />
              <button onClick={() => setDesignSize(Math.min(90, designSize + 10))}><ZoomIn size={16} /></button>
            </div>
          </div>

          <div className="control-section">
            <h3>Posición</h3>
            <div className="position-control">
              <Move size={16} />
              <div className="position-inputs">
                <label>
                  X: <input type="range" min="15" max="85" value={positionX} onChange={(e) => setPositionX(Number(e.target.value))} />
                </label>
                <label>
                  Y: <input type="range" min="15" max="85" value={positionY} onChange={(e) => setPositionY(Number(e.target.value))} />
                </label>
              </div>
            </div>
          </div>

          <div className="control-section">
            <h3>Superposiciones</h3>
            <label className="toggle-label">
              <input
                type="checkbox"
                checked={showGuidelines}
                onChange={(e) => setShowGuidelines(e.target.checked)}
              />
              Líneas de flujo
            </label>
            <label className="toggle-label">
              <input
                type="checkbox"
                checked={showMuscleLines}
                onChange={(e) => setShowMuscleLines(e.target.checked)}
              />
              Líneas musculares
            </label>
          </div>
        </div>

        <div className="simulator-canvas">
          <svg viewBox="0 0 100 100" className="sim-svg">
            {/* Skin background */}
            <rect width="100" height="100" rx="8" fill={selectedTone.hexBase} />

            {/* Subtle skin texture */}
            <defs>
              <pattern id="skinTexture" width="4" height="4" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="0.3" fill="rgba(0,0,0,0.03)" />
              </pattern>
            </defs>
            <rect width="100" height="100" rx="8" fill="url(#skinTexture)" />

            {/* Muscle lines */}
            {showMuscleLines && selectedZone && (
              <g opacity="0.2" stroke="rgba(0,0,0,0.3)" strokeWidth="0.5">
                {selectedZone.category === 'arms' && (
                  <>
                    <path d="M 20,10 Q 30,50 20,90" fill="none" />
                    <path d="M 50,10 Q 55,50 50,90" fill="none" />
                    <path d="M 80,10 Q 70,50 80,90" fill="none" />
                  </>
                )}
                {selectedZone.category === 'torso' && (
                  <>
                    <path d="M 50,5 L 50,95" fill="none" />
                    <path d="M 20,30 Q 50,35 80,30" fill="none" />
                    <path d="M 20,50 Q 50,55 80,50" fill="none" />
                    <path d="M 20,70 Q 50,75 80,70" fill="none" />
                  </>
                )}
                {selectedZone.category === 'legs' && (
                  <>
                    <path d="M 30,10 Q 35,50 30,90" fill="none" />
                    <path d="M 50,10 Q 50,50 50,90" fill="none" />
                    <path d="M 70,10 Q 65,50 70,90" fill="none" />
                  </>
                )}
              </g>
            )}

            {/* Flow guidelines */}
            {showGuidelines && (
              <g opacity="0.25">
                <line x1="50" y1="5" x2="50" y2="95" stroke="var(--accent-secondary)" strokeWidth="0.5" strokeDasharray="2 2" />
                <line x1="5" y1="50" x2="95" y2="50" stroke="var(--accent-secondary)" strokeWidth="0.5" strokeDasharray="2 2" />
                <circle cx="50" cy="50" r="35" fill="none" stroke="var(--accent-secondary)" strokeWidth="0.3" strokeDasharray="2 2" />
              </g>
            )}

            {/* Design placeholder */}
            {renderDesignShape()}

            {/* Center dot */}
            <circle cx={positionX} cy={positionY} r="1.5" fill="var(--accent-primary)" />
          </svg>

          {!selectedZone && (
            <div className="canvas-overlay">
              <Info size={24} />
              <p>Selecciona una zona del cuerpo para comenzar la simulación</p>
            </div>
          )}
        </div>

        <div className="simulator-info">
          {selectedZone ? (
            <>
              <h3>{selectedZone.nameEs}</h3>

              <div className="info-section">
                <h4>Dirección de Flujo</h4>
                <p>{selectedZone.flowDirection}</p>
              </div>

              <div className="info-section">
                <h4>Estilos Recomendados</h4>
                <div className="tag-list">
                  {selectedZone.bestStyles.map((style) => (
                    <span key={style} className="tag">{style}</span>
                  ))}
                </div>
              </div>

              <div className="info-section">
                <h4>Paleta de Color para {selectedTone.nameEs}</h4>
                <div className="tag-list">
                  {selectedTone.recommendedColors.map((color) => (
                    <span key={color} className="tag recommended"><Check size={10} /> {color}</span>
                  ))}
                </div>
              </div>

              <div className="info-section">
                <h4>Consideraciones</h4>
                <ul className="sim-considerations">
                  {selectedZone.considerations.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              </div>

              <div className="info-section">
                <h4>Envejecimiento</h4>
                <p className="aging-note">{selectedZone.agingBehavior}</p>
              </div>
            </>
          ) : (
            <div className="info-placeholder">
              <RotateCcw size={32} />
              <p>La información de la zona aparecerá aquí cuando selecciones una zona del cuerpo</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
