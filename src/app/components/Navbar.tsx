import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import Logo from './benji-logo.png'

export default function Navbar() {
  return (
    <nav>
      <Image 
        src= {Logo}
        alt="Benji Logo"
        width={50}
        height={50}
        quality={100}
        placeholder='blur'
      />
          <h1>Benji Help desk</h1>
          <Link href="/">Dashboard</Link> 
          <Link href="/tickets">Tickets</Link>
        </nav>
  )
}
