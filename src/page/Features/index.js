import React from 'react'
import { ExpandPlatform } from '../../container/Feature/ExpandPlatform'
import { Navbar } from '../../components/Navbar'
import { Footer } from '../../components/Footer'
import { MultiIntegration } from '../../container/Feature/MultiIntegration'

export const Features = () => {
    return (
        <div className=' bg-gradient-to-r ml-0 from-black via-emerald-950  to-black h-fit'>
            <Navbar type='update'/>
            <MultiIntegration/>
            <ExpandPlatform />
            <Footer/>
        </div>
    )
}
