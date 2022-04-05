export interface Recipe {
  name: string;
  id: number;
  description: string[];
  rating: number;
  ingredients: Ingredient[];
  imageURL: string;
}

export interface Ingredient {
  name: string;
  value: string;
}
