import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { css } from "@emotion/core"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          css={css`
            margin: 0 auto;
            max-width: 1200px;
            padding: 0px 1.0875rem 1.45rem;
            padding-top: 0;
            flex-grow: 1;
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
          `}
        >
          <main>{children}</main>
        </div>
        <footer
          css={css`
            margin: 0 auto;
            max-width: 1200px;
            padding: 0px 1.0875rem 1.45rem;
            padding-top: 0;
          `}
        >
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
