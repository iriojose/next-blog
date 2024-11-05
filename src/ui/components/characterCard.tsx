import { Character } from "../../types/models/character";
import LikeButton from "./like-button";
import { characterLike, charactersUnlike } from "@/actions/favoritesActions";

type Props = {
    character: Character
}
  
export default function CharacterCard({ character }: Props) {
    const liked = character.favorites && character.favorites.length > 0 ? true:false
    
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white mt-4 mx-4">
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 flex items-center gap-3">
                    <div>
                        {character.name}
                    </div>

                    <LikeButton 
                        unlike={charactersUnlike.bind(null, character.id)}
                        like={characterLike.bind(null, character.id)} 
                        liked={liked}  
                    />           
                </div>

                <p className="text-gray-700 text-base">{character.description}</p>
            </div>

            <div className="px-6 pt-4 pb-2">
                <div className="text-gray-800">
                    <span className="font-semibold">Hair Color: </span>{character.hairColor}
                </div>
                <div className="text-gray-800">
                    <span className="font-semibold">Raze: </span>{character.raze}
                </div>
            </div>
        </div>
    );
}
  