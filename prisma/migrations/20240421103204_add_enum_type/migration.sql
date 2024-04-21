-- CreateEnum
CREATE TYPE "ModelType" AS ENUM ('CHARACTER', 'FILM', 'PLANET', 'SPECIES', 'STARSHIP');

-- AlterTable
ALTER TABLE "Character" ADD COLUMN     "type" "ModelType" NOT NULL DEFAULT 'CHARACTER';

-- AlterTable
ALTER TABLE "Film" ADD COLUMN     "type" "ModelType" NOT NULL DEFAULT 'FILM';

-- AlterTable
ALTER TABLE "Planet" ADD COLUMN     "type" "ModelType" NOT NULL DEFAULT 'PLANET';

-- AlterTable
ALTER TABLE "Species" ADD COLUMN     "type" "ModelType" NOT NULL DEFAULT 'SPECIES';

-- AlterTable
ALTER TABLE "Starship" ADD COLUMN     "type" "ModelType" NOT NULL DEFAULT 'STARSHIP';
