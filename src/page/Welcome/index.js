import React, { Suspense, lazy } from 'react'
import { Possibility } from '../../container/welcome/Possibility';
import { Partner } from '../../container/welcome/Partner';
import { Footer } from '../../components/Footer';
import { Loader } from '../../components/Loader/index';
const Obsviewsly = lazy(() => import('../../container/welcome/Obsviewsly'));
const Seredity = lazy(() => import('../../container/welcome/Seredity'));

export const Welcome = () => {
    return (
        <div className='bg-gradient-60 from-slate-950 via-gray-800 to-fuchsia-900 max-h-full h-full'>
            <Suspense fallback={<Loader/> }>
                <Seredity />
                <Obsviewsly />
                <Possibility />
                <Partner />
                <Footer />
            </Suspense>
        </div>
    )
}
