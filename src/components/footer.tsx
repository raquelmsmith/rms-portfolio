import React from "react"
import { Link } from "./link"
import { MultipleColorfulWords } from "./MultipleColorfulWords"

export const Footer = ({ showLogo = true }: { showLogo?: boolean }) => {
    return (
        <div className="pb-6">
            <div className="flex items-center justify-center gap-x-4">
                <Link to="/about" decoration={false}>
                    about
                </Link>
                <Link to="/words" decoration={false}>
                    words
                </Link>
                <Link to="/contact" decoration={false}>
                    contact
                </Link>
            </div>
            {showLogo && (
                <div className="flex items-center justify-center mt-4">
                    <Link to="/">
                        <MultipleColorfulWords
                            words="Raquel M Smith"
                            size={4}
                        />
                    </Link>
                </div>
            )}
        </div>
    )
}
