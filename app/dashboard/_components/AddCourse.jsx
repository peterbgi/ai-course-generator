"use client"
import {Button} from '@/components/ui/button'
import { useUser } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'

const AddCourse = () => {
    const { user } = useUser();
  return (
    <div className='flex justify-between items-center'>
      <div>
        <h2 className='text-2xl'>Üdvözlet, <span className='font-bold'>{user?.fullName}</span></h2>
        <p className="text-sm text-gray-500">Csinálj egy kurzust és oszt meg barátaiddal</p>
      </div>
      <Link href={'/create-course'}>
       <Button>+ Kurzus</Button>
      </Link>
    </div>
    
  )
}

export default AddCourse
