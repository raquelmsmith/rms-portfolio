import React, { Component } from "react"
import { css } from "@emotion/core"
import Icon from "./icon"
import { Link } from "gatsby"

import { colors, underline } from "../components/global-styles"

class Footer extends Component {
  render() {
    return (
      <footer
        css={css`
          padding: 1rem 2rem;
          background-color: ${colors.grey800};
          color: ${colors.grey300};
          text-align: center;
          position: fixed;
          width: 100%;
          bottom: 0;
          z-index: 100;
          @media (min-width: 650px) {
            position: relative;
          }
        `}
      >
        <div
          css={css`
            margin: 0 auto;
            max-width: 1200px;
            a {
              color: ${colors.grey300};
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
              justify-content: space-between;
              @media (min-width: 650px) {
                justify-content: center;
              }
              margin: 0;
              li {
                align-items: center;
                padding: 0.5rem;
                margin-bottom: 0;
                font-size: 0.75rem;
                @media (min-width: 650px) {
                  padding: 0.5rem 1.5rem;
                  font-size: 1rem;
                }
              }
              svg {
                margin-right: 0.5rem;
                display: block;
                margin: 0 auto 0.4rem;
                @media (min-width: 650px) {
                  margin-right: 0.5rem;
                }
              }
            `}
          >
            <li
              css={css`
                @media (min-width: 650px) {
                  display: none;
                }
              `}
            >
              <Icon
                name="person"
                width="1.2rem"
                height="1.2rem"
                viewBox="0 0 256 512"
                fill={colors.grey300}
              />
              <Link to="/about-me/">About</Link>
            </li>
            <li
              css={css`
                @media (min-width: 650px) {
                  display: none;
                }
              `}
            >
              <Icon
                name="asterisk"
                width="1.2rem"
                height="1.2rem"
                fill={colors.grey300}
              />
              <Link to="/projects/">Projects</Link>
            </li>
            <li
              css={css`
                @media (min-width: 650px) {
                  display: none;
                }
              `}
            >
              <Icon
                name="pencil"
                width="1.2rem"
                height="1.2rem"
                fill={colors.grey300}
              />
              <Link to="/blog/">Blog</Link>
            </li>

            <li
              css={css`
                @media (min-width: 650px) {
                  display: flex;
                }
              `}
            >
              <Icon
                name="github"
                width="1.2rem"
                height="1.2rem"
                fill={colors.grey300}
              />
              <a
                href="https://github.com/raquelmsmith"
                css={css`
                  display: none;
                  @media (min-width: 650px) {
                    display: inline-block;
                  }
                `}
              >
                @raquelmsmith
              </a>
              <a
                href="https://github.com/raquelmsmith"
                css={css`
                  @media (min-width: 650px) {
                    display: none;
                  }
                `}
              >
                Github
              </a>
            </li>
            <li
              css={css`
                @media (min-width: 650px) {
                  display: flex;
                }
              `}
            >
              <Icon
                name="linkedin"
                width="1.2rem"
                height="1.2rem"
                fill={colors.grey300}
              />
              <a
                href="https://www.linkedin.com/in/raquelmsmith/"
                css={css`
                  display: none;
                  @media (min-width: 650px) {
                    display: inline-block;
                  }
                `}
              >
                @raquelmsmith
              </a>
              <a
                href="https://www.linkedin.com/in/raquelmsmith/"
                css={css`
                  @media (min-width: 650px) {
                    display: none;
                  }
                `}
              >
                LinkedIn
              </a>
            </li>
            <li
              css={css`
                @media (min-width: 650px) {
                  display: flex;
                }
              `}
            >
              <Icon
                name="envelope"
                width="1.2rem"
                height="1.2rem"
                fill={colors.grey300}
              />
              <a
                href="mailto:hello@raquelmsmith.com"
                css={css`
                  display: none;
                  @media (min-width: 650px) {
                    display: inline-block;
                  }
                `}
              >
                hello@raquelmsmith.com
              </a>
              <a
                href="mailto:hello@raquelmsmith.com"
                css={css`
                  @media (min-width: 650px) {
                    display: none;
                  }
                `}
              >
                Email
              </a>
            </li>
          </ul>
        </div>
      </footer>
    )
  }
}

export default Footer
