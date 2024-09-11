import React from 'react'
import Link from 'next/link'
const Header = () => {
  return (
    <div className='flex gap-5 p-6 bg-yellow-500'>
        <Link href="\">Home page</Link>
        <Link href="\about">About page</Link>
        <Link href="\address">Address page</Link>
        <Link href="\contact">Contact page</Link>
    </div>
  )
}

export default Header