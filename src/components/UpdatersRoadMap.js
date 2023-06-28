import React from 'react'
import UpdateCard from './Update/UpdateCard'
import { dataSetUpdates } from '../model/UpdateModels'

export const UpdatersRoadMap = () => {
  return (
    <div className='right-0 flex flex-col md:flex-row justify-between w-full'>
  <div>
    .
  </div>
  <div>
    .
  </div>
  <div className='flex flex-col justify-start md:justify-end h-fit pb-50 md:pb-200 lg:pb-800'>
    <div className='bg-gradient-to-r from-blue-950 ml-0 to-zinc-900 w-full md:w-64 z-0'>
      <div className='pl-4 lg:pl-10 pt-10 lg:pt-20'>
        <h1 className='text-white text-3xl mb-10'>Updates</h1>
        <p className='text-white text-xs md:text-sm w-64 md:w-80'>
          Stay up-to-date with the latest features released on Serendityfy. Our most recent updates are now live, offering you a wide range of new features and enhancements that will enhance your experience. From sleek design changes to powerful new tools, we are continuously working to make our platform even better for you. Discover the latest updates today and take your experience to the next level!
        </p>
        {dataSetUpdates.map((item, index) => (
          <UpdateCard
            title={item.title}
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
        ))}
      </div>
    </div>
  </div>
</div>
    // <div className='flex flex-col md:flex-row justify-between w-screen flex-1'>
    //   <div className=' h-fit pb-[50px] md:pb-[200px] lg:pb-[200px] '>
    //     <div className='bg-gradient-to-r from-blue-950 ml-0 to-zinc-900  w-[98%] md:w-[40%]  z-0  '>
    //       <div className='pl-4 lg:pl-10 pt-10 lg:pt-20'>
    //         <h1 className='text-white text-3xl mb-10'>Updates</h1>
    //         <p className='text-white text-xs md:text-sm w-[290px] md:w-[450px]'>Stay up-to-date with the latest features released on Serendityfy. Our most recent updates are now live, offering you a wide range of new features and enhancements that will enhance your experience. From sleek design changes to powerful new tools, we are continuously working to make our platform even better for you. Discover the latest updates today and take your experience to the next level!</p>
    //         {
    //           dataSetUpdates.map((item, index) => {

    //             return (
    //               <UpdateCard title={item.title}
    //                 firstListText={item.firstListText}
    //                 secondListText={item.secondListText}
    //                 heading={item.heading}
    //                 headingContent={item.headingContent}
    //                 isDetail={item.isDetail}
    //                 icons={item.icons}
    //                 keys={index}
    //                 Author={item.detail.Author}
    //                 ContentDetail={item.detail.ContentDetail}
    //                 headerDetail={item.detail.headerDetail}
    //                 iconsContent={item.detail.iconsContent}
    //                 Authoricons={item.detail.Author}

    //               />

    //             )
    //           })
    //         }
    //       </div>
    //     </div>
    //   </div>

    // </div>
  )
}
