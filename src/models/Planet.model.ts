import { CharacterModel } from "./Character.model";
import { FilmModel } from "./Film.model";
import { ItemModel } from "./Item.model";
import { SpeciesModel } from "./Species.model";

export interface PlanetModel extends ItemModel {
  rotationPeriod: string;
  orbitalPeriod: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surfaceWater: string;
  population: string;
  films: FilmModel[];
  characters: CharacterModel[];
  species: SpeciesModel[];
}
