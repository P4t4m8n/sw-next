import { FilmModel } from "@/models/Film.model";
import Image from "next/image";
import Link from "next/link";

interface Props {
  film: FilmModel;
}

export default function PreviewFilm({ film }: Props) {
  const { image, name, id, release_date, episode_id } = film;

  function convertToLocalDate(dateString: Date) {
    const date = new Date(dateString);
    return date.toLocaleDateString("he-IL");
  }
  const localDate = convertToLocalDate(release_date);

  return (
    <>
      <div className={`film-preview-front`}>
        <Image src={""} alt={name} />
        <Link href={`/film/${id}`}>{name}</Link>
      </div>
      <div className="film-preview-back flex flex-column">
        <h2>{name}</h2>
        <h3>Release Date:{localDate}</h3>
        <h4>Episode Number: {episode_id}</h4>
      </div>
    </>
  );
}
