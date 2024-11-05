'use client'

import { Fragment } from "react"
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import { useSession } from "next-auth/react"
import ProfileDropdown from "./profile-dropdown";

export default function NavLinks() {
    const { data: session, status } = useSession()
    const pathname = usePathname()

    return (
        <Fragment>
            {status == "authenticated" ? (
                <Fragment>
                    <div className="flex items-center gap-4">
                        <Link 
                            href="/planets" 
                            className={`text-white px-3 py-2 rounded hover:bg-blue-700 link ${
                                pathname === '/planets' && 'bg-blue-500'
                            }`}
                        >    
                                Planets
                        </Link>
                            
                        <span className="text-white self-center">|</span>

                        <Link 
                            href="/characters"
                            className={`text-white px-3 py-2 rounded hover:bg-blue-700 ${
                                pathname === '/characters' && 'bg-blue-500'
                            }`}
                        >
                            Characters
                        </Link>


                        <ProfileDropdown userImage={session.user.image} name={session.user.name} />
                    </div>
                </Fragment>
            )
            :
            (
                <Fragment>
                    <Link 
                        href="/signin"
                        className={`text-white px-3 py-2 rounded hover:bg-blue-700 ${
                            pathname === '/signin' && 'bg-blue-500'
                        }`}
                    >
                        Signin
                    </Link>

                    <span className="text-white self-center">|</span>

                    <Link 
                        href="/signup"
                        className={`text-white px-3 py-2 rounded hover:bg-blue-700 ${
                            pathname === '/signup' && 'bg-blue-500'
                        }`}
                    >
                        Signup
                    </Link>
                </Fragment>
            )}
        </Fragment>
    )
}