import React from 'react'
import { CiSearch } from "react-icons/ci";
function Searchbar() {
  return (
    <div className="px-6 py-2 hidden lg:block">
      <div className="bg-neutral-800  rounded-full px-8 py-2 flex flex-row">
         <CiSearch size={24} color="grey"/>
         <p className="text-white ml-2 text-sm">Search</p>
      </div>
    </div>
  )
}

export default Searchbar
