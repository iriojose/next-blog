import LoginForm from "@/ui/components/auth/login-form"
import Link from "next/link"
import Image from "next/image"
import GithubSignInButton from "@/ui/components/auth/github-button"
import logo from "../../../../public/logo.svg"

export default function SignIn() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 mt-10">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <div className="mb-4 flex items-center gap-2 justify-center">
                    <Image src={logo} width={40} height={40} alt='logo' />
                    <h1 className="text-3xl font-bold">Star Wars Blog</h1>
                </div>

                <h2 className="text-2xl font-bold mb-2 text-center">Log In</h2>

                <p className="text-center text-gray-600 mb-6">
                    Don&apos;t have an account?{' '}

                    <Link href="/signup">
                        <span className="text-blue-500 underline">Register</span>
                    </Link>
                </p>
                
                <LoginForm />

                <p className="text-center text-gray-600 mt-6">
                    <Link href="/forgot">
                        <span className="text-blue-500 underline">Forgor Your Password?</span>
                    </Link>
                </p>

                <div className="border-t border-gray-300 my-6"></div>

                <GithubSignInButton />  
            </div>
        </div>
    )
}