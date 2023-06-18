import React from 'react'
import { Updates } from '../../container/update/Update'
import { Footer } from '../../components/Footer'
export const Update = () => {
    return (
        <div className='bg-gradient-60 from-slate-950 via-gray-800 to-fuchsia-900 max-h-full h-full'>
            <Updates/>
            <Footer/>
            <div>Update</div>
        </div>
    )
}
