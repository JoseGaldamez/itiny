'use client';

import React, { FormEvent, useState } from 'react'

import { useToast } from "@/components/ui/use-toast"

import { Input } from '../ui/input'
import { Button } from '../ui/button'
import Link from 'next/link';
import { CopyIcon, ExternalLink } from 'lucide-react';

export const UrlForm = () => {
    const { toast } = useToast();
    const [shortenUrl, setShortenUrl] = useState<{ url: string, shorten: string } | null>(null)
    const [url, seturl] = useState("");

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        toast({
            title: "Enviando al backend",
            slot: "Slot",
            description: url,
        })

        const result = await fetch("/api/url", {
            method: "POST",
            body: JSON.stringify({ "url": url })
        });
        const resultJson = await result.json();

        console.log(resultJson);
        setShortenUrl({ url: resultJson.url, shorten: resultJson.tinied })
    }
    return (
        <div className="w-full max-w-xl">
            <form onSubmit={handleSubmit} className="flex items-center border-gray-900 dark:border-gray-400 border rounded-md overflow-hidden">
                <Input onChange={(e) => {
                    seturl(e.target.value);
                }} className="bg-transparent border-none text-gray-900 dark:text-white" type="url" placeholder="Paste your large URL..." />
                <Button className="rounded-none bg-slate-800 text-white dark:bg-white dark:text-gray-900" variant="secondary">Shorten</Button>
            </form>
            {
                shortenUrl && (
                    <div className='container flex flex-row items-center justify-between bg-slate-700 rounded-lg mt-5 p-2 px-5'>
                        <div>
                            <Link target='_blank' className='text-white font-bold underline flex gap-2' href={shortenUrl.shorten}>
                                itiny.link/{shortenUrl.shorten}
                                <ExternalLink />
                            </Link>
                        </div>
                        <div>
                            <Button onClick={() => {
                                navigator.clipboard.writeText('itiny.link/' + shortenUrl.shorten)
                                toast({
                                    title: "Copied"
                                })
                            }} className='flex gap-3'> <CopyIcon /> Copy</Button>
                        </div>
                    </div>
                )
            }

        </div>
    )
}
