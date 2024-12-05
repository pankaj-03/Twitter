import React from 'react'
import { BsHouseFill , BsBellFill } from 'react-icons/bs'
import {FaUser} from 'react-icons/fa'
import SidebarLogo from './SidebarLogo'
import SidebarItem from './SidebarItem'
import { BiLogOut } from 'react-icons/bi'
import { IoSearch } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { BsPeople } from "react-icons/bs";
import SidebarTweetButton from './SidebarTweetButton'
import { CgMoreO } from "react-icons/cg";





function Sidebar() {

  const items = [    
    {
      key: 1,
      label: 'Home',
      href: '/',
      icon: BsHouseFill
    },

    {
      key:2,
      label: 'Explore',
      href:'/explore',
      icon: IoSearch 
    },
    {
      key: 3,
      label: 'Notifications',
      href: '/notifications',
      icon: BsBellFill
    },
    {
      key:3,
      label: 'Message',
      href: '/message',
      icon: MdOutlineMailOutline
   },

   {
     key:4,
     label: 'Communites',
     href: '/communities',
     icon: BsPeople
   },
    {
      key:5,
      label: 'Profile',
      href: '/profile',
      icon: FaUser
    }
  ]
  return (
    <div className="col-span-1 h-full pr-4 md:pr-6">
      <div className="flex flex-col items-end">
        <div className="space-y-1 lg:w-[230px]">
         <SidebarLogo/>
         {items.map((item)=>(
            <SidebarItem
            key={item.key}
            label={item.label}
            href={item.href}
            icon={item.icon}
            />
         ))}
         <SidebarItem onClick = {()=>{}} icon={BiLogOut} href='/logout'  label="LogOut"/>
         <SidebarItem onClick={()=>{}} icon={CgMoreO} href='/more' label="More"/>
          <SidebarTweetButton/>
          
      </div>
    </div>
    </div>
  )
}

export default Sidebar
