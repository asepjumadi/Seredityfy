import React from 'react'
import { Dragons } from '../../assets/import'
import { Navbar } from '../../components/Navbar'
import { UpdatersRoadMap } from '../../components/UpdatersRoadMap'
import { Footer } from '../../components/Footer'
const Updates = () => {
  return (
    <div
      className='bg-cover bg-center h-fit'
      style={{ backgroundImage: `url(${Dragons})` }}
    >
      <Navbar />
      <UpdatersRoadMap />
      <Footer />
    </div>
  )
}
export default Updates;
