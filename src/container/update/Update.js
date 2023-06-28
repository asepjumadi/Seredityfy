import React from 'react'
import { Dragons } from '../../assets/import'
import { Navbar } from '../../components/Navbar'
import { UpdatersRoadMap } from '../../components/UpdatersRoadMap'
import { Footer } from '../../components/Footer'
const Updates = () => {
  return (
    <div className='bg-blue-950 flex flex-1 flex-col h-fit'>
      <div
        className='flex flex-col flex-1 bg-cover bg-center h-fit'
        style={{ backgroundImage: `url(${Dragons})` }}
      >
        <Navbar />
        <UpdatersRoadMap />
      </div>
    </div>
  )
}
export default Updates;
