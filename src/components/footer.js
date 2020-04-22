import React, { Component } from "react"
import { css } from "@emotion/core"

import { colors, underline } from "../components/global-styles"
import FooterLink from "./footerLink"

class Footer extends Component {
  render() {
    return (
      <footer
        css={css`
          padding: 1rem;
          background-color: ${colors.grey800};
          color: ${colors.grey300};
          text-align: center;
          position: fixed;
          width: 100%;
          bottom: 0;
          z-index: 100;
          @media (min-width: 650px) {
            position: relative;
            padding: 1rem 2rem;
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
            `}
          >
            <FooterLink
              icon="person"
              iconViewBox="0 0 256 512"
              isInternal={true}
              target="/about-me/"
              anchor="About"
              mobileOnly={true}
            />
            <FooterLink
              icon="asterisk"
              isInternal={true}
              target="/projects/"
              anchor="Projects"
              mobileOnly={true}
            />
            <FooterLink
              icon="book"
              isInternal={true}
              target="/bookshelf/"
              anchor="Bookshelf"
              mobileOnly={true}
            />
            <FooterLink
              icon="pencil"
              isInternal={true}
              target="/blog/"
              anchor="Blog"
              mobileOnly={true}
            />
            <FooterLink
              icon="github"
              target="https://github.com/raquelmsmith"
              anchor="Github"
              secondaryAnchor="@raquelmsmith"
              desktopOnly={true}
            />
            <FooterLink
              icon="linkedin"
              target="https://www.linkedin.com/in/raquelmsmith/"
              anchor="LinkedIn"
              secondaryAnchor="@raquelmsmith"
            />
            <FooterLink
              icon="envelope"
              target="mailto:hello@raquelmsmith.com"
              anchor="Email"
              secondaryAnchor="hello@raquelmsmith.com"
            />
          </ul>
        </div>
      </footer>
    )
  }
}

export default Footer
