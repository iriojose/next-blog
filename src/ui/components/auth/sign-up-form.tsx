'use client'

import { useForm, SubmitHandler } from "react-hook-form"
import { signUpSchema, SignUpType} from "@/types/schema/auth"
import { zodResolver } from "@hookform/resolvers/zod"
import Input from '../input'
import { signIn } from "next-auth/react";
import { toast } from "react-toastify";
import { signup } from "@/actions/authActions"
import { useRouter } from "next/navigation";

export default function SignUpForm() {
    const router = useRouter()
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<SignUpType>({ resolver: zodResolver(signUpSchema)})

    const onSubmit: SubmitHandler<SignUpType> = async(data) => {
        try {
            await signup(data)

            const result = await signIn("credentials", { 
                ...data,
                redirect: false,
            });

            if(result?.error) return toast.error('Something wrong!'); 
            toast.success(`Welcome ${data.name}!`);
            router.push('/')
        } catch (error) {
            console.log(error)
            toast.error('Something wrong!'); 
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
                <Input 
                    label="Name"
                    {...register('name')}
                    placeholder="Enter your name"
                    error={errors.name}
                />
            </div>
            <div className="mb-4">
                <Input 
                    label="Lastname"
                    {...register('lastname')}
                    placeholder="Enter your lastname"
                    error={errors.lastname}
                />
            </div>
            <div className="mb-4">
                <Input 
                    label="Email"
                    {...register('email')}
                    placeholder="Enter your Email"
                    error={errors.email}
                />
            </div>
            <div className="mb-6">
                <Input 
                    label="Password"
                    type="password"
                    {...register('password')}
                    placeholder="Enter your password"
                    error={errors.password}
                />
            </div>

            <div className="flex items-center justify-between">
                <button
                    disabled={isSubmitting}
                    type="submit"
                    className="relative overflow-hidden group w-full bg-none border border-black/15 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >   
                    <div className="relative z-10 transition-colors duration-300 group-hover:text-white">
                        {isSubmitting ? "Loading...":"Sign Up"}
                    </div>
                    <span className="absolute inset-0 bg-black/70 transition-transform duration-300 translate-y-full group-hover:translate-y-0"></span>
                </button>
            </div>
        </form>
    )
}