export interface Recipe {
  name: string;
  id: number;
  description: string[];
  rating: number;
  ingredients: Ingredient[];
}

export interface Ingredient {
  name: string;
  value: string;
}
