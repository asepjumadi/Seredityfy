import React from 'react'
import Dragons from '../../assets/dragons.png'
import { Navbar } from '../../components/Navbar'
import { UpdatersRoadMap } from '../../components/UpdatersRoadMap'
export const Updates = () => {
  return (
    <div
    className='bg-cover bg-center h-full'
    style={{ backgroundImage: `url(${Dragons})` }}
>
    <Navbar/>
    <UpdatersRoadMap/>
    </div>
  )
}