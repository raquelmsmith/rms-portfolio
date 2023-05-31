import React, { useEffect, useState } from "react"
import { MultipleColorfulWords } from "./MultipleColorfulWords"

const getCurrentDimension = () => {
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
    const [screenSize, setScreenSize] = useState(getCurrentDimension())

    useEffect(() => {
        const updateDimension = () => {
            console.log(getCurrentDimension())
            setScreenSize(getCurrentDimension())
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
