import React from "react"
import { ColorfulWord } from "./ColorfulWord"

export const MultipleColorfulWords = ({
    words,
    size,
    muted = false,
    className,
}: {
    words: string
    size?: 4 | 8 | 12 | 16 | 24 | 32 | 48
    muted?: boolean
    className?: string
}) => {
    const wordsArray = words.split(" ")

    // Because of tailwind's JIT compiler we can't use string interpolation to create the classnames,
    // they have to exist in their entirety in the template so they are included
    const getGapClass = () => {
        switch (size) {
            case 4:
                return "gap-x-3"
            case 8:
                return "gap-x-4"
            case 12:
                return "gap-x-6"
            case 16:
                return "gap-x-8"
            case 24:
                return "gap-x-12"
            case 32:
                return "gap-x-12"
            case 48:
                return "gap-x-12"
            default:
                return "gap-x-4"
        }
    }

    return (
        <div
            className={`flex flex-wrap gap-y-2 justify-center ${getGapClass()} ${className}`}
        >
            {wordsArray.map(word => (
                <span>
                    <ColorfulWord word={word} size={size} muted={muted} />
                </span>
            ))}
            <span className="hidden">{words}</span>
        </div>
    )
}
