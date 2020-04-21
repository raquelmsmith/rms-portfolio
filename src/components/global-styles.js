export const colors = {
  white: "#ffffff",
  grey200: "#f4f7f6",
  grey300: "#e0e4e3",
  grey500: "#7c7c7c",
  grey800: "#333",
  teal200: "#bcebe1",
  teal: "#a8dcd1",
  teal600: "#33ccac",
  teal800: "#397d6f",
  salmon: "#ff8585",
}

export const boxShadow = `
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.10);
`

export const buttonPrimary = `
    background-color: ${colors.salmon};
    border: none;
    box-shadow: none;
    text-shadow: none;
    color: ${colors.white};
    text-transform: uppercase;
    font-size: 0.9rem;
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
    padding: 0.8rem 1.5rem;
    border-radius: 3px;
    letter-spacing: 1px;
    &:disabled {
        background: ${colors.grey300};
    }
    &:focus {
        outline: none;
    }
`

export const formField = `
    border: none;
    background: ${colors.grey200};
    margin: 0.5rem 0 0;
    padding: 0.5rem;
    border-bottom: 3px solid ${colors.grey200};
    &:focus {
        outline: none;
        border-bottom: 3px solid ${colors.teal};
    }
`

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

export const cssTriangle = (
  color,
  direction,
  size = "6px",
  position = "absolute"
) => {
  let css = `
        display: block;
        content: '';
        position: ${position};
        width: 0;
        height: 0;`
  if (direction === "down") {
    css += `
        border-left: ${size} solid transparent;
        border-right: ${size} solid transparent;
        border-top: ${size} solid ${color};
        margin-top: 0 - round(${size} / 2.5);
        `
  } else if (direction === "up") {
    css += `
        border-left: ${size} solid transparent;
        border-right: ${size} solid transparent;
        border-bottom: ${size} solid ${color};
        margin-bottom: 0 - round(${size} / 2.5);
        `
  } else if (direction === "right") {
    css += `
        border-top: ${size} solid transparent;
        border-bottom: ${size} solid transparent;
        border-left: ${size} solid ${color};
        margin-right: -${size};
        `
  } else if (direction === "left") {
    css += `
        border-top: ${size} solid transparent;
        border-bottom: ${size} solid transparent;
        border-right: ${size} solid ${color};
        margin-left: -${size};
        `
  }
  return css
}
