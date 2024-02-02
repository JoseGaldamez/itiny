/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { ThemeMode } from "../thememode"
import { GitHubLogoIcon } from "@radix-ui/react-icons"
import { PersonalInformation } from "./personal-link"

import iTinyLinkDark from '@/public/itiny-ligth.png';
import iTinyLinkLigth from '@/public/itiny-dark.png';
import { MenuMovil } from "./menu-movil";
import { AboutMenu } from "./about-menu";

export function Menu() {
    return (
        <div className="flex w-full p-5 bg-slate-300 dark:bg-black bg-opacity-40 dark:bg-opacity-20 justify-between items-center">
            <div>
                <Image className="w-32 visible dark:hidden" src={iTinyLinkLigth} alt="Logo ItinyLink" />
                <Image className="w-32 hidden dark:inline" src={iTinyLinkDark} alt="Logo ItinyLink" />
            </div>

            <MenuMovil />

            <menu className="text-gray-900 dark:text-white sm:flex items-center hidden">

                <AboutMenu />
                <PersonalInformation />
                <a href="https://github.com/JoseGaldamez/itiny" title='Go to the github project' target="_blank">
                    <GitHubLogoIcon className="size-8 mr-5" />
                </a>
                <ThemeMode />
            </menu>
        </div>
    )
}
