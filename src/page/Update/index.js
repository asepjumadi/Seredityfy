import React, { Suspense, lazy } from 'react'
import { Loader } from '../../components/Loader';
import { Footer } from '../../components/Footer';
const Updates = lazy(() => import('../../container/update/Update'));
export const Update = () => {
    return (
        <div className='bg-gradient-60 from-slate-950 via-gray-800 to-fuchsia-900 h-full'>
            <Suspense fallback={<Loader/>}>
                <Updates />
                <Footer/>
            </Suspense>
            <div>Update</div>
        </div>
    )
}
