import React from "react"
import { Link as GatsbyLink } from "gatsby"

export const Link = ({
    to,
    children,
    className,
    target,
}: {
    to: string
    children: React.ReactNode
    className?: string
    target?: string
}) => {
    return (
        <GatsbyLink
            to={to}
            className={`text-indigo-600 transition-all duration-300 hover:text-red-600 ${className}`}
            target={target}
        >
            {children}
        </GatsbyLink>
    )
}
