export interface Recipe {
  name: string;
  id: number;
  description: string[];
  rating: number;
  ingriedients: [{name: string, value: string}];
  imageURL: string;
}

