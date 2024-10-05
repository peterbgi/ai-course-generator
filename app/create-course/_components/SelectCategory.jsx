import { UserInputContext } from '@/app/_context/UserInputContext'
import CategoryList from '@/app/_shared/CategoryList'
import Image from 'next/image'
import React, { useContext } from 'react'

const SelectCategory = () => {
    const {userCourseInput, setUerCourseInput} = useContext(UserInputContext)

    const handleCategoryChange = (category) => {

        setUerCourseInput(prev => ({
            ...prev,
            category: category
        }))

    }
  return (
    
   <div className=" px-8 md:px-12 mt-3">
    <h2 className="py-5">Válassz kategoriát</h2>
    <div className='grid grid-cols-3 gap-10'>
        {CategoryList.map((c, index) => (
            <div className={`flex flex-col p-5 border items-center
            rounded-xl hover:border-primary hover:bg-blue-300 cursor-pointer 
            ${userCourseInput?.category == c.name && 'border-primary bg-blue-50 '}`}
            onClick={() => handleCategoryChange(c.name)}>
                <Image src={c.icon} width={55} height={55}
                className='rounded'
                 />
                <p className="">{c.name}</p>
            </div>
        ))}
    </div>
   </div>
  )
}

export default SelectCategory
