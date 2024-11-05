import { getSession } from "@/lib/auth"
import LogoutButton from "@/ui/components/logout-button";

export default async function Home() {
	const session = await getSession()

	return (
		<main className="h-screen mt-24">
			Hola

			<h1>{JSON.stringify(session)}</h1>

			<LogoutButton />
		</main>
	);
}
