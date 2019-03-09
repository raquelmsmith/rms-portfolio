export const boxShadow = `
    box-shadow: 0px 4px 26px -2px rgba(51, 51, 51, 0.5);
    margin-top: 2rem;
    margin-bottom: 2rem;
`

export const colors = {
  white: "#ffffff",
  lightGrey: "#f4f7f6",
  mediumGrey: "#7c7c7c",
  darkGrey: "#333",
  teal: "#a8dcd1",
  salmon: "#ff8585",
}

export const orderedListStyles = `
    ol {
        list-style: none;
        counter-reset: item;
        > li {
            counter-increment: item;
            margin-bottom: 5px;
            padding-left: 2rem;
            &:before {
                background: ${colors.teal};
                content: counter(item);
                border-radius: 100%;
                display: inline-block;
                color: ${colors.white};
                margin-left: -1.9rem;
                margin-right: 10px;
                font-size: 0.8rem;
                font-weight: bold;
                text-align: center;
                width: 1.2rem;
            }
        }
    }
`

export const unorderedListStyles = `
    ul {
        list-style: none;
        > li {
            padding-left: 2rem;
            &:before {
                background-color: ${colors.salmon};
                border-radius: 50%;
                content: '';
                display: inline-block;
                width: 8px;
                height: 8px;
                margin-left: -1.3rem;
                margin-right: 0.8rem;
                margin-bottom: 0.2rem;
            }
        }
    }
`

export const fonts = {
  quicksand: '"Quicksand", sans-serif',
  roboto: '"Roboto", sans-serif',
}

export const underline = (background, text, selection, position, width) => `
    color: inherit;
    text-decoration: none;
    background: linear-gradient(${background}, ${background}),
        linear-gradient(${background}, ${background}), linear-gradient(${text}, ${text});
    background-size: 0.05em ${width}, 0.05em ${width}, ${width} ${width};
    background-repeat: no-repeat, no-repeat, repeat-x;
    text-shadow: 0.03em 0 ${background}, -0.03em 0 ${background},
        0 0.03em ${background}, 0 -0.03em ${background}, 0.06em 0 ${background},
        -0.06em 0 ${background}, 0.09em 0 ${background}, -0.09em 0 ${background},
        0.12em 0 ${background}, -0.12em 0 ${background}, 0.15em 0 ${background},
        -0.15em 0 ${background};
    background-position-y: ${position}, ${position}, ${position};
    background-position-x: 0%, 100%, 0%;

    &::selection {
        text-shadow: 0.03em 0 ${selection}, -0.03em 0 ${selection},
            0 0.03em ${selection}, 0 -0.03em ${selection}, 0.06em 0 ${selection},
            -0.06em 0 ${selection}, 0.09em 0 ${selection}, -0.09em 0 ${selection},
            0.12em 0 ${selection}, -0.12em 0 ${selection}, 0.15em 0 ${selection},
            -0.15em 0 ${selection};
        background: ${selection};
    }
    &:before,
    &:after,
    *,
    *:before,
    *:after {
        text-shadow: none;
    }
`
