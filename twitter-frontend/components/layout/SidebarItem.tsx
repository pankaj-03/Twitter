import React from 'react'
import { IconType } from 'react-icons'

interface SidebarItemsProp {
    label: string,
    href: string,
    icon: IconType,
    onClick?: ()=> void
}

const SidebarItem: React.FC<SidebarItemsProp> = ({ label,  icon: Icon }) => {
    return (
        <div className="flex flex-row items-center">
            <div className="relative rounded-full h-14 w-14  flex items-center justify-center  px-4 py-2 lg:hidden cursor-pointerpointer">
                <Icon size={24} color = "white"></Icon>
            </div>
            <div className="relative hidden lg:flex items-center gap-4 p-4 rounded-full cursor-pointer hover:bg-slate-400 hover:bg-opacity-10">
             <Icon size={24} color="white"></Icon>
             <p className="hidden lg:block text-white text-xl">{label}</p>
            </div>
        </div>
    )
}
export default SidebarItem
