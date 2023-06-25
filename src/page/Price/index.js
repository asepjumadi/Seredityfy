import React from 'react'
import { Navbar } from '../../components/Navbar'
import { PriceApp } from '../../container/Price'
import { Footer } from '../../components/Footer'
export const Price = () => {

  return (
    <div className='bg-blue-950 w-full h-fit'>
      <Navbar/>
      <PriceApp/>
      <Footer/>
    </div>
  )
}
