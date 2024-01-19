'use client';

import React, { FormEvent, useState } from 'react'

import { useToast } from "@/components/ui/use-toast"

import { Input } from '../ui/input'
import { Button } from '../ui/button'

export const UrlForm = () => {
    const { toast } = useToast();

    const [url, seturl] = useState("");

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Enviando link al backend");
        console.log(e.target);

        toast({
            title: "Enviando al backend",
            slot: "Slot",
            description: url,
        })

    }
    return (
        <div className="w-full max-w-xl">
            <form onSubmit={handleSubmit} className="flex items-center border-gray-900 dark:border-gray-400 border rounded-md overflow-hidden">
                <Input onChange={(e) => {
                    seturl(e.target.value);
                }} className="bg-transparent border-none text-gray-900 dark:text-white" type="url" placeholder="Paste your large URL..." />
                <Button className="rounded-none bg-slate-800 text-white dark:bg-white dark:text-gray-900" variant="secondary">Shorten</Button>
            </form>
        </div>
    )
}
