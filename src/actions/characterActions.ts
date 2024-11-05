'use server'

import prisma from "@/lib/prisma";
const userId = "0c5db295-0250-4520-b577-089fbbcd90cc"

export async function getCharacters(page: number, limit: number) {
    const skip = page == 1 ? 0:(page - 1) * limit

    return await prisma.$transaction([
        prisma.character.findMany({
            take: limit,
            skip,
            include: {
                favorites: {
                    where: {
                        userId
                    }
                }
            }
        }),
        prisma.character.count()
    ])
}