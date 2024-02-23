'use client';
import React, { FormEvent, useEffect, useState } from 'react'
import { useToast, Input, Button } from "@/components/ui/"

// Functions
import { handleAddHistory, sendingURLToTiny, listLocalStorageTinied } from './utils';

// Components
import { History } from '../history/History';
import { Tinied } from './tinied';
import { LoadingSpinnerForm } from './loading-spinner-form';

export const UrlForm = () => {
    const { toast } = useToast();

    const [url, seturl] = useState<String>("");
    const [loading, setLoading] = useState<boolean>(false);
    const [listOfUrl, setListOfUrl] = useState<String[]>([]);
    const [shortenUrl, setShortenUrl] = useState<{ url: string, shorten: string } | null>(null)


    useEffect(() => {
        listLocalStorageTinied(setListOfUrl);
    }, []);


    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        toast({
            title: "Shortening URL",
        });

        const resultJson = await sendingURLToTiny(url);

        setShortenUrl({ url: resultJson.url, shorten: resultJson.tinied })
        handleAddHistory(resultJson.tinied, listOfUrl, setListOfUrl);
        setLoading(false);
        seturl('');
    }
    return (
        <div className="w-full max-w-xl">
            <form name='form-url-shorter' id='form-url-shorter' onSubmit={handleSubmit} className="flex items-center border-gray-900 dark:border-gray-400 border rounded-md overflow-hidden">
                <Input value={url as string} required onChange={(e) => {
                    seturl(e.target.value);
                }} className="bg-transparent border-none text-gray-900 dark:text-white" type="url" placeholder="Paste your large URL..." />
                <Button className="rounded-none" >Shorten</Button>
            </form>

            {
                loading && (
                    <LoadingSpinnerForm />
                )
            }

            {
                (shortenUrl && !loading) && (
                    <Tinied shortenUrl={shortenUrl} toast={toast} />
                )
            }

            <History listOfUrls={listOfUrl} toast={toast} />
        </div>
    )
}
