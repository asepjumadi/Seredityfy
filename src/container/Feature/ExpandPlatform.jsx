import React from 'react'
import { dataPlatform } from '../../model/dummyFeatures'

export const ExpandPlatform = () => {
    return (
        <div className='flex flex-col bg-opacity-70 pt-10 xl:w-full xl:h-screen xl:pt-40'>
            <div className='flex flex-col items-center'>
                <h1 className='text-white font-extrabold text-3xl tracking-wider xl:text-4xl'>Platform Support</h1>
            </div>
            <div className='flex flex-col items-center p-5 xs:p-10 xl:p-16'>
                <div className='flex flex-wrap justify-center -mx-2 gap-4'>
                    {
                        dataPlatform.map((item, index) => (
                            <div class="max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <a href="#">
                                    <img class="rounded-t-lg h-56 w-56" src={item.url} alt="" />
                                </a>
                                <div class="p-5">
                                    <a href="#">
                                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.platform}</h5>
                                    </a>
                                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.SupportKarnelVersion}-{item.SupportVersion}</p>
                                    <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        Read more
                                        <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

