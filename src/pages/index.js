import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"

import { colors, underline } from "../components/global-styles"
import Layout from "../components/layout"
import SEO from "../components/seo"
import TagList from "../components/tagList"

const IndexPage = () => (
  <Layout>
    <SEO title="Raquel M Smith" keywords={[`gatsby`, `application`, `react`]} />
    <h1
      css={css`
        font-size: 5rem;
      `}
    >
      Hi! I'm Raquel.
    </h1>
    <p
      css={css`
        max-width: 900px;
        font-size: 1.3rem;
        margin: 2rem 0 0.5rem;
        line-height: 1.6;
      `}
    >
      I'm a front-end developer based in San Luis Obispo, CA. I build stuff on
      the internet, mostly using ReactJS.
    </p>
    <p
      css={css`
        max-width: 900px;
        font-size: 1.3rem;
        margin: 0 0 4rem;
        line-height: 1.6;
        a {
          text-decoration: none;
          ${underline(colors.grey200, colors.teal, colors.teal, "100%", "2px")}
        }
      `}
    >
      <Link to="/about-me">Learn more about me.</Link>
    </p>
    <div>
      <h2>Projects by Technology</h2>
      <TagList tags={["reactjs", "gatsbyjs", "es6", "css3", "php"]} />
    </div>
  </Layout>
)

export default IndexPage
