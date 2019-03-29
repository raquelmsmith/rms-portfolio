import React, { Component } from "react"
import { css } from "@emotion/core"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/card"

class Projects extends Component {
  render() {
    const data = this.props.data

    return (
      <Layout>
        <SEO title="Projects" />
        <h1
          css={css`
            text-align: center;
            margin: 3rem auto;
          `}
        >
          Projects
        </h1>
        <div
          css={css`
            max-width: 900px;
            padding: 0 3rem 3rem;
            margin: 0 auto;
            article + article {
              margin-top: 3rem;
            }
          `}
        >
          {data.allWordpressWpProjects.edges.map(({ node }) => (
            <Card
              title={node.title}
              description={node.excerpt}
              target={`projects/${node.slug}`}
              tags={node.tags.map(tag => tag.name)}
            >
              <Img
                alt={node.featured_media.alt_text}
                fluid={node.featured_media.localFile.childImageSharp.fluid}
              />
            </Card>
          ))}
        </div>
      </Layout>
    )
  }
}

export default Projects

export const pageQuery = graphql`
  query {
    allWordpressWpProjects(sort: { fields: [date], order: DESC }) {
      edges {
        node {
          title
          excerpt
          slug
          tags {
            id
            name
          }
          featured_media {
            source_url
            alt_text
            localFile {
              childImageSharp {
                fluid(maxWidth: 400, maxHeight: 250) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
