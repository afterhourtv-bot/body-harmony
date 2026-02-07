import type { SkinTone } from '../types';

export const skinTones: SkinTone[] = [
  {
    id: 'type-1',
    name: 'Very Light / Porcelain',
    nameEs: 'Muy Clara / Porcelana',
    hexBase: '#FDEBD0',
    fitzpatrick: 1,
    recommendedColors: ['Negro', 'Gris', 'Rojo intenso', 'Azul oscuro', 'Verde bosque', 'Púrpura'],
    avoidColors: ['Amarillo claro', 'Blanco puro (se desvanece)'],
    healingNotes: 'Tiende a enrojecerse durante la curación. Los moretones son más visibles. La piel se irrita con facilidad.',
    contrastTips: 'Todos los colores muestran alto contraste. Ideal para trabajo de color vibrante y detalles finos. El sombreado suave se aprecia especialmente bien.'
  },
  {
    id: 'type-2',
    name: 'Light / Fair',
    nameEs: 'Clara',
    hexBase: '#F5CBA7',
    fitzpatrick: 2,
    recommendedColors: ['Negro', 'Todos los grises', 'Rojos', 'Azules', 'Verdes', 'Naranjas'],
    avoidColors: ['Amarillo pálido', 'Rosa muy claro'],
    healingNotes: 'Curación relativamente rápida. Puede aparecer enrojecimiento que se resuelve en 2-3 semanas.',
    contrastTips: 'Excelente lienzo para la mayoría de estilos. Los colores pastel pueden funcionar pero con cuidado. El negro se ve especialmente definido.'
  },
  {
    id: 'type-3',
    name: 'Medium / Olive',
    nameEs: 'Media / Oliva',
    hexBase: '#D4A574',
    fitzpatrick: 3,
    recommendedColors: ['Negro intenso', 'Rojo oscuro', 'Verde oscuro', 'Azul profundo', 'Naranja quemado'],
    avoidColors: ['Pasteles claros', 'Amarillo', 'Rosa claro'],
    healingNotes: 'Buena curación general. El tono oliva puede alterar ligeramente la percepción de algunos colores.',
    contrastTips: 'Los colores necesitan más saturación para destacar. El trabajo en negro y gris funciona excelente. Los colores cálidos se integran naturalmente.'
  },
  {
    id: 'type-4',
    name: 'Medium-Dark / Tan',
    nameEs: 'Media-Oscura / Canela',
    hexBase: '#B8860B',
    fitzpatrick: 4,
    recommendedColors: ['Negro sólido', 'Rojo intenso', 'Naranja brillante', 'Blanco (highlights)'],
    avoidColors: ['Azul claro', 'Verde claro', 'Pasteles', 'Gris claro'],
    healingNotes: 'Mayor riesgo de queloides. Monitorear la curación de cerca. Puede requerir sesiones más espaciadas.',
    contrastTips: 'Priorizar alto contraste. El blackwork es ideal. Los colores deben ser muy saturados. El sombreado requiere técnica precisa.'
  },
  {
    id: 'type-5',
    name: 'Dark / Brown',
    nameEs: 'Oscura / Marrón',
    hexBase: '#8B6914',
    fitzpatrick: 5,
    recommendedColors: ['Negro denso', 'Rojo oscuro', 'Blanco para acentos', 'Naranja intenso'],
    avoidColors: ['Azul', 'Verde', 'Púrpura', 'Colores claros en general'],
    healingNotes: 'Mayor predisposición a queloides. La tinta clara puede desaparecer. Sesiones más cortas recomendadas.',
    contrastTips: 'El blackwork con patrones de espacio negativo es poderoso. Los diseños tribales y dotwork funcionan excelente. Evitar sombreado sutil.'
  },
  {
    id: 'type-6',
    name: 'Very Dark / Deep',
    nameEs: 'Muy Oscura / Profunda',
    hexBase: '#654321',
    fitzpatrick: 6,
    recommendedColors: ['Negro ultra denso', 'Scarificación como alternativa', 'Blanco bold'],
    avoidColors: ['La mayoría de colores', 'Tonos medios', 'Pasteles'],
    healingNotes: 'Alto riesgo de queloides. Requiere artista experimentado. Las pruebas de parche son esenciales.',
    contrastTips: 'Máximo contraste con negro denso y patrones de espacio negativo. Los diseños geométricos y tribales con líneas gruesas son los más efectivos.'
  }
];
