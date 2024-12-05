'use client';

import React from 'react'
import { FaXTwitter } from 'react-icons/fa6'
import { useRouter } from 'next/navigation'


function SidebarLogo() {
    const router = useRouter();
    return (
        <div onClick={() => { router.push('/') }} className="h-16 w-16 p-4 flex items-center justify-center hover:bg-slate-400 hover:bg-opacity-10 hover:rounded-full cursor-pointer">
            <FaXTwitter size={30} color="white" />
        </div>
    )
}

export default SidebarLogo
