import React  from 'react'
import Link from 'next/link'

function page() {
  return (
    <div>

        <div className= "text-3xl text-orange-500">Welome Friend!!</div>
        <Link href="/dashboard" className="text-blue-500">Dashboard</Link>
      
   </div>
  )
}

export default page
