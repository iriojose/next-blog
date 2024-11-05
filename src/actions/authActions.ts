'use server'

import prisma from "@/lib/prisma";
import bcrypt from 'bcrypt'
import { SignInType, SignUpType } from "@/types/schema/auth"

export async function validateUser(data: SignInType) {
    const user = await prisma.user.findUnique({ where: { email: data.email } });
    if (!user) return null
    
    const valid = await bcrypt.compare(data.password, user.password);
    if (!valid) return null

    return user
}

export async function signup(data: SignUpType) {
    const existingUser = await prisma.user.findUnique({ where: { email: data.email } });
    if (existingUser) throw new Error('User already exists');
    
    const hashedPassword = await bcrypt.hash(data.password, 10);
    const user = await prisma.user.create({
        data: { 
            ...data, 
            username: data.lastname +"__"+data.name,
            password: hashedPassword 
        }
    });
        
    if (!user) throw new Error('User creation failed');
}
