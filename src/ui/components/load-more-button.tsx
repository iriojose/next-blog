import Link from "next/link"

type Props = {
    total: number
    page: number,
    current: number
}

export default function LoadMoreButton({ total, current, page }: Props) {
    const disabledLoadMore = current == total 

    return (
        <div className="text-center mx-auto my-4">
            {disabledLoadMore ? 
                <button className="bg-gray-200 px-3 py-1 rounded text-white cursor-not-allowed">
                    Load More...
                </button>
                :
                <Link 
                    className={`bg-blue-400 px-3 py-1 rounded text-white`}
                    scroll={false}
                    href={`?${new URLSearchParams(
                        {
                            page: (page + 1).toString(),
                        }
                    )}`}
                >
                    Load More...
                </Link>
            }
            <p className="mt-2">{current} of {total}</p>
        </div>
    )
}