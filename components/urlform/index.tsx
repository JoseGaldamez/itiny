'use client';

import React, { FormEvent, useEffect, useState } from 'react'

import { useToast } from "@/components/ui/use-toast"

import { Input } from '../ui/input'
import { Button } from '../ui/button'
import Link from 'next/link';
import { CopyIcon, ExternalLink, Loader } from 'lucide-react';
import { History } from '../history';
import { LoaderUrl } from '../loader/loader-url';

export const UrlForm = () => {
    const { toast } = useToast();

    const [url, seturl] = useState<String>("");
    const [loading, setLoading] = useState<boolean>(false);
    const [listOfUrl, setListOfUrl] = useState<String[]>([]);
    const [shortenUrl, setShortenUrl] = useState<{ url: string, shorten: string } | null>(null)


    useEffect(() => {
        const list = localStorage.getItem('itiny-list-url');

        if (!list) {
            const listJson: String[] = [];
            localStorage.setItem('itiny-list-url', JSON.stringify(listJson));
            setListOfUrl(listJson);
            return;
        }

        const listJson = JSON.parse(list!) as String[];
        setListOfUrl(listJson);

    }, []);

    const handleAddHistory = (newURL: String) => {

        if (listOfUrl.includes(newURL)) return;

        const urls: String[] = [...listOfUrl, newURL];
        localStorage.setItem('itiny-list-url', JSON.stringify(urls));
        setListOfUrl(urls);
    }


    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

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

        setShortenUrl({ url: resultJson.url, shorten: resultJson.tinied })
        handleAddHistory(resultJson.tinied);
        setLoading(false);
    }
    return (
        <div className="w-full max-w-xl">
            <form onSubmit={handleSubmit} className="flex items-center border-gray-900 dark:border-gray-400 border rounded-md overflow-hidden">
                <Input required onChange={(e) => {
                    seturl(e.target.value);
                }} className="bg-transparent border-none text-gray-900 dark:text-white" type="url" placeholder="Paste your large URL..." />
                <Button className="rounded-none" >Shorten</Button>
            </form>

            {
                loading && (
                    <div className='container flex flex-row items-center justify-center bg-slate-700 rounded-lg mt-5 p-5 px-5'>
                        <Loader size={32} strokeWidth={2.5} color='white' className='animate-spin' />
                    </div>
                )
            }

            {
                (shortenUrl && !loading) && (
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

            <History listOfUrls={listOfUrl} toast={toast} />

        </div>
    )
}
