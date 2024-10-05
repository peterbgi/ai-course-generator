import { UserInputContext } from '@/app/_context/UserInputContext'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import React, { useContext } from 'react'

const TopicDescription = () => {

  const {userCourseInput, setUerCourseInput} = useContext(UserInputContext)

  const handleInputChange = (fieldName, value) => {
    setUerCourseInput(prev => ({
      ...prev,
      [fieldName]: value
    }))

  }
  return (
    <div className='mx-20 lg:mx-24'>
        <div className="mt-5">
            <label className="">Válassz milyen témát szeretnél (pl: Python kuzus, Yoga stb...)</label>
            <Input type='text' placeholder={'Téma'}
            defaultValue={userCourseInput?.téma}
             className=" text-xl"
            onChange={(e) => handleInputChange('téma', e.target.value)}/>
        </div>
        <div className="mt-5">
            <label>Mondj el több infirmációt hogy a generálás még sikeresebb legyen (Nem kötelező)</label>
            <Textarea placeholder={'Leeírás'} 
            defaultValue={userCourseInput?.leírás}
            onChange={(e) => handleInputChange('leírás', e.target.value)} />
        </div>
    </div>
    
  )
}

export default TopicDescription
