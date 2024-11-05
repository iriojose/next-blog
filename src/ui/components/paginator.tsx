import Link from "next/link";

type Props = {
    currentPage: number
    numberPages: number
    limit: number
}

export default function Paginator({ currentPage, numberPages, limit}: Props) {
    const disabledPrev = currentPage == 1
    const disabledNext = currentPage >= numberPages 

    return (
        <div className="flex justify-center items-center space-x-2 my-4 mx-10 sm:justify-end">

            {disabledPrev ?  
                <button className="bg-gray-200 px-3 py-1 rounded text-white cursor-not-allowed">
                    Anterior
                </button>
                :
                <Link 
                    className={`bg-blue-400 px-3 py-1 rounded text-white`}
                    scroll={false}
                    href={`?${new URLSearchParams(
                        {
                            page: (currentPage - 1).toString(), 
                            limit: limit.toString()
                        }
                    )}`}
                >
                    Anterior
                </Link>
            }

            <span>{currentPage} de {numberPages}</span>

            {disabledNext ? 
                <button className="bg-gray-200 px-3 py-1 rounded text-white cursor-not-allowed">
                    Siguiente
                </button>
                : 
                <Link 
                    className={`bg-blue-400 px-3 py-1 rounded text-white`}
                    scroll={false}
                    href={`?${new URLSearchParams(
                        {
                            page: (currentPage + 1).toString(), 
                            limit: limit.toString()
                        }
                    )}`}
                >
                    Siguiente
                </Link>
            }
        </div>
    );
}