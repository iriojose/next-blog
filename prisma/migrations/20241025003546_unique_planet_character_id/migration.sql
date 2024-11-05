/*
  Warnings:

  - A unique constraint covering the columns `[planetId]` on the table `Favorite` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[characterId]` on the table `Favorite` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Favorite_planetId_key" ON "Favorite"("planetId");

-- CreateIndex
CREATE UNIQUE INDEX "Favorite_characterId_key" ON "Favorite"("characterId");
