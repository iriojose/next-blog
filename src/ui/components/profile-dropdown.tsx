
import { FaUserCircle, FaChevronDown } from 'react-icons/fa'
import Image from 'next/image';

type Props = { 
    userImage: string | null | undefined
    name: string | undefined | null
};

export default function ProfileDropdown({ userImage, name}: Props) {
    return (
        <div className="bg-slate-600 rounded-full flex items-center justify-between h-8 pl-0.5 pr-4 py-1.5 w-[160px]">
            <div className='flex items-center gap-2'>
                {userImage && userImage !== "" ? ( <Image className="rounded-full" width={30} height={30} src={userImage} alt="" /> ) : ( <FaUserCircle className="w-8 h-8 text-white" /> )} 
                <p className="text-white truncate max-w-[80px]">{name}</p>
            </div>  

            <FaChevronDown className='text-white' />
        </div>
    )
}