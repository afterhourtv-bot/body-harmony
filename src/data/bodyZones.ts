import type { BodyZone } from '../types';

export const bodyZones: BodyZone[] = [
  {
    id: 'upper-arm-outer',
    name: 'Outer Upper Arm',
    nameEs: 'Brazo Superior Externo',
    category: 'arms',
    muscleGroups: ['Deltoides', 'Bíceps lateral', 'Tríceps'],
    skinCharacteristics: ['Piel de grosor medio', 'Buena elasticidad', 'Superficie relativamente plana'],
    movementImpact: 'medium',
    painLevel: 2,
    agingBehavior: 'Distorsión moderada con cambios de masa muscular. Los diseños verticales mantienen mejor su forma.',
    flowDirection: 'Los diseños deben seguir el eje longitudinal del brazo, envolviendo suavemente la curvatura del deltoides.',
    bestStyles: ['Neo-tradicional', 'Japonés', 'Realismo', 'Blackwork'],
    considerations: [
      'Considerar cómo el diseño conecta con el hombro',
      'La curvatura del deltoides puede distorsionar círculos perfectos',
      'Zona ideal para piezas medianas a grandes',
      'Pensar en extensión futura hacia manga completa'
    ],
    svgPath: 'M 140,95 Q 128,110 122,140 Q 118,160 120,185 Q 135,185 148,180 Q 155,160 155,140 Q 155,115 150,100 Z',
    labelPosition: { x: 110, y: 140 }
  },
  {
    id: 'upper-arm-inner',
    name: 'Inner Upper Arm',
    nameEs: 'Brazo Superior Interno',
    category: 'arms',
    muscleGroups: ['Bíceps', 'Braquial'],
    skinCharacteristics: ['Piel más delgada', 'Alta sensibilidad', 'Menos exposición solar'],
    movementImpact: 'medium',
    painLevel: 4,
    agingBehavior: 'Tendencia a perder firmeza. Los diseños pueden expandirse con ganancia de peso.',
    flowDirection: 'Seguir la línea natural del bíceps. Evitar diseños que crucen la axila.',
    bestStyles: ['Lettering', 'Fineline', 'Minimalista', 'Script'],
    considerations: [
      'Zona muy sensible al dolor',
      'Menos visible, ideal para piezas íntimas',
      'La piel tiende a ser más clara aquí',
      'El roce constante puede afectar la curación'
    ],
    svgPath: 'M 160,100 Q 165,120 168,140 Q 170,160 168,180 Q 155,185 148,180 Q 155,160 155,140 Q 155,115 158,100 Z',
    labelPosition: { x: 165, y: 140 }
  },
  {
    id: 'forearm',
    name: 'Forearm',
    nameEs: 'Antebrazo',
    category: 'arms',
    muscleGroups: ['Extensores', 'Flexores', 'Braquiorradial'],
    skinCharacteristics: ['Piel de grosor medio', 'Superficie visible', 'Buena retención de tinta'],
    movementImpact: 'medium',
    painLevel: 3,
    agingBehavior: 'Buena retención general. La zona de la muñeca tiende a expandirse ligeramente.',
    flowDirection: 'Los diseños longitudinales fluyen naturalmente. Considerar la vista desde múltiples ángulos.',
    bestStyles: ['Todas los estilos funcionan', 'Realismo', 'Geométrico', 'Tradicional'],
    considerations: [
      'Alta visibilidad — considerar impacto profesional',
      'La torsión del antebrazo cambia la perspectiva',
      'Diseñar pensando en posición natural del brazo',
      'La cara interna retiene mejor los detalles finos'
    ],
    svgPath: 'M 120,190 Q 115,210 112,230 Q 110,250 108,265 Q 118,270 128,265 Q 130,250 132,230 Q 134,210 135,190 Z',
    labelPosition: { x: 100, y: 230 }
  },
  {
    id: 'chest',
    name: 'Chest',
    nameEs: 'Pecho',
    category: 'torso',
    muscleGroups: ['Pectoral mayor', 'Pectoral menor', 'Serrato anterior'],
    skinCharacteristics: ['Grosor variable', 'Puede tener vello', 'Área amplia y relativamente plana'],
    movementImpact: 'medium',
    painLevel: 3,
    agingBehavior: 'Significativa distorsión con cambios de peso. En mujeres, considerar cambios hormonales.',
    flowDirection: 'Los diseños deben seguir la curvatura del pectoral y fluir con la clavícula como guía superior.',
    bestStyles: ['Lettering', 'Neo-tradicional', 'Ornamental', 'Blackwork', 'Script'],
    considerations: [
      'El esternón es extremadamente doloroso',
      'Considerar simetría bilateral',
      'Los cambios de peso afectan significativamente',
      'En mujeres, el tejido mamario cambia la superficie'
    ],
    svgPath: 'M 180,80 Q 195,78 215,78 Q 235,78 250,80 Q 252,95 250,110 Q 240,115 215,118 Q 190,115 180,110 Q 178,95 180,80 Z',
    labelPosition: { x: 215, y: 95 }
  },
  {
    id: 'ribs',
    name: 'Ribs',
    nameEs: 'Costillas',
    category: 'torso',
    muscleGroups: ['Intercostales', 'Oblicuo externo', 'Serrato anterior'],
    skinCharacteristics: ['Piel delgada sobre hueso', 'Muy sensible', 'Superficie curva'],
    movementImpact: 'high',
    painLevel: 5,
    agingBehavior: 'Relativamente estable, pero cambios de peso causan distorsión horizontal.',
    flowDirection: 'Seguir la curvatura de las costillas. Los diseños verticales fluyen mejor con la respiración.',
    bestStyles: ['Script', 'Fineline', 'Floral', 'Lettering', 'Geométrico'],
    considerations: [
      'Una de las zonas más dolorosas',
      'La respiración mueve constantemente la piel',
      'Difícil mantener al cliente quieto',
      'Los diseños largos y verticales funcionan bien'
    ],
    svgPath: 'M 170,112 Q 165,125 162,145 Q 160,160 162,175 Q 175,178 178,170 Q 180,155 180,140 Q 180,125 177,112 Z',
    labelPosition: { x: 152, y: 145 }
  },
  {
    id: 'back-upper',
    name: 'Upper Back',
    nameEs: 'Espalda Superior',
    category: 'torso',
    muscleGroups: ['Trapecio', 'Romboides', 'Infraespinoso'],
    skinCharacteristics: ['Piel gruesa', 'Gran superficie plana', 'Buena para detalles'],
    movementImpact: 'low',
    painLevel: 2,
    agingBehavior: 'Excelente retención. Una de las zonas más estables del cuerpo.',
    flowDirection: 'Seguir la línea de los hombros y la columna como eje central de simetría.',
    bestStyles: ['Japonés', 'Realismo', 'Tribal', 'Ornamental', 'Blackwork'],
    considerations: [
      'Lienzo más grande del cuerpo',
      'El cliente no puede ver fácilmente el resultado',
      'Ideal para piezas grandes y detalladas',
      'La columna vertebral como línea central'
    ],
    svgPath: 'M 180,80 Q 195,75 215,75 Q 235,75 250,80 Q 255,100 252,125 Q 240,130 215,132 Q 190,130 178,125 Q 175,100 180,80 Z',
    labelPosition: { x: 215, y: 105 }
  },
  {
    id: 'back-lower',
    name: 'Lower Back',
    nameEs: 'Espalda Baja',
    category: 'torso',
    muscleGroups: ['Dorsal ancho', 'Erector de la columna', 'Cuadrado lumbar'],
    skinCharacteristics: ['Piel de grosor medio', 'Se estira con movimiento', 'Superficie curva'],
    movementImpact: 'medium',
    painLevel: 3,
    agingBehavior: 'Susceptible a cambios con ganancia de peso y embarazo.',
    flowDirection: 'Los diseños horizontales siguen la línea de la cintura. Usar la columna como eje.',
    bestStyles: ['Mandala', 'Ornamental', 'Tribal', 'Geométrico'],
    considerations: [
      'Considerar cambios futuros de peso',
      'La postura afecta la apariencia del diseño',
      'Zona que se expande en embarazo',
      'Los diseños simétricos funcionan bien aquí'
    ],
    svgPath: 'M 185,135 Q 200,132 215,132 Q 230,132 245,135 Q 248,150 245,170 Q 235,175 215,178 Q 195,175 185,170 Q 182,150 185,135 Z',
    labelPosition: { x: 215, y: 155 }
  },
  {
    id: 'thigh-front',
    name: 'Front Thigh',
    nameEs: 'Muslo Frontal',
    category: 'legs',
    muscleGroups: ['Cuádriceps', 'Sartorio', 'Tensor de la fascia lata'],
    skinCharacteristics: ['Piel gruesa', 'Gran superficie', 'Buena retención de tinta'],
    movementImpact: 'medium',
    painLevel: 2,
    agingBehavior: 'Cambios moderados con peso. La cara externa es más estable que la interna.',
    flowDirection: 'Los diseños deben considerar la visibilidad sentado vs. de pie. Fluir con la curva del muslo.',
    bestStyles: ['Japonés', 'Realismo', 'Neo-tradicional', 'Blackwork'],
    considerations: [
      'Gran lienzo, bueno para piezas detalladas',
      'El diseño cambia de perspectiva sentado',
      'La cara interna es más dolorosa',
      'Considerar extensión hacia rodilla'
    ],
    svgPath: 'M 198,195 Q 195,220 193,245 Q 192,265 192,280 Q 202,282 212,280 Q 213,265 214,245 Q 215,220 215,195 Z',
    labelPosition: { x: 185, y: 240 }
  },
  {
    id: 'calf',
    name: 'Calf',
    nameEs: 'Pantorrilla',
    category: 'legs',
    muscleGroups: ['Gastrocnemio', 'Sóleo', 'Tibial posterior'],
    skinCharacteristics: ['Piel de grosor medio', 'Forma curva pronunciada', 'Buena visibilidad'],
    movementImpact: 'medium',
    painLevel: 3,
    agingBehavior: 'Relativamente estable. La tibia puede ser problemática por falta de tejido.',
    flowDirection: 'Seguir la forma del diamante del gastrocnemio. Los diseños envolventes funcionan mejor.',
    bestStyles: ['Japonés', 'Tradicional', 'Neo-tradicional', 'Realismo'],
    considerations: [
      'La curvatura pronunciada distorsiona diseños planos',
      'Considerar vista posterior y lateral',
      'La espinilla es muy dolorosa',
      'El vello puede afectar la visibilidad'
    ],
    svgPath: 'M 193,295 Q 191,315 190,335 Q 189,355 190,370 Q 198,372 206,370 Q 208,355 208,335 Q 209,315 208,295 Z',
    labelPosition: { x: 180, y: 335 }
  },
  {
    id: 'shoulder',
    name: 'Shoulder',
    nameEs: 'Hombro',
    category: 'arms',
    muscleGroups: ['Deltoides anterior', 'Deltoides lateral', 'Deltoides posterior'],
    skinCharacteristics: ['Piel gruesa sobre músculo', 'Superficie esférica', 'Alta movilidad'],
    movementImpact: 'high',
    painLevel: 2,
    agingBehavior: 'Se mantiene relativamente estable. Buena zona para tatuajes longevos.',
    flowDirection: 'Los diseños deben envolver la curvatura esférica. Conectar con brazo y pecho para continuidad.',
    bestStyles: ['Mandala', 'Ornamental', 'Japonés', 'Armadura', 'Geométrico'],
    considerations: [
      'La esfericidad distorsiona diseños bidimensionales',
      'Punto de conexión crítico entre brazo y torso',
      'Ideal para diseños que fluyen en 360°',
      'El acromion puede ser doloroso'
    ],
    svgPath: 'M 155,70 Q 148,75 140,85 Q 135,95 140,95 Q 148,90 155,85 Q 162,80 165,75 Q 162,70 155,70 Z',
    labelPosition: { x: 130, y: 80 }
  },
  {
    id: 'neck',
    name: 'Neck',
    nameEs: 'Cuello',
    category: 'head',
    muscleGroups: ['Esternocleidomastoideo', 'Trapecio', 'Escalenos'],
    skinCharacteristics: ['Piel muy delgada', 'Alta sensibilidad', 'Mucho movimiento'],
    movementImpact: 'high',
    painLevel: 5,
    agingBehavior: 'La piel del cuello pierde elasticidad rápidamente. Los diseños pueden distorsionarse con la edad.',
    flowDirection: 'Seguir las líneas del esternocleidomastoideo. Los diseños deben fluir con el giro de la cabeza.',
    bestStyles: ['Lettering', 'Fineline', 'Minimalista', 'Script', 'Tribal'],
    considerations: [
      'Zona extremadamente visible',
      'Muy doloroso',
      'Considerar implicaciones profesionales',
      'La piel envejece rápido aquí'
    ],
    svgPath: 'M 205,50 Q 210,48 218,48 Q 225,48 230,50 Q 232,58 230,68 Q 225,70 218,70 Q 210,70 205,68 Q 203,58 205,50 Z',
    labelPosition: { x: 215, y: 58 }
  },
  {
    id: 'hand',
    name: 'Hand',
    nameEs: 'Mano',
    category: 'arms',
    muscleGroups: ['Interóseos', 'Lumbricales', 'Tenar'],
    skinCharacteristics: ['Piel muy fina en dorso', 'Alta movilidad', 'Exposición solar constante'],
    movementImpact: 'high',
    painLevel: 4,
    agingBehavior: 'Los tatuajes en las manos se degradan rápidamente. Requieren retoques frecuentes.',
    flowDirection: 'Seguir la anatomía de los tendones y los huesos metacarpianos.',
    bestStyles: ['Tradicional', 'Blackwork', 'Lettering', 'Minimalista'],
    considerations: [
      'Se desvanecen más rápido que otras zonas',
      'El lavado frecuente de manos afecta la tinta',
      'Muy visible — considerar impacto social',
      'Los dedos retienen mal la tinta'
    ],
    svgPath: 'M 108,270 Q 105,280 102,290 Q 100,298 103,300 Q 108,298 112,290 Q 115,282 115,272 Z',
    labelPosition: { x: 95, y: 285 }
  },
  {
    id: 'foot',
    name: 'Foot',
    nameEs: 'Pie',
    category: 'legs',
    muscleGroups: ['Extensores cortos', 'Peroneo', 'Tibial anterior'],
    skinCharacteristics: ['Piel fina en empeine', 'Roce constante con calzado', 'Superficie curva'],
    movementImpact: 'medium',
    painLevel: 4,
    agingBehavior: 'Alta tasa de degradación. El roce con calzado desvanece la tinta.',
    flowDirection: 'Seguir la línea del empeine hacia los dedos. Los diseños deben considerar el calzado.',
    bestStyles: ['Fineline', 'Minimalista', 'Script', 'Floral'],
    considerations: [
      'La curación es difícil por el uso de calzado',
      'Se desvanece relativamente rápido',
      'El tobillo interno es muy doloroso',
      'El hinchamiento post-tatuaje es común'
    ],
    svgPath: 'M 190,380 Q 188,388 186,395 Q 185,402 188,404 Q 195,402 198,395 Q 200,388 200,380 Z',
    labelPosition: { x: 180, y: 392 }
  },
  {
    id: 'abdomen',
    name: 'Abdomen',
    nameEs: 'Abdomen',
    category: 'torso',
    muscleGroups: ['Recto abdominal', 'Oblicuo externo', 'Transverso abdominal'],
    skinCharacteristics: ['Elasticidad variable', 'Susceptible a estrías', 'Superficie que cambia con respiración'],
    movementImpact: 'high',
    painLevel: 4,
    agingBehavior: 'Zona de mayor cambio con peso y embarazo. Los diseños pueden distorsionarse significativamente.',
    flowDirection: 'Usar el ombligo como punto de referencia. Los diseños simétricos siguen la línea alba.',
    bestStyles: ['Ornamental', 'Mandala', 'Geométrico', 'Underboob'],
    considerations: [
      'Alto riesgo de distorsión con cambios de peso',
      'El ombligo como punto focal o a evitar',
      'Las estrías pueden afectar la tinta',
      'Considerar planes de embarazo futuro'
    ],
    svgPath: 'M 192,120 Q 200,118 215,118 Q 230,118 238,120 Q 240,140 238,160 Q 232,168 215,170 Q 198,168 192,160 Q 190,140 192,120 Z',
    labelPosition: { x: 215, y: 142 }
  },
  {
    id: 'hip',
    name: 'Hip',
    nameEs: 'Cadera',
    category: 'torso',
    muscleGroups: ['Glúteo medio', 'Tensor de fascia lata', 'Ilíaco'],
    skinCharacteristics: ['Piel gruesa', 'Puede tener estrías', 'Superficie curva'],
    movementImpact: 'medium',
    painLevel: 3,
    agingBehavior: 'Cambios moderados. La zona de la cresta ilíaca es relativamente estable.',
    flowDirection: 'Seguir la curva natural de la cadera y la cresta ilíaca.',
    bestStyles: ['Floral', 'Ornamental', 'Fineline', 'Geométrico'],
    considerations: [
      'Zona semi-privada',
      'La cresta ilíaca puede ser dolorosa',
      'Considerar cómo se ve con diferente ropa',
      'Los diseños asimétricos fluyen bien aquí'
    ],
    svgPath: 'M 175,170 Q 180,180 185,190 Q 190,195 195,195 Q 192,185 188,175 Q 184,168 178,165 Z',
    labelPosition: { x: 168, y: 182 }
  }
];
