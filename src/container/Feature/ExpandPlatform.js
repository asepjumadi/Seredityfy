import React from 'react'
import { dataPlatform } from '../../model/dummyFeatures'

export const ExpandPlatform = () => {
    return (
        <div className='flex flex-col bg-slate-900 backdrop-blur-xl bg-opacity-70 w-full h-screen '>

            <div className='flex flex-col bg-gradient-60 from-slate-950 via-gray-900 to-stone-900  items-center p-10 '>
                <h1 className='text-white text-3xl font-extrabold mb-10'>Platform Support</h1>
                <div className='items-center justify-center flex flex-row h-fit w-full '>

                    {
                        dataPlatform.map((item, index) => {
                            return (
                                <div className='w-2/12 cursor-pointer shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] mr-4'>
                                    <div className='p-10 items-center flex-col flex bg-blue-950 rounded-lg'>
                                        <img className='w-20 h-20 object-cover fill-slate-50' src={item.url} />
                                        <h1 className='text-slate-200 mt-2'>{item.platform}</h1>
                                        <p className='text-slate-200 mt-2'>{item.SupportVersion}</p>
                                        <p className='text-slate-200 mt-2'>{item.SupportKarnelVersion}</p>
                                    </div>
                                </div>

                            )
                        })

                    }
                </div>
            </div>
        </div>
    )
}
