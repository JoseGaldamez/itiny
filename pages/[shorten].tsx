'client use';

import { useRouter } from 'next/router';

const ShortenLink = () => {
    const getUrlLarge = async (shortenUrl: string) => {
        const result = await fetch("/api/url?urlTinied=" + shortenUrl);
        const newUrl = await result.text();
        console.log(newUrl);

        window.location.href = newUrl;
    }

    if (typeof window !== 'undefined') {
        const url = window.location;
        getUrlLarge(url.pathname.replace('/', ''));
    }

    return <>Redirecting...</>
}

export default ShortenLink;
