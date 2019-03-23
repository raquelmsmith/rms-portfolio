import React, { Component } from "react"
import { css } from "@emotion/core"
import Icon from "./icon"

import { colors, underline } from "../components/global-styles"

class Footer extends Component {
  render() {
    return (
      <footer
        css={css`
          padding: 1rem 2rem;
          background-color: ${colors.grey800};
          color: ${colors.grey500};
          text-align: center;
        `}
      >
        <div
          css={css`
            margin: 0 auto;
            max-width: 1200px;
            a {
              color: ${colors.grey500};
              text-decoration: none;
              &:hover {
                ${underline(
                  colors.grey800,
                  colors.teal,
                  colors.teal,
                  "100%",
                  "1px"
                )}
              }
            }
          `}
        >
          <ul
            css={css`
              list-style: none;
              display: flex;
              justify-content: center;
              margin-bottom: 0;
              li {
                display: flex;
                align-items: center;
                padding: 0.5rem 1.5rem;
                margin-bottom: 0;
              }
              svg {
                margin-right: 0.5rem;
              }
            `}
          >
            <li>
              <Icon
                name="github"
                width="1.2rem"
                height="1.2rem"
                fill={colors.grey500}
              />
              <a href="https://github.com/raquelmsmith">@raquelmsmith</a>
            </li>
            <li>
              <Icon
                name="linkedin"
                width="1.2rem"
                height="1.2rem"
                fill={colors.grey500}
              />
              <a href="https://www.linkedin.com/in/raquelmsmith/">
                @raquelmsmith
              </a>
            </li>
            <li>
              <Icon
                name="envelope"
                width="1.2rem"
                height="1.2rem"
                fill={colors.grey500}
              />
              <a href="mailto:hello@raquelmsmith.com">hello@raquelmsmith.com</a>
            </li>
          </ul>
        </div>
      </footer>
    )
  }
}

export default Footer
