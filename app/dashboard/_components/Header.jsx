import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className='flex items-center justify-between p-4 shadow-sm'>
      <Image src={'/header.svg'}
            width={70}
            height={70} />

            <UserButton />
    </div>
  )
}

export default Header
