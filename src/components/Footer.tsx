import React from 'react'
import Link from 'next/link'
const Footer = () => {
  return (
    <div className='flex gap-5 p-7 bg-red-500'>
        <Link href="\">Home page</Link>
        <Link href="\about">About page</Link>
        <Link href="\address">Address page</Link>
        <Link href="\contact">Contact page</Link>
    </div>
  )
}

export default Footer