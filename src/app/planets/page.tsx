import { Suspense, /* cloneElement  */} from "react"
import { Metadata } from "next"
import List from "@/ui/components/list"
import Loading from "@/ui/components/loading"
import PlanetCard from "@/ui/components/planetCard"
import { Planet } from "@/types/models/planet"
import { getPlanets } from "@/actions/planetsActions"
import LoadMoreButton from "@/ui/components/load-more-button"
import NotFound from "@/ui/components/not-found"

export const metadata: Metadata = {
	title: "Planets"
};

type PageProps = {
    searchParams: { [key: string]: string | string[] | undefined}
}

export default async function Planets({ searchParams }: PageProps)  {
    const { page, limit } = await searchParams
    const pageValue = Number(page) || 1
    const limitValue = Number(limit) || 10
    
    const data = await getPlanets(pageValue, limitValue)

    return (
        <div>
            <h1 className="text-center text-3xl font-bold mt-24">
                Planets
            </h1>
            
            {data.planets.length <= 0 && (
                <NotFound title="No se encontraron mas planetas" />
            )}

            <Suspense fallback={<Loading />} key={`${page}-${limit}`}>
                <div className="flex-grow grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-4 mx-10">
                    <List<Planet> data={data.planets}>
                        {(item, i) => {
                            return (
                                <PlanetCard 
                                    planet={item}
                                    key={i} 
                                />
                            )
                        }}
                    </List>
                </div>
            </Suspense>
            
            <LoadMoreButton current={data.planets.length} total={data.count} page={pageValue} />
        </div>
    )
}