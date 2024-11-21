import type { Metadata } from "next";
import { ReactNode } from "react";
import "../ui/css/globals.css";
import { getSession } from "@/lib/auth"
import Navbar from "@/ui/components/navbar"; 
import Footer from "@/ui/components/footer";
import AuthProvider from "@/ui/components/providers/auth-provider";
import ClientToastContainer from "@/ui/components/providers/toastify-provider";

export const metadata: Metadata = {
	title: {
		template: "%s | star wars",
		default: "Landing"
	},
	description: "Best star wars blog ever",
	icons: { 
		icon: "../../public/vecteezy_mandalorian-helmet-star-wars_17709665.ico"
	}
};

export default async function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
	const session = await getSession()

	return (
		<html lang="en">
			<body className="bg-gray-100">
				<AuthProvider session={session}>
					<Navbar />
					{children}
					<Footer />
					<ClientToastContainer />
				</AuthProvider> 
			</body>
		</html>
	);
}
