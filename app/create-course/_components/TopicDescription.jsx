import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import React from 'react'

const TopicDescription = () => {
  return (
    <div className='mx-20 lg:mx-24'>
        <div className="mt-5">
            <label className="">Válassz milyen témát szeretnél (pl: Python kuzus, Yoga stb...)</label>
            <Input placeholder={'Téma'} />
        </div>
        <div className="mt-5">
            <label>Mondj el több infirmációt hogy a generálás még sikeresebb legyen (Nem kötelező)</label>
            <Textarea placeholder={'Leeírás'} />
        </div>
    </div>
    
  )
}

export default TopicDescription
