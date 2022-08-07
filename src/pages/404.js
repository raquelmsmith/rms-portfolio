import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/react"

import { colors, underline } from "../components/global-styles"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p
      css={css`
        max-width: 900px;
        font-size: 1.3rem;
        margin: 1rem 0 4rem;
        line-height: 1.6;
        a {
          text-decoration: none;
          ${underline(colors.grey200, colors.teal, colors.teal, "100%", "2px")}
        }
      `}
    >
      Whoops! You just hit a route that doesn&#39;t exist. Maybe you were
      looking for a post on my <Link to="/blog/">blog</Link>,{" "}
      <Link to="/projects/">projects</Link> I've worked on, or a little more
      info <Link to="/about-me/">about me</Link>?
    </p>
  </Layout>
)

export default NotFoundPage
