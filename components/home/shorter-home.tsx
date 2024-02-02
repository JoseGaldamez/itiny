import { Input } from "@/components/ui/input"
import { Button } from "../ui/button"
import { UrlForm } from "../urlform"
import { History } from "../history"
import { TitleForm } from "../urlform/titleform"
import { Footer } from "../footer"

export function ShorterHome() {
  return (
    <main className="flex flex-col items-center pt-24 py-2 px-4 ">
      <TitleForm />
      <UrlForm />
      <Footer />
    </main>
  )
}
