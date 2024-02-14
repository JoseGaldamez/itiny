import { UrlForm } from "../urlform"
import { TitleForm } from "../urlform/titleform"
import { Footer } from "../footer/Footer"

export function ShorterHome() {
  return (
    <main className="flex flex-col items-center pt-24 py-2 px-4 ">
      <TitleForm />
      <UrlForm />
      <Footer />
    </main>
  )
}
