/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { ThemeMode } from "../thememode"
import { GitHubLogoIcon } from "@radix-ui/react-icons"
import { PersonalInformation } from "./personal-link"

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import iTinyLinkDark from '@/public/itiny-ligth.png';
import iTinyLinkLigth from '@/public/itiny-dark.png';
import { Button } from "../ui/button";

export function Menu() {
    return (
        <div className="flex w-full p-5 bg-slate-300 dark:bg-black bg-opacity-40 dark:bg-opacity-20 justify-between items-center">
            <div>
                <Image className="w-32 visible dark:hidden" src={iTinyLinkLigth} alt="Logo ItinyLink" />
                <Image className="w-32 hidden dark:inline" src={iTinyLinkDark} alt="Logo ItinyLink" />
            </div>
            <menu className="text-gray-900 dark:text-white flex items-center">
                <span className="mr-5">
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button variant="outline">About</Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                            <DialogHeader>
                                <DialogTitle>About</DialogTitle>
                            </DialogHeader>
                            <div className="py-4">
                                <p>
                                    I was bored a weekend, some people go partying, I build web applications.
                                </p>
                            </div>
                        </DialogContent>
                    </Dialog>
                </span>
                <PersonalInformation />
                <a href="https://github.com/JoseGaldamez/itiny" target="_blank">
                    <GitHubLogoIcon className="size-8 mr-5" />
                </a>
                <ThemeMode />
            </menu>
        </div>
    )
}
