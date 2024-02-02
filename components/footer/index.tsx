import React from 'react'
import { PersonalInformation } from '../menu/personal-link'

export const Footer = () => {
    return (
        <div className='fixed bottom-0 bg-gray-200 dark:bg-black dark:bg-opacity-20 w-full text-center p-2'>
            <a href="https://josegaldamez.dev" target='_blank' title='Go to webpage of the author' className='underline'>
                josegaldamez.dev
            </a>
        </div>
    )
}
