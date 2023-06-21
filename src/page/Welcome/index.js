import React, { lazy } from 'react'
// import { Seredity } from '../../container/welcome/Seredity';

import Obsviewsly from '../../container/welcome/Obsviewsly';
import { Possibility } from '../../container/welcome/Possibility';
import { Partner } from '../../container/welcome/Partner';
import { Footer } from '../../components/Footer';
const Seredity = lazy(()=>import('../../container/welcome/Seredity'));
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
