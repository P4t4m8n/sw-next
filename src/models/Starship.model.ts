import { CharacterModel } from "./Character.model";
import { FilmModel } from "./Film.model";
import { ItemModel } from "./Item.model";

export interface StarshipModel extends ItemModel {
  model: string;
  manufacturer: string;
  costInCredits: string;
  length: string;
  maxAtmospheringSpeed: string;
  crew: string;
  passengers: string;
  cargoCapacity: string;
  consumables: string;
  hyperdriveRating: string;
  MGLT: string;
  starshipClass: string;
  characters: CharacterModel[];
  films: FilmModel[];
}
