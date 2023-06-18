import React from 'react'
import Microsoft from '../assets/microsoft.webp'
import OpenAI from '../assets/openai.jpeg'
import Image12 from '../assets/image_12.png'
import Image2 from '../assets/image2.png'
import Image6 from '../assets/image6.png'
import Bing from '../assets/bing.png'
export const Partner = () => {
  const [email, setEmail] = React.useState('');
  return (
    <div className='flex flex-col bg-gradient-135 from-slate-700 via-grey-900 to-fuchsia-900 h-full backdrop-blur-3xl bg-opacity-5'>
      <div className='bg-lime-900 h-full bg-opacity-10 backdrop-blur-3xl'>
        <div className='px-4 lg:px-32 py-4 lg:py-20  justify-center items-center align-middle'>
          <h1 className='leading-9 text-md lg:text-3xl text-white w-12/12 self-center text-center font-extrabold justify-center'>The Biggest Partner is an artist, designer, and many corporate industries in arts and 3D printing. It offers complete free access for accepted users, providing them with valuable resources and support in their creative endeavors.</h1>
          <div className='flex flex-col lg:flex-row  mt-20 lg:mx-[80px] gap-2 items-center'>
          <div className='max-w-xs items-center bg-slate-950 border border-slate-200 bg-opacity-40  rounded-lg shadow  dark:border-gray-700 justify-center  backdrop-blur-3xl '>
              <div className='w-[86px] h-10 rounded-sm m-6 bg-slate-700 align-middle justify-center items-center'>
                <p className='text-white p-2'>Microsoft</p>
              </div>
              <h2 className='text-white m-6'>Corporates</h2>
              <p className='m-6 text-xs text-gray-300'>Microsoft partners with businesses to provide comprehensive solutions across sectors. Through collaborations in cloud computing, Azure offers scalable infrastructure and advanced analytics, enabling efficient operations and digital transformation. Microsoft 365 delivers powerful productivity tools for seamless collaboration and secure document management. Customized solutions drive innovation, while hardware partnerships ensure compatibility and optimization. Microsoft's partnerships empower businesses with resources for digital success.</p>
              <img className='h-20 w-20 absolute top-[30px] right-[120px]' src={Microsoft}/>
              <img className='h-20 w-20 absolute top-[30px] right-[20px]' src={Image12}/>
            </div>

            <div className='max-w-xs items-center bg-slate-800 border border-slate-200 bg-opacity-30  rounded-lg shadow  dark:border-gray-700 justify-center  backdrop-blur-3xl '>
              <div className='w-16 h-10 rounded-sm m-6 bg-slate-700 align-middle justify-center items-center'>
                <p className='text-white p-2'>GPT-4</p>
              </div>
              <h2 className='text-white m-6'>Open AI</h2>
              <p className='m-6 text-xs text-gray-300'>openAI, a leading artificial intelligence research organization, has collaborated with numerous companies across various industries to leverage the power of AI and provide innovative solutions. As a partner in business, OpenAI offers its expertise and technologies to drive advancements and create value. By harnessing cutting-edge natural language processing capabilities, OpenAI can assist businesses in summarizing information effectively.</p>
              <img className='h-20 w-20 absolute top-[30px] right-[120px]' src={OpenAI}/>
              <img className='h-20 w-20 absolute top-[30px] right-[20px]' src={Image2}/>
            </div>
         
            <div className='max-w-xs items-center bg-slate-400 border border-slate-200 bg-opacity-30  rounded-lg shadow  dark:border-gray-700 justify-center  backdrop-blur-3xl '>
              <div className='w-16 h-10 rounded-sm m-6 bg-slate-700 align-middle justify-center items-center'>
                <p className='text-white p-2'>BING</p>
              </div>
              <h2 className='text-white m-6'>Microsoft</h2>
              <p className='m-6 text-xs text-gray-300'>Bing, the search engine developed by Microsoft, exemplifies the successful partnership between the two entities. As a part of Microsoft's ecosystem, Bing provides users with a comprehensive search experience, while Microsoft's resources and expertise enhance its functionality. The collaboration between Bing and Microsoft offers a powerful tool for information discovery and online exploration.</p>
              <img className='h-20 w-20 absolute top-[30px] right-[120px]' src={Bing}/>
              <img className='h-20 w-20 absolute top-[30px] right-[20px]' src={Image6}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
