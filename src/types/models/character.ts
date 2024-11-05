import { Favorite } from "./favorite";

export type Character = {
    id: string
    name: string
    description: string
    hairColor: string
    raze: string
    createdAt: Date
    favorites?: Favorite[]
}