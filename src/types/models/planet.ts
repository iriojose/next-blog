import { Favorite } from "./favorite";

export type Planet = {
    id: string
    name: string
    description: string
    population: number
    wheather: string
    createdAt: Date
    favorites?: Favorite[]
};

