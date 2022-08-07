import React, { Component } from "react"
import { css } from "@emotion/react"
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
        <SEO
          title="Projects"
          description="A sampling of projects built by Raquel M Smith using JavaScript, ReactJS, and PHP"
        />
        <h1
          css={css`
            text-align: center;
            margin: 3rem auto;
            font-size: 4rem;
          `}
        >
          Projects
        </h1>
        <div
          css={css`
            max-width: 900px;
            padding: 0 0 3rem;
            margin: 0 auto;
            article + article {
              margin-top: 3rem;
            }
            @media (min-width: 650px) {
              padding: 0 3rem 3rem;
            }
          `}
        >
          {data.allWpProject.edges.map(({ node }) => (
            <Card
              title={node.title}
              description={node.excerpt}
              target={`/projects/${node.slug}`}
              tags={node.tags.nodes.map(tag => tag.name)}
            >
              <Img
                alt={node.featuredImage?.node.altText}
                fluid={node.featuredImage?.node.localFile.childImageSharp.fluid}
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
    allWpProject(sort: { fields: [date], order: DESC }) {
      edges {
        node {
          title
          excerpt
          slug
          tags {
            nodes {
              id
              name
            }
          }
          featuredImage {
            node {
              sourceUrl
              altText
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
  }
`
