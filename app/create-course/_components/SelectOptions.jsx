import React, { useContext } from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { Input } from '@/components/ui/input'
import { UserInputContext } from '@/app/_context/UserInputContext'
  
const SelectOptions = () => {

    
  const {userCourseInput, setUerCourseInput} = useContext(UserInputContext)

  const handleInputChange = (fieldName, value) => {
    setUerCourseInput(prev => ({
      ...prev,
      [fieldName]: value
    }))

  }
  return (
    <div className='px-10 md:px-20 lg:px-24'>
      <div className="grid grid-cols-2 gap-10">
        <div>
            <label className="text-sm">Szint</label>
        <Select onValueChange={(value) => handleInputChange('szint', value)}
            defaultValue={userCourseInput?.szint}
            >
            <SelectTrigger className="g-14 text-lg">
                <SelectValue placeholder="Válassz" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="Kezdő">Kezdő</SelectItem>
                <SelectItem value="Halado">Halado</SelectItem>
                <SelectItem value="Profi">Profi</SelectItem>
            </SelectContent>
            </Select>
        </div>

        <div>
            <label className="text-sm">Kurzus Hossza</label>
        <Select onValueChange={(value) => handleInputChange('hossz', value)}
        defaultValue={userCourseInput?.hossz}
            >
            <SelectTrigger className="h-14 text-lg">
                <SelectValue placeholder="Válassz" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="1 óra">1 óra</SelectItem>
                <SelectItem value="2 óra">2 óra</SelectItem>
                <SelectItem value="3 óra">3 óra</SelectItem>
            </SelectContent>
            </Select>
        </div>

        <div>
            <label className="text-sm">Videóval?</label>
        <Select onValueChange={(value) => handleInputChange('videóval', value)}
        defaultValue={userCourseInput?.videoval}
            >
            <SelectTrigger className="h-14 text.lg">
                <SelectValue placeholder="Válassz" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="igen">igen</SelectItem>
                <SelectItem value="nem">nem</SelectItem>
            </SelectContent>
            </Select>
        </div>

        <div>
            <label className="text-sm">Részek száma</label>
            <Input 
            onChange={(e) => handleInputChange('részekSzáma', e.target.value)}
            defaultValue={userCourseInput?.részekSzáma}
            
            typr="number" />

        </div>
      </div>
    </div>
  )
}

export default SelectOptions
