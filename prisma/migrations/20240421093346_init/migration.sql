-- CreateTable
CREATE TABLE "Film" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "episode_id" INTEGER NOT NULL,
    "opening_crawl" TEXT NOT NULL,
    "director" TEXT NOT NULL,
    "producer" TEXT NOT NULL,
    "image" BYTEA NOT NULL,
    "release_date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Film_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Character" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "height" TEXT NOT NULL,
    "mass" TEXT NOT NULL,
    "hair_color" TEXT NOT NULL,
    "skin_color" TEXT NOT NULL,
    "eye_color" TEXT NOT NULL,
    "birth_year" TEXT NOT NULL,
    "image" BYTEA NOT NULL,
    "homeworldId" TEXT,
    "gender" TEXT NOT NULL,
    "specieId" TEXT,

    CONSTRAINT "Character_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Planet" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "rotationPeriod" TEXT NOT NULL,
    "orbitalPeriod" TEXT NOT NULL,
    "diameter" TEXT NOT NULL,
    "climate" TEXT NOT NULL,
    "image" BYTEA NOT NULL,
    "gravity" TEXT NOT NULL,
    "terrain" TEXT NOT NULL,
    "surfaceWater" TEXT NOT NULL,
    "population" TEXT NOT NULL,

    CONSTRAINT "Planet_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Starship" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "manufacturer" TEXT NOT NULL,
    "costInCredits" TEXT NOT NULL,
    "length" TEXT NOT NULL,
    "maxAtmospheringSpeed" TEXT NOT NULL,
    "crew" TEXT NOT NULL,
    "passengers" TEXT NOT NULL,
    "cargoCapacity" TEXT NOT NULL,
    "consumables" TEXT NOT NULL,
    "hyperdriveRating" TEXT NOT NULL,
    "MGLT" TEXT NOT NULL,
    "starshipClass" TEXT NOT NULL,
    "image" BYTEA NOT NULL,

    CONSTRAINT "Starship_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Species" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "classification" TEXT NOT NULL,
    "designation" TEXT NOT NULL,
    "averageHeight" TEXT NOT NULL,
    "skinColors" TEXT NOT NULL,
    "hairColors" TEXT NOT NULL,
    "eyeColors" TEXT NOT NULL,
    "averageLifespan" TEXT NOT NULL,
    "language" TEXT NOT NULL,
    "homeworldId" TEXT,

    CONSTRAINT "Species_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_FilmToPlanet" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_FilmToStarship" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_FilmToSpecies" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_CharacterToStarship" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_CharacterToFilm" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_FilmToPlanet_AB_unique" ON "_FilmToPlanet"("A", "B");

-- CreateIndex
CREATE INDEX "_FilmToPlanet_B_index" ON "_FilmToPlanet"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_FilmToStarship_AB_unique" ON "_FilmToStarship"("A", "B");

-- CreateIndex
CREATE INDEX "_FilmToStarship_B_index" ON "_FilmToStarship"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_FilmToSpecies_AB_unique" ON "_FilmToSpecies"("A", "B");

-- CreateIndex
CREATE INDEX "_FilmToSpecies_B_index" ON "_FilmToSpecies"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CharacterToStarship_AB_unique" ON "_CharacterToStarship"("A", "B");

-- CreateIndex
CREATE INDEX "_CharacterToStarship_B_index" ON "_CharacterToStarship"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CharacterToFilm_AB_unique" ON "_CharacterToFilm"("A", "B");

-- CreateIndex
CREATE INDEX "_CharacterToFilm_B_index" ON "_CharacterToFilm"("B");

-- AddForeignKey
ALTER TABLE "Character" ADD CONSTRAINT "Character_homeworldId_fkey" FOREIGN KEY ("homeworldId") REFERENCES "Planet"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Character" ADD CONSTRAINT "Character_specieId_fkey" FOREIGN KEY ("specieId") REFERENCES "Species"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Species" ADD CONSTRAINT "Species_homeworldId_fkey" FOREIGN KEY ("homeworldId") REFERENCES "Planet"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FilmToPlanet" ADD CONSTRAINT "_FilmToPlanet_A_fkey" FOREIGN KEY ("A") REFERENCES "Film"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FilmToPlanet" ADD CONSTRAINT "_FilmToPlanet_B_fkey" FOREIGN KEY ("B") REFERENCES "Planet"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FilmToStarship" ADD CONSTRAINT "_FilmToStarship_A_fkey" FOREIGN KEY ("A") REFERENCES "Film"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FilmToStarship" ADD CONSTRAINT "_FilmToStarship_B_fkey" FOREIGN KEY ("B") REFERENCES "Starship"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FilmToSpecies" ADD CONSTRAINT "_FilmToSpecies_A_fkey" FOREIGN KEY ("A") REFERENCES "Film"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FilmToSpecies" ADD CONSTRAINT "_FilmToSpecies_B_fkey" FOREIGN KEY ("B") REFERENCES "Species"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CharacterToStarship" ADD CONSTRAINT "_CharacterToStarship_A_fkey" FOREIGN KEY ("A") REFERENCES "Character"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CharacterToStarship" ADD CONSTRAINT "_CharacterToStarship_B_fkey" FOREIGN KEY ("B") REFERENCES "Starship"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CharacterToFilm" ADD CONSTRAINT "_CharacterToFilm_A_fkey" FOREIGN KEY ("A") REFERENCES "Character"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CharacterToFilm" ADD CONSTRAINT "_CharacterToFilm_B_fkey" FOREIGN KEY ("B") REFERENCES "Film"("id") ON DELETE CASCADE ON UPDATE CASCADE;
