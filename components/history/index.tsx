import React, { Key } from 'react'
import Link from 'next/link'
import { CopyIcon, ExternalLink } from 'lucide-react'
import { Button } from '../ui/button'

interface IhistoryProps {
    listOfUrls: String[]
    toast: any
}

export const History = ({ listOfUrls, toast }: IhistoryProps) => {

    return (
        <div className="w-full max-w-xl mt-20 border-t-2 pt-4">
            <h2 className="text-xl font-medium text-gray-900 dark:text-gray-100 mb-4">History</h2>
            <div className='h-64 overflow-y-scroll bar'>
                {
                    listOfUrls.map((item) => (
                        <div key={item as Key} className="space-y-2 mt-2">
                            <div className="flex items-center justify-between bg-white dark:bg-gray-800 p-4 rounded-md shadow">
                                <Link target='_blank' className='underline flex gap-2' href={item as string}>
                                    {window.location.host}/{item}
                                    <ExternalLink />
                                </Link>
                                <Button onClick={() => {
                                    navigator.clipboard.writeText(window.location.host + '/' + item)
                                    toast({
                                        title: "Copied"
                                    })
                                }} className='flex gap-3'><CopyIcon /> Copy</Button>
                            </div>

                        </div>
                    )).reverse()
                }

            </div>
        </div>
    )
}
