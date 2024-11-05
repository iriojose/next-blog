import { Suspense } from "react"
import { Metadata } from "next"
import List from "@/ui/components/list"
import Loading from "@/ui/components/loading"
import CharacterCard from "@/ui/components/characterCard"
import { Character } from "@/types/models/character"
import { getCharacters } from "@/actions/characterActions"
import Paginator from "@/ui/components/paginator"
import NotFound from "@/ui/components/not-found"

export const metadata: Metadata = {
	title: "Characters"
};

type PageProps = {
    searchParams: { [key: string]: string | string[] | undefined}
}

export default async function Characters({ searchParams }: PageProps)  {
    const { page, limit } = await searchParams
    const pageValue = Number(page) || 1
    const limitValue = Number(limit) || 10
    
    const data = await getCharacters(pageValue, limitValue)
    const numberPages = Math.ceil(data[1] / limitValue)

    return (
        <div>
            <h1 className="text-center text-3xl font-bold mt-24">
                Characters
            </h1>

            {data[0].length <= 0 && (
                <NotFound title="No se encontraron mas planetas" />
            )}

            <Suspense fallback={<Loading />} key={`${page}-${limit}`}>
                <div className="flex-grow grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-4 mx-10">
                    <List<Character> data={data[0]}>
                        {(item, i) => {
                            return (
                                <CharacterCard character={item} key={i} />      
                            )
                        }}
                    </List>
                </div>
            </Suspense>

            {data[0].length > 0 && (
                <Paginator 
                    currentPage={pageValue} 
                    numberPages={numberPages} 
                    limit={limitValue} 
                />
            )}
        </div>
    )
}