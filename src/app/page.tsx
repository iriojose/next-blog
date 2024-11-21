import { getSession } from "@/lib/auth"
import LogoutButton from "@/ui/components/logout-button";
import Toast from "@/ui/components/toast";

type PageProps = {
    searchParams: { [key: string]: string | string[] | undefined}
}

export default async function Home({ searchParams }: PageProps) {
	const session = await getSession()
	const { origin } = searchParams

	return (
		<main className="h-screen mt-24">
			Hola

			<h1>{JSON.stringify(session)}</h1>
			<div>{origin}</div>
			<LogoutButton />

			{origin && <Toast message={`Welcome!`}/>}
		</main>
	);
}
