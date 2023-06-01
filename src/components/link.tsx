import React from "react"
import { Link as GatsbyLink } from "gatsby"

export const Link = ({
    to,
    children,
    className,
    target,
    decoration = true,
}: {
    to: string
    children: React.ReactNode
    className?: string
    target?: string
    decoration?: boolean
}) => {
    return (
        <GatsbyLink
            to={to}
            className={`text-violet-300 hover:text-emerald-500
                decoration-gray-400 hover:decoration-emerald-500
                ${
                    decoration &&
                    "underline decoration-dotted underline-offset-2 hover:underline hover:decoration-dotted hover:underline-offset-2"
                }
                transition-all duration-300 
                ${className}
            `}
            target={target}
        >
            {children}
        </GatsbyLink>
    )
}
