/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
import { ThemeMode } from "../thememode"
import { GitHubLogoIcon } from "@radix-ui/react-icons"

export function Menu() {
    return (
        <div className="flex w-full p-5 bg-slate-100 dark:bg-slate-950 justify-between items-center">
            <div>
                <img className="w-14" src="https://static.vecteezy.com/system/resources/thumbnails/013/760/436/small/abstract-link-logo-illustration-in-trendy-and-minimal-style-png.png" alt="Logo ItinyLink" />
            </div>
            <menu className="text-gray-900 dark:text-white flex items-center">
                <span className="mr-5">
                    About
                </span>
                <a href="https://github.com/JoseGaldamez/itiny" target="_blank">
                    <GitHubLogoIcon className="size-8 mr-5" />
                </a>
                <ThemeMode />
            </menu>
        </div>
    )
}
