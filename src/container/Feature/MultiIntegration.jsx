import React from 'react'
import framework from '../../utils/framework'

export const MultiIntegration = () => {
  return (
    <div className="flex flex-col mb-20 items-center bg-contain xl:h-screen py-10 w-screen bg-no-repeat bg-[url('/src/assets/zenai.jpg')]">
      <h1 className="text-white font-extrabold text-3xl tracking-wider text-center">Framework Integration</h1>
      <p className="text-white text-2xl font-bold tracking-wide text-center">Multi connecting line rule of machine</p>
      <div className="container mx-auto grid gap-2 lg:grid-cols-3 lg:gap-2 2xl:gap-8 mt-8">
        {
          framework.map((item, index) =>
          <a href="">
            <div className="bg-white rounded-lg shadow-lg cursor-pointer" >
              <img src={item.url} alt="Card Image" className="w-full h-40 object-cover rounded-t-lg"/>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2"><strong><em>{item.thumbl}</em></strong></h3>
                  <p className="text-gray-600">{item.content}</p>
                  <div className="mt-4 flex items-center">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUTMgDC5dkNN2Pv3l3R9_70LMseGCGnUtheQ&usqp=CAU" alt="Avatar" className="w-8 h-8 rounded-full mr-2"/>
                      <span className="text-gray-700">John Doe</span>
                  </div>
                </div>
            </div>
          </a>
          )
        }
      </div>
    </div>

  )
}
