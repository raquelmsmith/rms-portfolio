import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"

import { colors, underline } from "../components/global-styles"
import Layout from "../components/layout"
import SEO from "../components/seo"
import TagList from "../components/tagList"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Raquel M Smith"
      keywords={[`developer`, `javascript`, `react`, `php`]}
    />
    <h1
      css={css`
        font-size: 5rem;
        margin-top: 3rem;
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
      I'm a front-end developer based in San Luis Obispo, CA. I build
      mobile-optimized websites, mostly using modern Javascript and PHP.
    </p>
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
      <Link to="/about-me">Learn more about me.</Link>
    </p>
    <div
      css={css`
        margin-bottom: 3rem;
      `}
    >
      <h2>Technology</h2>
      <TagList
        tags={["javascript", "reactjs", "gatsbyjs", "es6", "css3", "php"]}
      />
      <p
        css={css`
          max-width: 900px;
          font-size: 1.3rem;
          margin: 1rem 0 4rem;
          line-height: 1.6;
          a {
            text-decoration: none;
            ${underline(
              colors.grey200,
              colors.teal,
              colors.teal,
              "100%",
              "2px"
            )}
          }
        `}
      >
        <Link to="/projects">View projects.</Link>
      </p>
    </div>
  </Layout>
)

export default IndexPage
