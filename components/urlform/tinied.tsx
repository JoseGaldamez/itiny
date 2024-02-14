import { CopyIcon, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'

interface ITinied {
    shortenUrl: { url: string, shorten: string }
    toast: Function
}

export const Tinied = ({ shortenUrl, toast }: ITinied) => {
    return (
        <div className='container flex flex-row items-center justify-between bg-slate-700 rounded-lg mt-5 p-2 px-5'>
            <div>
                <Link target='_blank' className='text-white font-bold underline flex gap-2' href={shortenUrl.shorten}>
                    {window.location.host}/{shortenUrl.shorten}
                    <ExternalLink />
                </Link>
            </div>
            <div>
                <Button onClick={() => {
                    navigator.clipboard.writeText(window.location.host + '/' + shortenUrl.shorten)
                    toast({
                        title: "Copied"
                    })
                }} className='flex gap-3'> <CopyIcon /> Copy</Button>
            </div>
        </div>
    )
}
