'use client';
import { Loader } from 'lucide-react';
import React, { useEffect } from 'react'

export const RedirectionComponent = ({ url }: { url: string }) => {

    useEffect(() => {
        if (window) {
            window.location.href = url;
        }
    }, [url]);

    return (
        <div className='w-auto h-screen flex items-center justify-center'>
            <Loader size={32} strokeWidth={2.5} className='animate-spin' />
        </div>
    )
}
