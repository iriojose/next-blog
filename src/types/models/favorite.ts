import { Character } from "./character";
import { Planet } from "./planet";


export type Favorite= {
    id: string
    userId: string
    planetId: string | null
    characterId: string | null
    planet? : Planet
    character? : Character
};