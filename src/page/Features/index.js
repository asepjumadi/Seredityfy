import React from 'react'
import { ExpandPlatform } from '../../container/Feature/ExpandPlatform'
import { Navbar } from '../../components/Navbar'
import { Footer } from '../../components/Footer'

export const Features = () => {
    return (
        <div className=' bg-gradient-to-r from-blue-950 ml-0 to-zinc-900 h-fit'>
            <Navbar type='nonupdate'/>
            <ExpandPlatform />
            <Footer/>
        </div>
    )
}
