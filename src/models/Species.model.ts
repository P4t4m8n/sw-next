import { CharacterModel } from "./Character.model";
import { FilmModel } from "./Film.model";
import { ItemModel } from "./Item.model";
import { PlanetModel } from "./Planet.model";

export interface SpeciesModel extends ItemModel {
  classification: string;
  designation: string;
  averageHeight: string;
  skinColors: string;
  hairColors: string;
  eyeColors: string;
  averageLifespan: string;
  language: string;
  homeworldId?: string;
  homeworld?: PlanetModel;
  characters: CharacterModel[];
  films: FilmModel[];
}
