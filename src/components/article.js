import React, { Component } from "react"
import { css } from "@emotion/react"

import {
  boxShadow,
  colors,
  orderedListStyles,
  unorderedListStyles,
  underline,
} from "../components/global-styles"
import "./layout.css"

class Article extends Component {
  render() {
    return (
      <div
        css={css`
          background: ${colors.white};
          padding: 1.5rem;
          font-size: 1.1rem;
          line-height: 1.6;
          @media (min-width: 650px) {
            padding: 3rem;
          }
          a {
            color: ${colors.grey800};
            text-decoration: none;
            ${underline(
              colors.white,
              colors.salmon,
              colors.salmon,
              "100%",
              "2px"
            )}
            &:hover {
              ${underline(
                colors.white,
                colors.teal,
                colors.teal,
                "100%",
                "2px"
              )}
            }
          }
          img {
            ${boxShadow}
            display: block;
            margin: 0 auto;
          }
          code {
            background: rgba(168, 220, 209, 0.3);
            border: none;
            box-shadow: none;
            color: #333;
            padding: 3px 8px;
          }
          ${orderedListStyles}
          ${unorderedListStyles}
          blockquote {
            background: ${colors.grey200};
            padding: 1.5rem;
            border-radius: 4px;
            border-left: 4px solid ${colors.teal};
            font-style: italic;
            margin: 2rem;
          }
        `}
      >
        {this.props.children}
      </div>
    )
  }
}

export default Article
