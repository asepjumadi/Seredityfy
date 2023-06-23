import React, { Suspense, lazy } from 'react'
import { Loader } from '../../components/Loader';
const Updates = lazy(() => import('../../container/update/Update'));
export const Update = () => {
    return (
        <div className='bg-gradient-60 from-slate-950 via-gray-800 to-fuchsia-900 max-h-full h-full'>
            <Suspense fallback={<Loader/>}>
                <Updates />
            </Suspense>
            <div>Update</div>
        </div>
    )
}
