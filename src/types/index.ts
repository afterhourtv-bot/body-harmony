export interface BodyZone {
  id: string;
  name: string;
  nameEs: string;
  category: 'torso' | 'arms' | 'legs' | 'head';
  muscleGroups: string[];
  skinCharacteristics: string[];
  movementImpact: 'low' | 'medium' | 'high';
  painLevel: 1 | 2 | 3 | 4 | 5;
  agingBehavior: string;
  flowDirection: string;
  bestStyles: string[];
  considerations: string[];
  svgPath: string;
  labelPosition: { x: number; y: number };
}

export interface SkinTone {
  id: string;
  name: string;
  nameEs: string;
  hexBase: string;
  fitzpatrick: number;
  recommendedColors: string[];
  avoidColors: string[];
  healingNotes: string;
  contrastTips: string;
}

export interface FlowPrinciple {
  id: string;
  title: string;
  titleEs: string;
  description: string;
  descriptionEs: string;
  icon: string;
  examples: string[];
}

export interface ClientProfile {
  id: string;
  name: string;
  skinToneId: string;
  bodyNotes: string;
  measurements: Record<string, string>;
  existingTattoos: TattooRecord[];
  createdAt: string;
}

export interface TattooRecord {
  id: string;
  zoneId: string;
  style: string;
  size: 'small' | 'medium' | 'large' | 'full';
  description: string;
  date: string;
  notes: string;
}

export type AppSection = 'home' | 'bodymap' | 'skintone' | 'anatomy' | 'clients' | 'simulator' | 'principles';
