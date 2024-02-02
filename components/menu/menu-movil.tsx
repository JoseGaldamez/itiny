import { GitHubLogoIcon } from '@radix-ui/react-icons'
import React from 'react'
import { AboutMenu } from './about-menu'

export const MenuMovil = () => {
    return (
        <menu className="sm:hidden flex items-center">
            <AboutMenu />
            <a href="https://github.com/JoseGaldamez/itiny" title='Go to the github project' target="_blank">
                <GitHubLogoIcon className="size-6 text-gray-600 dark:text-gray-100" />
            </a>
        </menu>
    )
}
