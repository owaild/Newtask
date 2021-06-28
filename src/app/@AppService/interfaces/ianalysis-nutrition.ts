export interface IAnalysisNutrition {
  calories?: number;
  cautions?: [];
  dietLabels?: [];
  healthLabels?: [];
  ingredients?: Ingredients[];
  totalDaily?: {};
  totalNutrients?: ITotalNutrients;
  totalNutrientsKCal?: {};
  totalWeight?: number;
  uri?: string;
  yield?: number;
}

export interface Ingredients {
  parsed: any;
  text: string;
}

export interface ITotalNutrients {
  CHOLE?: INutrients;
  NA?: INutrients;
  FIBTG?: INutrients;
  PROCNT?: INutrients;
  VITB6A?: INutrients;
  VITB12?: INutrients;
  VITC?: INutrients;
  VITD?: INutrients;
  CA?: INutrients;
  FE?: INutrients;
  K?:INutrients;
}
export interface INutrients {
  label: string;
  quantity: number;
  unit: string;
}
