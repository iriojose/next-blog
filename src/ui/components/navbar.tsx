import Link from 'next/link';
import NavLinks from './nav-links';
import Image from 'next/image';
import logo from "../../../public/logo.svg"

export default async function Navbar() {
    return (
        <nav className="bg-gray-800 p-4 fixed top-0 w-full">
            <div className="container mx-auto flex justify-between items-center">
                <div className='flex items-center gap-2'>
                    <Image src={logo} width={40} height={40} alt='logo' />
                    <Link  href={'/'} >
                        <h1 className="text-white text-2xl font-bold">Star War Blog</h1>
                    </Link>
                </div>

                <div className="flex space-x-4">
                    <NavLinks />
                </div>
            </div>
        </nav>
    );
}