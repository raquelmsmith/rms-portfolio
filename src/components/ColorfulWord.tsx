import React from "react"
import { getLetterComponent } from "./letters/letter-utils"

export const ColorfulWord = ({
    word,
    size,
    muted = false,
}: {
    word: string
    size?: 4 | 8 | 12 | 16 | 24 | 32 | 48
    muted?: boolean
}) => {
    const letters = word.split("")
    // Because of tailwind's JIT compiler we can't use string interpolation to create the classnames,
    // they have to exist in their entirety in the template so they are included
    const getSizeClasses = () => {
        switch (size) {
            case 4:
                return "h-4 gap-x-1"
            case 8:
                return "h-8 gap-x-1.5"
            case 12:
                return "h-12 gap-x-1.5"
            case 16:
                return "h-16 gap-x-1.5"
            case 24:
                return "h-24 gap-x-2"
            case 32:
                return "h-32 gap-x-2"
            case 48:
                return "h-48 gap-x-2"
            default:
                return "h-8 gap-x-2"
        }
    }

    return (
        <span>
            <div className={`flex ${getSizeClasses()}`}>
                {letters.map(letter => (
                    <span>
                        <div className={`${getSizeClasses()}`}>
                            {getLetterComponent(letter, muted)}
                        </div>
                    </span>
                ))}
            </div>
        </span>
    )
}
