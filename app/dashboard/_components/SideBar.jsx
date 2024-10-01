"use client"
import Image from 'next/image'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'
import { HiUser, HiOutlineRocketLaunch, HiShieldExclamation, HiUserMinus  } from "react-icons/hi2";
import { Progress } from '../../../components/ui/progress'


const SideBar = () => {
const Menu = [
    {
        id: 1,
        name: "Kezdőoldal",
        icon: <HiUser />,
        path:'/dashboard'
    },
    {
        id: 2,
        name: "Felfedezés",
        icon: <HiOutlineRocketLaunch />,
        path:'/dashboard/explore'
    },
    {
        id: 3,
        name: "Frissités",
        icon: <HiShieldExclamation />,
        path:'/dashboard/upgrade'
    },
    {
        id: 4,
        name: "Kijelentkezés",
        icon: <HiUserMinus />,
        path:'/dashboard/logout'
    }
]

const path = usePathname()

  return (
    <div className='fixed h-full md:w-64 p-5 shadow-md'>
        <Image src={'/logo.svg'}
            width={150}
            height={100} />

            <hr className='my-5'/>

            <ul>
                {
                    Menu.map((i, index) => (
                     <Link href={i.path}>
                         <div className={`flex items-center gap-2
                            p-3 text-gray-500 cursor-pointer hover:bg-gray-200 hover:text-black rounded-lg
                            ${i.path=== path && 'bg-gray-200 text-black mb-2'}`}>
                                <div className='text-2xl'>{i.icon}</div>
                                <h2>{i.name}</h2>
                            </div>
                     </Link>
                    ))
                }
            </ul>

            <div className="absolute bottom-10 w-[80%]">
            <Progress value={33} />
            <h2 className='text-sm my-2'>3/5 kurzus kész</h2>
            <h2 className='text-xs text-gray-500'>Válts korlátlan verzióra</h2>
            </div>
    </div>
  )
}

export default SideBar
