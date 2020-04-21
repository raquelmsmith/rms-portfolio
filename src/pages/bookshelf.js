import { React, Component } from "react"
import { graphql } from "gatsby"
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
import TagList from "../components/tagList"
import Icon from "../components/icon"

class BookIndex extends Component {
  render() {
    const data = this.props.data

    return (
      <Layout>
        <SEO
          title="Books"
          description="Books about product management, people, brains, and parenting - Raquel M Smith"
        />
        <div
          css={css`
            max-width: 900px;
            padding: 3rem 0;
            margin: auto;
            @media (min-width: 650px) {
              padding: 3rem;
            }
          `}
        >
          <h1
            css={css`
              text-align: center;
              margin-bottom: 3rem;
              font-size: 4rem;
            `}
          >
            Bookshelf
          </h1>
          
            <div
              css={css`
                background: ${colors.white};
                padding: 1rem;
                font-size: 1.1rem;
                line-height: 1.6;
                margin-bottom: 3rem;
                @media (min-width: 411px) {
                  padding: 2rem;
                }
                @media (min-width: 768px) {
                  padding: 3rem;
                }
                a {
                  color: ${colors.grey800};
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
                  background: ${colors.grey200};
                  padding: 1.5rem;
                  border-radius: 4px;
                  border-left: 4px solid ${colors.teal};
                  font-style: italic;
                  margin: 2rem;
                }
              `}
            >
              <p>
                This is a short list of some of the books I have on my bookshelf, as well as some links to online publications I enjoy. 
                A green check means I've already read it or, in the case of a blog, I consistently read it. Otherwise, it's on my 
                to-read list. A star means it's a favorite of mine.
              </p>
              <ul
                css={css`
                  margin-top: 3rem;
                `}
            >
              {data.allWordpressWpBooks.edges.map(({ node }) => (
                <li
                  css={css`
                    margin-bottom: 25px;
                    margin-left: 1rem;
                    list-style-type: none;
                    @media (min-width: 411px) {
                      margin-left: 2rem;
                    }
                    @media (min-width: 768px) {
                      margin-left: 3rem;
                    }
                  `}
                >
                  <div
                    css={css`
                    margin-right: 15px;
                    `}
                    >
                    {node.acf.read_status === "Read" ? 
                    <span
                      css={css`
                       margin-left: -30px;
                       margin-right: 10px;
                       margin-bottom: -5px;
                       svg {
                        margin-bottom: -4px;
                       }
                      `}
                    >
                      {node.acf.favorite[0] ? 
                        <Icon
                          name="star"
                          width="1.5rem"
                          height="1.2rem"
                          fill={colors.salmon200}
                          css={css`
                            margin-left: -1.7rem;
                            margin-right: 0.2rem;
                            margin-bottom: -5px;
                            svg {
                              margin-bottom: -4px;
                            }
                          `}
                        />
                      : ``}
                      <Icon
                        name="check"
                        width="1.2rem"
                        height="1.2rem"
                        fill={colors.teal}
                      />
                    </span>
                      : ``}
                    <a href={node.acf.link} target="_blank" rel="noopener noreferrer">
                      {node.title}
                    </a>
                    <span
                      css={css`
                        color: ${colors.grey500};
                        margin-right: 10px;
                      `}
                    >
                      {` by ${node.acf.author}`}
                    </span>
                    <div
                      css={css`
                      display: inline-block;
                      position: relative;
                      top: -3px;
                    `}
                    >
                      <TagList tags={node.tags.map(tag => tag.name)} style={`solid`} size={`small`} />
                    </div>
                    <div
                      css={css`
                        .more-link-wrapper {
                          display: none;
                        }
                        p {
                          color: ${colors.grey500};
                          font-style: italic;
                          font-size: 14px;
                        }
                      `}
                      dangerouslySetInnerHTML={{ __html: node.excerpt }}
                    />
                  </div>
                  
                </li>
                  ))}
              </ul>

            </div>
        </div>
      </Layout>
    )
  }
}

BookIndex.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default BookIndex

export const pageQuery = graphql`
  query {
    allWordpressWpBooks {
      edges {
        node {
          title
          acf {
            author
            favorite
            link
            read_status
          }
          tags {
            name
          }
          status
          excerpt
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
