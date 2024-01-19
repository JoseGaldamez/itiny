import React from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

export const UrlForm = () => {
    return (
        <div className="w-full max-w-xl">
            <form className="flex items-center border-gray-900 dark:border-gray-400 border rounded-md overflow-hidden">
                <Input className="bg-transparent border-none text-gray-900 dark:text-white" type="url" placeholder="Paste your large URL..." />
                <Button className="rounded-none bg-slate-800 text-white dark:bg-white dark:text-gray-900" variant="secondary">Shorten</Button>
            </form>
        </div>
    )
}
