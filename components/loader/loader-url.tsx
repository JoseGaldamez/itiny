import { Loader } from "lucide-react"

export const LoaderUrl = () => {
    return (
        <main className="flex flex-col items-center pt-24 py-2 px-4 bg-slate-600">
            <Loader size={32} strokeWidth={2.5} />
        </main>
    )
}