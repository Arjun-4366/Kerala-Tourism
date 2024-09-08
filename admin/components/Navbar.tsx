import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from "../img/logo.png"
import avatarAdmin from '../img/admin-avatar.png'
import { Avatar,AvatarImage,AvatarFallback } from './ui/avatar' 
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"

function Navbar() {
  return (
    <div className='bg-black dark:bg-black py-2 px-5 flex justify-between text-white'>
      <Link href='/'>
        <Image src={logo} alt='Kerala4U' width={40}/>
        <Avatar>
            <AvatarImage src='../img/admin-avatar.png'/>
        </Avatar>
       </Link>
    </div>
  )
}

export default Navbar
