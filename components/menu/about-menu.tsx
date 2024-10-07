import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

import React from 'react';
import { Button } from "../ui/button";

export const AboutMenu = () => {
    return (
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
                            I was bored a weekend, some people go partying, but I build web applications on my free time.
                        </p>
                    </div>
                </DialogContent>
            </Dialog>
        </span>
    )
}
