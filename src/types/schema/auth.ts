import * as z from 'zod'

export const signInSchema = z.object({
    email: z
        .string()
        .min(3, { message: 'El campo email es obligatorio' })
        .email({ message: 'Revisa el formato del email' }),
    password: z
        .string()
        .min(8, { message: 'La contraseña debe contener mas de 8 caracteres' })
        .max(20, { message: 'La contraseña debe contener menos de 20 caracteres'}),
})

export const signUpSchema = signInSchema.extend({
    name: z.string()
        .min(2, { message: 'El nombre es obligatorio' }),
    lastname: z.string()
        .min(2, { message: 'El apellido es obligatorio' }),
})

export type SignInType = z.TypeOf<typeof signInSchema>
export type SignUpType = z.TypeOf<typeof signUpSchema>