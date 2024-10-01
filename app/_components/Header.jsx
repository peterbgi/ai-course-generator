import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between p-4 shadow-sm items-center'>
      <Image src={'/logo.svg'}
      width={150}
      height={100} />

      <Button>Kurzus Generálás</Button>
    </div>
  )
}

export default Header
