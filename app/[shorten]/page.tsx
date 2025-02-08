import { RedirectionComponent } from "@/components/redirection/Redirection";
import { getURLFromAction } from "@/pages/api/url";

interface ShortenURLProps {
    params: Promise<{ shorten: string }>
}

const ShortenLink = async ({ params }: ShortenURLProps) => {

    const { shorten } = await params;
    const result = await getURLFromAction(shorten);

    if (result == null) {
        return <>
            <div className="flex justify-center items-center min-h-screen">
                Redirection not found
            </div>
        </>
    } else {
        return <RedirectionComponent url={result.url} />
    }

}

export default ShortenLink;