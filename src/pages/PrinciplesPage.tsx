import { useState } from 'react';
import { flowPrinciples } from '../data/flowPrinciples';
import {
  Waves,
  Activity,
  Maximize,
  Target,
  Map,
  Scale,
  Clock,
  TrendingUp,
  ChevronDown,
  ChevronUp,
  Lightbulb,
} from 'lucide-react';

const iconMap: Record<string, typeof Waves> = {
  waves: Waves,
  activity: Activity,
  maximize: Maximize,
  target: Target,
  map: Map,
  scale: Scale,
  clock: Clock,
  'trending-up': TrendingUp,
};

export default function PrinciplesPage() {
  const [expandedPrinciple, setExpandedPrinciple] = useState<string | null>(null);

  const togglePrinciple = (id: string) => {
    setExpandedPrinciple(expandedPrinciple === id ? null : id);
  };

  return (
    <div className="principles-page">
      <div className="page-header">
        <h1>Principios de Flujo</h1>
        <p>Los fundamentos para hacer que el arte del tatuaje fluya naturalmente con el cuerpo humano</p>
      </div>

      <div className="principles-intro">
        <Lightbulb size={24} />
        <p>
          Estos principios son la base de <strong>Body Harmony</strong>. No son reglas rígidas sino guías
          que te ayudarán a desarrollar tu intuición para colocar y diseñar tatuajes que se sientan como parte
          natural del cuerpo de tu cliente.
        </p>
      </div>

      <div className="principles-list">
        {flowPrinciples.map((principle, index) => {
          const Icon = iconMap[principle.icon] || Waves;
          const isExpanded = expandedPrinciple === principle.id;

          return (
            <div
              key={principle.id}
              className={`principle-card ${isExpanded ? 'expanded' : ''}`}
            >
              <button
                className="principle-header"
                onClick={() => togglePrinciple(principle.id)}
              >
                <div className="principle-icon">
                  <Icon size={24} />
                </div>
                <div className="principle-title-area">
                  <span className="principle-number">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h2>{principle.titleEs}</h2>
                </div>
                {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>

              {isExpanded && (
                <div className="principle-content">
                  <p className="principle-description">
                    {principle.descriptionEs}
                  </p>

                  <div className="principle-examples">
                    <h3>Ejemplos Prácticos</h3>
                    <ul>
                      {principle.examples.map((example, i) => (
                        <li key={i}>{example}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <section className="quick-reference">
        <h2>Referencia Rápida</h2>
        <div className="reference-grid">
          <div className="reference-card">
            <h3>Antes de Diseñar</h3>
            <ul>
              <li>Estudia el cuerpo del cliente en movimiento</li>
              <li>Identifica el tono de piel y su reacción a la tinta</li>
              <li>Mapea cicatrices, lunares y tatuajes existentes</li>
              <li>Discute planes futuros de tatuajes</li>
              <li>Considera el estilo de vida del cliente</li>
            </ul>
          </div>
          <div className="reference-card">
            <h3>Durante la Colocación</h3>
            <ul>
              <li>Verifica la simetría con el cliente de pie</li>
              <li>Prueba en posición sentada y de pie</li>
              <li>Observa la distorsión al mover la zona</li>
              <li>Asegura que las líneas de flujo sean naturales</li>
              <li>Confirma el tamaño con el cliente a distancia</li>
            </ul>
          </div>
          <div className="reference-card">
            <h3>Consideraciones de Largo Plazo</h3>
            <ul>
              <li>Usa líneas más gruesas en zonas de alto roce</li>
              <li>Deja espacio para que el diseño "respire"</li>
              <li>Planifica para posibles cambios de peso</li>
              <li>Considera la exposición solar de la zona</li>
              <li>Piensa en expansiones futuras del diseño</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
