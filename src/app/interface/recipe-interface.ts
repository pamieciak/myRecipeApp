export interface Recipe {
  name: string;
  id: number;
  description: string[];
  rating: number;
  ingriedients: Ingridient[]
   imageURL: string;
}

export interface Ingridient {
  name: string;
  value: string;
}
