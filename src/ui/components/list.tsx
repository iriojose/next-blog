import { ReactNode, Fragment } from "react"

type Props<T> = {
    children: (value: T, index: number) => ReactNode | ReactNode[],
    data: T[]
}

export default async function List<T>({ children, data }: Props<T>){

    return (
        <Fragment>
            {data.map(children)}
        </Fragment>
     )
}