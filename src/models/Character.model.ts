import { FilmModel } from "./Film.model";
import { ItemModel } from "./Item.model";
import { PlanetModel } from "./Planet.model";
import { SpeciesModel } from "./Species.model";
import { StarshipModel } from "./Starship.model";

export interface CharacterModel extends ItemModel {
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  homeworldId?: string;
  gender: string;
  homeworld?: PlanetModel;
  specieId?: string;
  species?: SpeciesModel;
  starships: StarshipModel[];
  films: FilmModel[];
}
