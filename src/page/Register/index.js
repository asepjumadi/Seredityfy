import React from 'react'
import { Navbar } from '../../components/Navbar'
import { Footer } from '../../components/Footer'
import SignUP from '../../container/SIignUP'

const Register = () => {
  return (
    <div className='bg-white dark:bg-gradient-to-br bg-gradient-75 from-slate-950 via-purple-950 to-blue-950'>
        <Navbar type='update'/>
        <SignUP/>
        <Footer/>
    </div>
  )
}

export default Register