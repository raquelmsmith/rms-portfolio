import { React, Component } from "react"
import { Link, graphql } from "gatsby"
import PropTypes from "prop-types"
import { css } from "@emotion/core"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {
  boxShadow,
  colors,
  orderedListStyles,
  underline,
} from "../components/global-styles"

class BlogIndex extends Component {
  render() {
    const data = this.props.data

    return (
      <Layout>
        <SEO title="Blog" />
        <div
          css={css`
            max-width: 900px;
            padding: 3rem;
            margin: auto;
          `}
        >
          {data.allWordpressPost.edges.map(({ node }) => (
            <div
              css={css`
                background: ${colors.white};
                padding: 3rem;
                font-size: 1.1rem;
                line-height: 1.6;
                margin-bottom: 3rem;
                a {
                  color: ${colors.darkGrey};
                  text-decoration: none;
                  ${underline(
                    colors.white,
                    colors.salmon,
                    colors.salmon,
                    "100%",
                    "2px"
                  )}
                  &:hover {
                    ${underline(
                      colors.white,
                      colors.teal,
                      colors.teal,
                      "100%",
                      "2px"
                    )}
                  }
                }
                img {
                  ${boxShadow}
                  display: block;
                  margin: 0 auto;
                }
                code {
                  background: rgba(168, 220, 209, 0.3);
                  border: none;
                  box-shadow: none;
                  color: #333;
                  padding: 3px 8px;
                }
                ${orderedListStyles}
                blockquote {
                  background: ${colors.lightGrey};
                  padding: 1.5rem;
                  border-radius: 4px;
                  border-left: 4px solid ${colors.teal};
                  font-style: italic;
                  margin: 2rem;
                }
              `}
            >
              <Link to={`blog/${node.slug}`}>
                <h3>{node.title}</h3>
              </Link>
              <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
            </div>
          ))}
        </div>
      </Layout>
    )
  }
}

BlogIndex.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    allWordpressPost(sort: { fields: [date], order: DESC }) {
      edges {
        node {
          title
          excerpt
          slug
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`
