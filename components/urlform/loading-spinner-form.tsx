import { Loader } from 'lucide-react'
import React from 'react'

export const LoadingSpinnerForm = () => {
    return (
        <div className='container flex flex-row items-center justify-center bg-slate-700 rounded-lg mt-5 p-5 px-5'>
            <Loader size={32} strokeWidth={2.5} color='white' className='animate-spin' />
        </div>
    )
}
