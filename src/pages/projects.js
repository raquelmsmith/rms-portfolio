import React from "react"
import { css } from "@emotion/core"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/card"

const Projects = props => (
  <Layout>
    <SEO title="Projects" />
    <h1
      css={css`
        text-align: center;
      `}
    >
      Projects
    </h1>
    <div
      css={css`
        max-width: 900px;
        padding: 3rem;
        margin: 0 auto;
        article + article {
          margin-top: 3rem;
        }
      `}
    >
      <Card
        title="Pinch of Yum"
        description="A food blog that sees over 4 million visitors per month"
        target="projects/pinchofyum"
        tags={["reactjs", "php", "css"]}
      >
        <Img
          alt="Screenshot of the Pinch of Yum homepage"
          fluid={props.data.pinchofyum.childImageSharp.fluid}
        />
      </Card>
      <Card
        title="ZoneStamp"
        description="A simple web app that creates shareable links for online events in any timezone"
        target="projects/zonestamp"
        tags={["reactjs", "css"]}
      >
        <Img
          alt="Screenshot of the ZoneStamp homepage"
          fluid={props.data.zonestamp.childImageSharp.fluid}
        />
      </Card>
      <Card
        title="Raquel M Smith"
        description="My personal portfolio exemplifying clean code and outstanding performance"
        target="projects/wptasty"
        tags={["reactjs", "gatsbyjs", "es6", "css"]}
      >
        <Img
          alt="Screenshot of the WP Tasty homepage"
          fluid={props.data.raquelmsmith.childImageSharp.fluid}
        />
      </Card>
      <Card
        title="WP Tasty"
        description="A boutique ecommerce company selling software products for food bloggers"
        target="projects/wptasty"
        tags={["reactjs", "php", "css"]}
      >
        <Img
          alt="Screenshot of the WP Tasty homepage"
          fluid={props.data.wptasty.childImageSharp.fluid}
        />
      </Card>
    </div>
  </Layout>
)

export default Projects

export const pageQuery = graphql`
  query {
    pinchofyum: file(relativePath: { eq: "pinchofyum.png" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    raquelmsmith: file(relativePath: { eq: "raquelmsmithsite2.png" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    wptasty: file(relativePath: { eq: "wptasty.png" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    zonestamp: file(relativePath: { eq: "zonestamp.png" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
