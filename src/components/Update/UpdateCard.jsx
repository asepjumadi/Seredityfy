import React from 'react'

const UpdateCard = ({ icons,title ,heading,headingContent,firstListText,secondListText,isDetail}) => {
    return (
        <div className='max-w-xs items-center bg-blue-950 border border-slate-200 bg-opacity-30  rounded-lg shadow  dark:border-gray-700 justify-center  backdrop-blur-3xl '>
            <div className='flex flex-row '>
                <div className='flex flex-col'>
                    <img src={icons} className='w-20 h-20' alt="safe partice button" />
                    <div className='w-1 h-full bg-slate-300'/>
                </div>
                <div>
                    <h1 className='text-white text-2xl leading-4 font-bold'>{title}</h1>
                    <h3 className='text-blue-300 text-xl '>{heading}<span className='text-slate-400 text-xl  '>{headingContent}</span></h3>
                   <ul>
                    <li className='text-gray-400 text-sm'>{firstListText}</li>
                    <li className='text-gray-400 text-sm'>{secondListText}</li>
                   </ul>
                   {
                    isDetail&&
                    <><h1>follow up</h1></>
                   }
                </div>
            </div>
        </div>
    )
}

export default UpdateCard