// components
import { ShorterHome } from "@/components/home/shorter-home";
import { Menu } from "@/components/menu";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950 ">
      <Menu />
      <main>
        <ShorterHome />
      </main>
    </div>
  )
}
