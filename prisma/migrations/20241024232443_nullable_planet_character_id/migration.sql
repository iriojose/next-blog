-- DropForeignKey
ALTER TABLE "Favorite" DROP CONSTRAINT "Favorite_characterId_fkey";

-- DropForeignKey
ALTER TABLE "Favorite" DROP CONSTRAINT "Favorite_planetId_fkey";

-- AlterTable
ALTER TABLE "Favorite" ALTER COLUMN "planetId" DROP NOT NULL,
ALTER COLUMN "characterId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Favorite" ADD CONSTRAINT "Favorite_planetId_fkey" FOREIGN KEY ("planetId") REFERENCES "Planet"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Favorite" ADD CONSTRAINT "Favorite_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "Character"("id") ON DELETE SET NULL ON UPDATE CASCADE;
