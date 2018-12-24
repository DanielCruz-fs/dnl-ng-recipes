import { Ingridient } from './ingredient.model';

export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;
  public ingrients: Ingridient[];

  constructor(name: string, description: string, imagePath: string, ingridients: Ingridient[]) {
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
    this.ingrients = ingridients
  }
}