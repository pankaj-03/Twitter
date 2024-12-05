'use client';
import React from 'react'
import { useRouter } from 'next/navigation'
import { FaFeather } from 'react-icons/fa';

function SidebarTweetButton() {
  const router = useRouter();
  return (
    <div onClick = {()=>{router.push('/')}}>
      <div className="mt-2 lg:hidden rounded-full h-14 w-14 flex items-center justify-center transition hover:bg-slate-400 hover:bg-opacity-80">
       <FaFeather size={24} color="white"/>
      </div>
      <div className="mt-4 hidden lg:block px-12 py-2 rounded-full bg-sky-600 hover:bg-opacity-90 cursor-pointer transition  ">
       <p className="hidden lg:block text-center font-semibold text-white text-[20px]">Post</p>
      </div>
    </div>
  )
}

export default SidebarTweetButton
