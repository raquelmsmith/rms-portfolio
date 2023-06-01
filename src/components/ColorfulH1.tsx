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

    return (
        <MultipleColorfulWords
            words={text}
            size={screenSize.width < 400 ? 8 : screenSize.width < 670 ? 12 : 16}
            className={className}
        />
    )
}
