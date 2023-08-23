import React from 'react'
import { ExpandPlatform } from '../../container/Feature/ExpandPlatform'
import { Navbar } from '../../components/Navbar'
import { Footer } from '../../components/Footer'
import { MultiIntegration } from '../../container/Feature/MultiIntegration'

export const Features = () => {
    return (
        <div className='flex-1 bg-gradient-to-r ml-0 in from-black via-emerald-950  to-black max-h-full h-full'>
            <Navbar type='update'/>
            <MultiIntegration/>
             <ExpandPlatform /> 
            <Footer/>
        </div>
    )
}
