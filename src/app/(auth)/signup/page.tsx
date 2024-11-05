import SignUpForm from "@/ui/components/auth/sign-up-form"
import Link from "next/link"
import Image from "next/image"
import logo from "../../../../public/logo.svg"

export default function SignUp() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 mt-10">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <div className="mb-4 flex items-center gap-2 justify-center">
                    <Image src={logo} width={40} height={40} alt='logo' />
                    <h1 className="text-3xl font-bold">Star Wars Blog</h1>
                </div>

                <h2 className="text-2xl font-bold mb-2 text-center">Sign Up</h2>

                <SignUpForm />

                <p className="text-center text-gray-600 mt-6">
                    Do you have account? 
                    <Link href="/signin">
                        <span className="text-blue-500 underline"> login</span>
                    </Link>
                </p>
            </div>
        </div>
    )
}