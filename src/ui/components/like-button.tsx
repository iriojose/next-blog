'use client'

import { useState } from 'react';
import { FaHeart } from 'react-icons/fa';
//import { toast } from 'react-toastify';

type Props = {
    like: () => void
    unlike: () => void
    liked: boolean
} 

export default function LikeButton({ like, unlike, liked }: Props) {
    const [likeState, setLikeState] = useState(liked)

    const handleClick = async() => {
        try {
            if (likeState) await unlike()
            else await like()
            setLikeState(prev => !prev)

            //toast.success('Agregado a Favoritos');
        } catch (error) {
            //toast.error('Hubo un error!');
            console.log(error)
        }
    }

    return (
        <FaHeart 
            onClick={handleClick}
            className={`text-xl transition-colors duration-300 cursor-pointer ${likeState ? 'text-red-500' : 'text-gray-300'}`}
        />
    )
}