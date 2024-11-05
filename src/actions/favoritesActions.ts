'use server'

import prisma from "@/lib/prisma"
const userId = "0c5db295-0250-4520-b577-089fbbcd90cc"

export async function planetLike(id: string) {
    await prisma.favorite.create({
        data: {
            userId: userId,
            planetId: id
        }
    })
}

export async function characterLike(id: string) {
    await prisma.favorite.create({
        data: {
            userId: userId,
            characterId: id
        }
    })
}

export async function planetUnlike(id: string) {
    await prisma.favorite.delete({
        where: {
            userId,
            planetId: id
        }
    })
}

export async function charactersUnlike(id: string) {
    await prisma.favorite.delete({
        where: {
            userId,
            characterId: id
        }
    })
}