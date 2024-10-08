'use client'
import { Button } from '@/components/ui/button';
import React, {  useContext, useEffect, useState } from 'react'
import { HiBookOpen } from "react-icons/hi2";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";
import SelectCategory from './_components/SelectCategory';
import TopicDescription from './_components/TopicDescription';
import SelectOptions from './_components/SelectOptions';
import { UserInputContext } from '../_context/UserInputContext';
import { GenerateCourseLayout_AI } from '@/configs/AIModel';
import LoadingDialog from './_components/LoadingDialog';

const CreateCourse = () => {
    const OptionList = [
    {
        id: 1,
        name: 'Kategoria',
        icon: <HiBookOpen />
     },
     {
        id: 2,
        name: 'Téma',
        icon:<HiChatBubbleBottomCenter />
     },
     {
        id: 3,
        name: 'Opciók',
        icon: <HiOutlineWrenchScrewdriver />
     }
]

const checkStatus = () => {
    if (userCourseInput?.length == 0)
    {
        return true;
    }
    if (activeIndex == 0 && (userCourseInput?.category?.length == 0 || userCourseInput?.category == undefined))
    {
        return true;
    }
    if (activeIndex == 1 && (userCourseInput?.téma?.length == 0 ||userCourseInput?.téma == undefined))
    {
        return true;
    }
    else if (activeIndex == 2 && (userCourseInput?.szint == undefined || userCourseInput?.hossz == undefined || userCourseInput?.videóval == undefined || userCourseInput?.részekSzáma == undefined))
    {
        return true;
    }
    return false;
}

const [loading, setLoading] = useState(false)

const GenerateCourseLayout = async () => {
    setLoading(true)
    const BASIC_PROMPT='Hozzon létre egy kurzus oktatóanyagot a következő részletekről a következő mezőkkel: '
    const USER_IMPUT_PROMPT='kurzus neve, leírása, fejezet neve, körülbelül, időtartam: Kategoria: '+userCourseInput?.category+', Téma: '+userCourseInput.téma+', Szint: '+userCourseInput?.szint+', Hossz: '+userCourseInput?.hossz+', Részek Száma:'+userCourseInput?.részekSzáma+', JSON formátumban'
    const Final_Prompt=BASIC_PROMPT+USER_IMPUT_PROMPT

    const result = await GenerateCourseLayout_AI.sendMessage(Final_Prompt);

    console.log(result.response?.text())
    console.log(JSON.parse(result.response?.text()))

    setLoading(false)
}

const {userCourseInput, setUerCourseInput} = useContext(UserInputContext)

useEffect(() => {
    console.log(userCourseInput)

},[userCourseInput])


const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className=''>
        <div className="flex flex-col justify-center items-center mt-8">
            <h2 className="text-3xl text-primary font-medium">Kurzus Generálás</h2>

            <div className="flex">
                {OptionList.map((o, index) => (
                    <div className="flex items-center mt-8">
                        <div className="flex flex-col items-center w-[50px] md:w-[100px]">
                            <div className={`bg-gray-300 p-2 rounded-full text-white
                            ${activeIndex >= index && 'bg-purple-500'}`}>
                                {o.icon}
                            </div>
                            <h2 className="hidden md:block text-sm">{o.name}</h2>
                        </div>
                        {index != OptionList?.length -1 && <div className={`h-1 w-[50px] rounded-full lg:w-[70px] bg-gray-300
                            ${activeIndex >= index && 'bg-purple-500'}`}></div>}
                    </div>
                ))}
            </div>
        </div>

       <div className="px-8 md:px-16 lg:px-44 mt-8">
        {activeIndex == 0? <SelectCategory />:
        activeIndex == 1? <TopicDescription />:
        activeIndex == 2? <SelectOptions />: null}
       <div className="flex justify-between mt-10">
            <Button disabled={activeIndex == 0}

            variant= 'outline'
            onClick={() => setActiveIndex(activeIndex -1)}
            >Elözö</Button>
            {activeIndex < 2 && <Button
            disabled={checkStatus()}
            onClick={() => setActiveIndex(activeIndex + 1)}
        >Következő</Button>}
        {activeIndex == 2 && <Button
            disabled={checkStatus()}
            onClick={() => GenerateCourseLayout()}
        >Generálás</Button>}
        </div>
       </div>
       <LoadingDialog loading={loading} />
    </div>
  )
}

export default CreateCourse
