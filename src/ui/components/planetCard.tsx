import { Planet } from "../../types/models/planet";
import LikeButton from "./like-button";
import { planetLike, planetUnlike } from "@/actions/favoritesActions";

type Props = {
    planet: Planet
}
  
export default function PlanetCard({ planet }: Props) {
    const liked = planet.favorites && planet.favorites.length > 0 ? true:false

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 bg-white">
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 flex items-center gap-3">
                    <div>{planet.name}</div>
                    <LikeButton 
                        unlike={planetUnlike.bind(null, planet.id)}
                        like={planetLike.bind(null, planet.id)} 
                        liked={liked}  
                    /> 
                </div>
                <p className="text-gray-700 text-base mb-2">{planet.description}</p>
                <p className="text-gray-700 text-sm"><strong>Población:</strong> {planet.population.toLocaleString()}</p>
                <p className="text-gray-700 text-sm"><strong>Clima:</strong> {planet.wheather}</p>
            </div>
        </div>
    );
}
  