import React from 'react'
import { Seredity } from '../../container/Seredity';
import Obsviewsly from '../../container/Obsviewsly';
import { Possibility } from '../../container/Possibility';
import { Partner } from '../../container/Partner';
import { Footer } from '../../components/Footer';
export const Welcome = () => {
    return (
        <div className='bg-gradient-60 from-slate-950 via-gray-800 to-fuchsia-900 max-h-full h-full'>
            <Seredity />
            <Obsviewsly />
            <Possibility />
            <Partner />
            <Footer/>
        </div>
    )
}
