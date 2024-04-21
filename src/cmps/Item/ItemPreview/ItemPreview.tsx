"use client";

import { useFlip } from "@/hooks/useFlip";
import { CharacterModel } from "@/models/Character.model";
import { FilmModel } from "@/models/Film.model";
import { PlanetModel } from "@/models/Planet.model";
import { SpeciesModel } from "@/models/Species.model";
import { StarshipModel } from "@/models/Starship.model";
import { FlipSvg } from "../../SVGs/svg.service";
import PreviewCharacter from "./Previews/PreviewCharacter";
import PreviewPlanet from "./Previews/PreviewPlanet";
import PreviewSpecies from "./Previews/PreviewSpecie";
import PreviewStarship from "./Previews/PreviewStarship";
import PreviewFilm from "./Previews/PreviewFilm";

interface Props {
  item: CharacterModel | FilmModel | PlanetModel | SpeciesModel | StarshipModel;
}

export default function ItemPreview({ item }: Props) {
  const [flip, toggleFlip] = useFlip();
  const { id, type } = item;
  return (
    <li className={`item-preview ${flip ? "flipped" : ""}`} key={id}>
      <button className="flip-btn" onClick={toggleFlip}>
        <FlipSvg />
      </button>
      <DynamicPreviewCmp item={item} />
    </li>
  );
}

function DynamicPreviewCmp({ item }: Props) {
  switch (item.type) {
    case "CHARACTER":
      return <PreviewCharacter character={item as CharacterModel} />;
    case "PLANET":
      return <PreviewPlanet planet={item as PlanetModel} />;
    case "SPECIES":
      return <PreviewSpecies species={item as SpeciesModel} />;
    case "STARSHIP":
      return <PreviewStarship starship={item as StarshipModel} />;
    default:
      return <PreviewFilm film={item as FilmModel} />;
  }
}
