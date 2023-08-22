import React from 'react'
import { dataPlatform } from '../../model/dummyFeatures'

export const ExpandPlatform = () => {
    return (
        <div className='flex flex-col backdrop-blur-xl bg-opacity-70 w-full h-screen  pt-10'>
            <div className='flex flex-col items-center'>
                <h1 className='text-white font-extrabold text-3xl tracking-wider'>Platform Support</h1>
            </div>
            <div className='flex flex-col  items-center p-10 '>
                <div className='items-center justify-center flex flex-row h-fit w-full '>

                    {
                        dataPlatform.map((item, index) => {
                            return (
                                <div key={item.id} className='w-2/12 cursor-pointer shadow-[0px_4px_16px_rgba(255,255,216,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] mr-4'>
                                    <div className='p-10 items-center flex-col flex bg-slate-900 rounded-lg'>
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
