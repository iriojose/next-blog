'use server'

import prisma from "@/lib/prisma";
import redis from "@/lib/redis";
import { Planet } from "@prisma/client";

const userId = "0c5db295-0250-4520-b577-089fbbcd90cc"

type CacheData = {
    planets: Planet[],
    page: number,
    count: number
}

export async function getPlanets(page: number, limit: number) {
    const skip = page == 1 ? 0:(page - 1) * limit

    const cacheKey = `planets-page-v6`;
    const cachedData = await redis.get(cacheKey)
    let values: CacheData = { count: 0, page: 0, planets: [] }
    
    if(cachedData) {
        values = JSON.parse(cachedData) as CacheData
    }

    if(page <= values.page) {
        return values
    }

    const planets = await prisma.$transaction([
        prisma.planet.findMany({
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
        prisma.planet.count()
    ])

    await redis.set(cacheKey, JSON.stringify({
        planets: [...values.planets, ...planets[0]],
        page,
        count: planets[1]
    }), { EX: 3600 })

    return {
        planets: [...values.planets, ...planets[0]], 
        count: planets[1]
    }

}