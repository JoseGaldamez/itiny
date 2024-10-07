/* eslint-disable @next/next/no-img-element */
import { Linkedin, LocateIcon, WebhookIcon, YoutubeIcon } from "lucide-react"

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import { GitHubLogoIcon } from "@radix-ui/react-icons"

export function PersonalInformation() {
    return (
        <HoverCard>
            <HoverCardTrigger asChild>
                <Button variant="link" className="text-md mr-5">@josegaldamezdev</Button>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
                <div className="flex justify-between space-x-4">
                    <Avatar>
                        <AvatarImage src="https://github.com/JoseGaldamez.png" />
                        <AvatarFallback>José Galdámez</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                        <h4 className="text-sm font-semibold">@josegaldamezdev</h4>
                        <p className="text-sm">
                            Fullstack Developer, building app for the web and mobile.
                        </p>

                        <div className="flex gap-4 py-4 flex-wrap">
                            <a href="https://www.linkedin.com/in/josegaldamezdev/" className="flex items-center" target="_blank">
                                <Linkedin className="mr-2 h-6 w-6 opacity-70" /> <span>LinkedIn</span>
                            </a>
                            <a href="https://github.com/JoseGaldamez" className="flex items-center" target="_blank">
                                <GitHubLogoIcon className="mr-2 h-6 w-6 opacity-70" /> <span>Github</span>
                            </a>
                            <a href="https://www.youtube.com/codigocorrecto" className="flex items-center" target="_blank">
                                <YoutubeIcon className="mr-2 h-6 w-6 opacity-70" /> <span>YouTube</span>
                            </a>
                            <a href="https://josegaldamez.dev/" className="flex items-center" target="_blank">
                                <img src="https://github.com/JoseGaldamez.png" alt="José Galdámez Web Site" className="mr-2 h-6 w-6 opacity-70 rounded-full" /> <span>Website</span>
                            </a>
                        </div>

                        <div className="flex items-center pt-2 border-t border-gray-800">
                            <LocateIcon className="mr-2 h-4 w-4 opacity-70" />
                            {" "}
                            <span className="text-xs text-muted-foreground">
                                El Progreso, Honduras
                            </span>
                        </div>
                    </div>
                </div>
            </HoverCardContent>
        </HoverCard>
    )
}
