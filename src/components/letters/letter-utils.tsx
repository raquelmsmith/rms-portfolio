import React from "react"
import {
    A,
    Apostrophe,
    B,
    C,
    Comma,
    D,
    E,
    Exclamation,
    F,
    G,
    H,
    Hyphen,
    I,
    J,
    K,
    L,
    LeftParentheses,
    M,
    N,
    O,
    P,
    Period,
    Q,
    QuestionMark,
    R,
    RightParentheses,
    S,
    T,
    U,
    V,
    W,
    X,
    Y,
    Z,
} from "./letters"

export const getRandomFillColor = () => {
    const colors = [
        "#FCC048",
        "#BF44D3",
        "#E23291",
        "#F96F14",
        "#F65349",
        "#07B4E5",
        "#2FC77A",
    ]
    const randomIndex = Math.floor(Math.random() * colors.length)
    return colors[randomIndex]
}

export const getNonRepeatingRandomFillColors = (numColors: number) => {
    const colors: string[] = []
    while (colors.length < numColors) {
        const randomColor = getRandomFillColor()
        if (!colors.includes(randomColor)) {
            colors.push(randomColor)
        }
    }
    return colors
}

export const getLetterComponent = (letter: string, muted?: boolean) => {
    const letterComponent = letter.toUpperCase()
    switch (letterComponent) {
        case "A":
            return <A muted={muted} />
        case "B":
            return <B muted={muted} />
        case "C":
            return <C muted={muted} />
        case "D":
            return <D muted={muted} />
        case "E":
            return <E muted={muted} />
        case "F":
            return <F muted={muted} />
        case "G":
            return <G muted={muted} />
        case "H":
            return <H muted={muted} />
        case "I":
            return <I muted={muted} />
        case "J":
            return <J muted={muted} />
        case "K":
            return <K muted={muted} />
        case "L":
            return <L muted={muted} />
        case "M":
            return <M muted={muted} />
        case "N":
            return <N muted={muted} />
        case "O":
            return <O muted={muted} />
        case "P":
            return <P muted={muted} />
        case "Q":
            return <Q muted={muted} />
        case "R":
            return <R muted={muted} />
        case "S":
            return <S muted={muted} />
        case "T":
            return <T muted={muted} />
        case "U":
            return <U muted={muted} />
        case "V":
            return <V muted={muted} />
        case "W":
            return <W muted={muted} />
        case "X":
            return <X muted={muted} />
        case "Y":
            return <Y muted={muted} />
        case "Z":
            return <Z muted={muted} />
        case "'":
            return <Apostrophe muted={muted} />
        case ",":
            return <Comma muted={muted} />
        case "!":
            return <Exclamation muted={muted} />
        case "?":
            return <QuestionMark muted={muted} />
        case "(":
            return <LeftParentheses muted={muted} />
        case ")":
            return <RightParentheses muted={muted} />
        case ".":
            return <Period muted={muted} />
        case "-":
            return <Hyphen muted={muted} />
        default:
            return <></>
    }
}
