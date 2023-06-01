import React, { useEffect, useState } from "react"
import { MultipleColorfulWords } from "./MultipleColorfulWords"

const getCurrentDimension = (window: Window) => {
    return {
        width: window.innerWidth,
        height: window.innerHeight,
    }
}

export const ColorfulH1 = ({
    text,
    className,
}: {
    text: string
    className?: string
}) => {
    const [screenSize, setScreenSize] = useState<{
        width: number
        height: number
    }>()

    useEffect(() => {
        const updateDimension = () => {
            setScreenSize(getCurrentDimension(window))
        }
        window.addEventListener("resize", updateDimension)

        return () => {
            window.removeEventListener("resize", updateDimension)
        }
    }, [screenSize])

    useEffect(() => {
        // have to explicitly call this on mount because it doesn't get called on mount with the one above
        setScreenSize(getCurrentDimension(window))
    }, [])

    return screenSize ? (
        <MultipleColorfulWords
            words={text}
            size={
                screenSize
                    ? screenSize.width < 400
                        ? 8
                        : screenSize.width < 670
                        ? 12
                        : 16
                    : 16
            }
            className={className}
        />
    ) : null
}
