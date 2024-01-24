import { LoaderUrl } from '@/components/loader/loader-url';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

const ShortenLink = () => {
    const router = useRouter();
    useEffect(() => {

        if (!router) return;

        if (router.query.shorten) {
            getUrlLarge(router.query.shorten as string);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [router])

    const getUrlLarge = async (shortenUrl: string) => {
        const result = await fetch("/api/url?urlTinied=" + router.query.shorten);
        const resultJson = await result.json();
        if (resultJson && resultJson.url) {
            router.push(resultJson.url!);
        } else {
            router.push('/');
        }
    }

    return (
        <div></div>
    )
}

export default ShortenLink;
