import React from "react"
import { Link } from "./link"
import { MultipleColorfulWords } from "./MultipleColorfulWords"

export const Footer = ({ showLogo = true }: { showLogo?: boolean }) => {
    return (
        <div className="-mt-6">
            <div className="flex items-center justify-center gap-x-4">
                <Link to="/about">about</Link>
                <Link to="/words">words</Link>
                <Link to="/contact">contact</Link>
            </div>
            {showLogo && (
                <div className="flex items-center justify-center mt-4">
                    <Link to="/">
                        <MultipleColorfulWords
                            words="Raquel M Smith"
                            size={4}
                            muted
                        />
                    </Link>
                </div>
            )}
        </div>
    )
}
