import { useState } from 'react';
import { skinTones } from '../data/skinTones';
import type { SkinTone } from '../types';
import { Check, X, AlertCircle, Lightbulb, Heart } from 'lucide-react';

export default function SkinTonePage() {
  const [selectedTone, setSelectedTone] = useState<SkinTone | null>(null);
  const [compareMode, setCompareMode] = useState(false);
  const [compareTones, setCompareTones] = useState<string[]>([]);

  const handleCompareToggle = (toneId: string) => {
    setCompareTones((prev) =>
      prev.includes(toneId)
        ? prev.filter((id) => id !== toneId)
        : prev.length < 3
          ? [...prev, toneId]
          : prev
    );
  };

  const comparedTones = skinTones.filter((t) => compareTones.includes(t.id));

  return (
    <div className="skintone-page">
      <div className="page-header">
        <h1>Piel & Armonía de Color</h1>
        <p>Cada tono de piel interactúa de forma diferente con la tinta. Encuentra la paleta perfecta para cada cliente.</p>
      </div>

      <div className="tone-actions">
        <button
          className={`filter-btn ${compareMode ? 'active' : ''}`}
          onClick={() => {
            setCompareMode(!compareMode);
            setCompareTones([]);
            setSelectedTone(null);
          }}
        >
          {compareMode ? 'Salir de comparación' : 'Comparar tonos'}
        </button>
      </div>

      <div className="tone-selector">
        {skinTones.map((tone) => (
          <button
            key={tone.id}
            className={`tone-swatch ${selectedTone?.id === tone.id ? 'selected' : ''} ${compareTones.includes(tone.id) ? 'compared' : ''}`}
            onClick={() => {
              if (compareMode) {
                handleCompareToggle(tone.id);
              } else {
                setSelectedTone(selectedTone?.id === tone.id ? null : tone);
              }
            }}
          >
            <div
              className="swatch-color"
              style={{ background: tone.hexBase }}
            />
            <span className="swatch-label">{tone.nameEs}</span>
            <span className="swatch-fitz">Fitzpatrick {tone.fitzpatrick}</span>
            {compareTones.includes(tone.id) && (
              <div className="compare-badge">
                <Check size={12} />
              </div>
            )}
          </button>
        ))}
      </div>

      {compareMode && comparedTones.length > 0 && (
        <div className="compare-panel">
          <h2>Comparación de Tonos</h2>
          <div className="compare-grid" style={{ gridTemplateColumns: `repeat(${comparedTones.length}, 1fr)` }}>
            {comparedTones.map((tone) => (
              <div key={tone.id} className="compare-column">
                <div className="compare-header">
                  <div className="compare-swatch" style={{ background: tone.hexBase }} />
                  <h3>{tone.nameEs}</h3>
                </div>

                <div className="compare-section">
                  <h4><Check size={14} /> Colores Recomendados</h4>
                  <div className="tag-list">
                    {tone.recommendedColors.map((color) => (
                      <span key={color} className="tag recommended">{color}</span>
                    ))}
                  </div>
                </div>

                <div className="compare-section">
                  <h4><X size={14} /> Evitar</h4>
                  <div className="tag-list">
                    {tone.avoidColors.map((color) => (
                      <span key={color} className="tag avoid">{color}</span>
                    ))}
                  </div>
                </div>

                <div className="compare-section">
                  <h4>Contraste</h4>
                  <p>{tone.contrastTips}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {selectedTone && !compareMode && (
        <div className="tone-detail">
          <div className="tone-detail-header">
            <div className="tone-preview" style={{ background: selectedTone.hexBase }} />
            <div>
              <h2>{selectedTone.nameEs}</h2>
              <span className="fitz-badge">Escala Fitzpatrick: {selectedTone.fitzpatrick}</span>
            </div>
          </div>

          <div className="tone-detail-grid">
            <div className="tone-card recommended-card">
              <h3><Check size={18} /> Colores Recomendados</h3>
              <p className="card-subtitle">Estos colores de tinta se verán vibrantes y definidos en este tono de piel</p>
              <div className="color-list">
                {selectedTone.recommendedColors.map((color) => (
                  <div key={color} className="color-item recommended">
                    <Check size={14} />
                    <span>{color}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="tone-card avoid-card">
              <h3><X size={18} /> Colores a Evitar</h3>
              <p className="card-subtitle">Estos colores pueden no ser visibles o se desvanecerán rápidamente</p>
              <div className="color-list">
                {selectedTone.avoidColors.map((color) => (
                  <div key={color} className="color-item avoid">
                    <X size={14} />
                    <span>{color}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="tone-card healing-card">
              <h3><Heart size={18} /> Notas de Curación</h3>
              <p>{selectedTone.healingNotes}</p>
            </div>

            <div className="tone-card contrast-card">
              <h3><Lightbulb size={18} /> Tips de Contraste</h3>
              <p>{selectedTone.contrastTips}</p>
            </div>
          </div>

          <div className="ink-preview-section">
            <h3>Vista Previa de Tinta sobre Piel</h3>
            <p className="preview-note">Simulación aproximada de cómo se ven diferentes tintas sobre este tono</p>
            <div className="ink-preview-grid">
              {[
                { name: 'Negro', hex: '#1a1a1a' },
                { name: 'Gris 50%', hex: '#808080' },
                { name: 'Rojo', hex: '#cc0000' },
                { name: 'Azul', hex: '#0044cc' },
                { name: 'Verde', hex: '#006633' },
                { name: 'Amarillo', hex: '#ccaa00' },
                { name: 'Naranja', hex: '#cc5500' },
                { name: 'Púrpura', hex: '#660099' },
                { name: 'Blanco', hex: '#ffffff' },
              ].map((ink) => (
                <div key={ink.name} className="ink-preview-item">
                  <div
                    className="ink-on-skin"
                    style={{ background: selectedTone.hexBase }}
                  >
                    <div
                      className="ink-sample"
                      style={{
                        background: ink.hex,
                        opacity: selectedTone.avoidColors.some((c) =>
                          ink.name.toLowerCase().includes(c.toLowerCase().split(' ')[0])
                        ) ? 0.3 : 0.85,
                      }}
                    />
                  </div>
                  <span className="ink-name">{ink.name}</span>
                  {selectedTone.avoidColors.some((c) =>
                    ink.name.toLowerCase().includes(c.toLowerCase().split(' ')[0])
                  ) && (
                    <AlertCircle size={12} className="ink-warning" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {!selectedTone && !compareMode && (
        <div className="tone-placeholder">
          <Lightbulb size={48} />
          <h3>Selecciona un tono de piel</h3>
          <p>Elige uno de los tonos de piel arriba para ver recomendaciones detalladas de color, tips de contraste y notas de curación.</p>
        </div>
      )}
    </div>
  );
}
