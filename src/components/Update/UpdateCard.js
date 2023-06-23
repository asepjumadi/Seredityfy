import React from 'react'

const UpdateCard = ({ icons, title, heading, headingContent, firstListText, secondListText, isDetail,keys }) => {
    return (
        <div key={keys} className='mt-4 mr-6 items-center'>
            <div className='h-[0.2px]  lg:mr-6  bg-gradient-to-r from-indigo-600 via-cyan-400 to-indigo-600  w-4/6 self-center ml-24' />
            <div className='py-6 items-center bg-blue-950  bg-opacity-30  rounded-lg shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] justify-center  backdrop-blur-3xl'>
                <div className='flex flex-row w-11/12'>
                    <div className='flex flex-col items-center mr-10'>
                        <div>
                            <img src={icons} className='w-30 h-30 ' alt="safe partice button" />
                        </div>
                        <div className='-z-10 w-[0.1px] h-full bg-slate-500 absolute ' />
                    </div>
                    <div className='w-full'>
                        <h1 className='text-white text-lg leading-4 font-bold my-4'>{title}</h1>
                        <h5 className='text-blue-300 text-sm my-2 '>{heading} <span className='text-slate-400 text-sm '>{headingContent}</span></h5>
                        <ul className='list-disc ml-4'>
                            <li className='text-gray-400 text-xs'>{firstListText}</li>
                            <li className='text-gray-400 text-xs '>{secondListText}</li>
                        </ul>
                        {
                            isDetail &&
                            <><h1>follow up</h1></>
                        }
                    </div>
                </div>
            </div>

        </div>
    )
}

export default UpdateCard