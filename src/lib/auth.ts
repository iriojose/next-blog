import { AuthOptions, getServerSession } from "next-auth"
import Credentials from "next-auth/providers/credentials";
import Github from "next-auth/providers/github";
import { validateUser } from "@/actions/authActions";

const authOptions: AuthOptions = {
    session: {
        strategy: "jwt",
        maxAge: 60 * 60
    },
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        async jwt({ token }) { 
            return token;
        },
        async session({ session, token }) { 
            session.user.id = token.sub as string;
            return session;
        },
        async redirect({ baseUrl }) {
            return baseUrl
        },
    },
    
    pages: {
        signIn: '/signin',
        signOut: "/signin",
        error: "/signin",
    },
    providers: [
        Credentials({
            name: "Credentials",
            credentials: {
              email: { label: "Email", type: "text"  },
              password: { label: "Password", type: "password" }
            },
            authorize: async (credentials) => {
                console.log('s')
                const { email , password } = credentials as {
                    email: string
                    password: string
                };

                const user = await validateUser({ email, password })
                if(!user) throw new Error('Invalid credentials');
                return user
            }
        }),
        Github({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string
        })
    ],
}

const getSession = () => getServerSession(authOptions)

export { authOptions, getSession }

//for rsc
//import { getSession } from "@/lib/auth"
//const session = await getSession()


//for csc
//"use client"
//import { useSession, signOut } from "next-auth/react"
//const { data: session, status } = useSession()
//await signOut();