import { CharacterModel } from "./Character.model";
import { ItemModel } from "./Item.model";
import { PlanetModel } from "./Planet.model";
import { SpeciesModel } from "./Species.model";
import { StarshipModel } from "./Starship.model";

export interface FilmModel extends ItemModel {
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: Date;
  characters: CharacterModel[];
  planets: PlanetModel[];
  starships: StarshipModel[];
  species: SpeciesModel[];
}
