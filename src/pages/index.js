import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"

import { colors } from "../components/global-styles"
import Layout from "../components/layout"
import SEO from "../components/seo"

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
        margin: 2rem 0 4rem;
        line-height: 1.6;
      `}
    >
      I'm a front-end developer based in San Luis Obispo, CA. I have a passion
      for creating blazing fast web apps with a focus on SEO.
    </p>
    <div>
      <h2>Projects by Technology</h2>
      <ul
        css={css`
          list-style-type: none;
          display: flex;
          flex-wrap: wrap;
          margin-left: 0;
          max-width: 700px;
          & a {
            color: unset;
            background: none;
            text-decoration: none;
          }
          & li {
            background-color: white;
            margin-right: 0.75rem;
            padding: 2px 0.45rem;
            border-radius: 4px;
            border-bottom: 2px solid ${colors.teal};
            &:before {
              content: "#";
              margin-right: 2px;
              font-weight: bold;
              color: ${colors.teal};
            }
            &:hover {
              border-bottom: 2px solid ${colors.salmon};
              &:before {
                color: ${colors.salmon};
              }
            }
          }
        `}
      >
        <Link to="/tag/reactjs/">
          <li>reactjs</li>
        </Link>
        <Link to="/tag/gatsbyjs/">
          <li>gatsbyjs</li>
        </Link>
        <Link to="/tag/es6/">
          <li>es6</li>
        </Link>
        <Link to="/tag/css3/">
          <li>css3</li>
        </Link>
        <Link to="/tag/responsive-design/">
          <li>responsive-design</li>
        </Link>
        <Link to="/tag/rest-apis/">
          <li>rest-apis</li>
        </Link>
        <Link to="/tag/git/">
          <li>git</li>
        </Link>
        <Link to="/tag/seo/">
          <li>seo</li>
        </Link>
        <Link to="/tag/accessibility/">
          <li>accessibility</li>
        </Link>
        <Link to="/tag/php/">
          <li>php</li>
        </Link>
      </ul>
    </div>
  </Layout>
)

export default IndexPage
