import React from 'react'
import UpdateCard from './Update/UpdateCard'
import { dataSetUpdates } from '../model/UpdateModels'

export const UpdatersRoadMap = () => {
  return (
    <div className='grid grid-rows-4 grid-flow-col gap-4 h-fit pb-[800px]'>
      <div className='col-span-2'>
        <div className='h-[300px]'>

        </div>
      </div>
      <div className='row-span-2 col-span-2 '>

      </div>
      <div className='row-span-3'>
        <div className='bg-gradient-to-r from-blue-950  to-zinc-900   w-[40%] absolute z-0  right-0 h-fit'>
          <div className=' pl-10 pt-20'>
            <h1 className='text-white text-3xl mb-10'>Updates</h1>
            <p className='text-white text-sm w-[450px]'>Stay up-to-date with the latest features released on Serendityfy. Our most recent updates are now live, offering you a wide range of new features and enhancements that will enhance your experience. From sleek design changes to powerful new tools, we are continuously working to make our platform even better for you. Discover the latest updates today and take your experience to the next level!</p>
            {
              dataSetUpdates.map((item, index) => {
                
                return (
                  <UpdateCard title={item.title}
                    firstListText={item.firstListText}
                    secondListText={item.secondListText}
                    heading={item.heading}
                    headingContent={item.headingContent}
                    isDetail={item.isDetail}
                    icons={item.icons}
                    keys={index}
                    Author={item.detail.Author}
                    ContentDetail={item.detail.ContentDetail}
                    headerDetail={item.detail.headerDetail}
                    iconsContent={item.detail.iconsContent}
                    Authoricons={item.detail.Author}
                    
                  />

                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}
