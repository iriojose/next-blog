'use client'

import { signIn } from "next-auth/react";
import { useForm, SubmitHandler } from "react-hook-form"
import { signInSchema, SignInType } from "@/types/schema/auth"
import { zodResolver } from "@hookform/resolvers/zod"
import Input from '../input'
import { toast } from "react-toastify";
import { FaEnvelope, FaLock } from 'react-icons/fa';
import { useRouter } from "next/navigation";

export default function LoginForm() {
    const router = useRouter()
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<SignInType>({ resolver: zodResolver(signInSchema)})

    const onSubmit: SubmitHandler<SignInType> = async(data) => {
        try {
            const result = await signIn("credentials", { 
                ...data,
                redirect: false,
            });
        
            if(result?.error) return toast.error('Email or password incorrect!'); 
            router.push("/?origin=login")
        } catch (error) {
            console.log(error)
            toast.error('Email or password incorrect!');   
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
                <Input 
                    label="Email"
                    {...register('email')}
                    placeholder="Enter your Email"
                    error={errors.email}
                    icon={<FaEnvelope/>}
                />
            </div>
            <div className="mb-4">
                <Input 
                    label="Password"
                    {...register('password')}
                    type="password"
                    placeholder="Enter your password"
                    error={errors.password}
                    icon={<FaLock/>}
                />
            </div>

            <div className="flex items-center mb-6">{/* convertir en componente */}
                <input
                    id="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-gray-900">
                    Remember Me
                </label>
            </div>

            <div className="flex items-center justify-between">
                <button
                    disabled={isSubmitting}
                    type="submit"
                    className="relative overflow-hidden group w-full bg-none border border-black/15 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >   
                    <div className="relative z-10 transition-colors duration-300 group-hover:text-white">
                        {isSubmitting ? "Loading...":"Log In"}
                    </div>
                    <span className="absolute inset-0 bg-black/70 transition-transform duration-300 translate-y-full group-hover:translate-y-0"></span>
                </button>
            </div>
        </form>
    )
}