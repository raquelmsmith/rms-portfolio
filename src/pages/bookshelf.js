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
                  margin-left: 0;
                  li {
                    padding-left: 1rem;
                    padding-right: 1rem;
                  }
                `}
            >
              <li
                css={css`
                  display: grid;
                  grid-template-columns: repeat(8, minmax(0, 1fr));
                  gap: 1rem;
                  border-bottom: 4px solid ${colors.grey200};
                  padding-bottom: 0.5rem;
                  margin-bottom: 2rem;
                  color: ${colors.grey500};
                `}
              >
                <div
                  css={css`
                    grid-column: span 6 / span 6;
                  `}
                >
                  {data.allWordpressWpBooks.edges.length} books
                </div>
                <div
                  css={css`
                    justify-self: center;
                    display: flex;
                    align-items: center;
                    position: relative;
                    font-size: 0.8rem;
                  `}
                >
                  <Icon
                    name="check"
                    width="1.2rem"
                    height="1.2rem"
                    fill={colors.teal}
                  />
                  <span
                    css={css`
                      margin-left: 0.5rem;
                      margin-top: 2px;
                      color: ${colors.teal};
                      position: absolute;
                      left: 1.2rem;
                      top: 2px;
                    `}
                  >
                    ({data.allWordpressWpBooks.edges.filter(edge => edge.node.acf.read_status === "Read").length})
                  </span>
                </div>
                <div
                  css={css`
                    justify-self: center;
                    display: flex;
                    align-items: center;
                    position: relative;
                    font-size: 0.8rem;
                  `}
                >
                  <Icon
                    name="star"
                    width="1.5rem"
                    height="1.2rem"
                    fill={colors.salmon200}
                  />
                  <span
                    css={css`
                      margin-left: 0.5rem;
                      margin-top: 2px;
                      color: ${colors.salmon200};
                      position: absolute;
                      left: 1.3rem;
                      top: 2px;
                    `}
                  >
                    ({data.allWordpressWpBooks.edges.filter(edge => !!edge.node.acf.favorite[0] === true).length})
                  </span>
                </div>
              </li>
              {data.allWordpressWpBooks.edges.map(({ node }) => (
                <li
                  css={css`
                    margin-bottom: 3rem;
                    list-style-type: none;
                    display: grid;
                    grid-template-columns: repeat(8, minmax(0, 1fr));
                    gap: 1rem;
                  `}
                >
                  <div
                    css={css`
                    grid-column: span 6 / span 6;
                    `}
                    >
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
                        margin-bottom: 0.5rem;
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
                    <TagList tags={node.tags.map(tag => tag.name)} style={`solid`} size={`small`} />
                  </div>
                  <div
                    css={css`
                        justify-self: center;
                    `}
                  >
                  {node.acf.read_status === "Read" ? 
                    <Icon
                      name="check"
                      width="1.2rem"
                      height="1.2rem"
                      fill={colors.teal}
                      css={css`
                      margin: 0 auto -5px;
                      svg {
                      margin: 0 auto -4px;
                      }
                    `}
                    />
                    : ``}
                  </div>
                  <div
                    css={css`
                      justify-self: center;
                  `}
                  >
                    {node.acf.favorite[0] ? 
                      <Icon
                        name="star"
                        width="1.5rem"
                        height="1.2rem"
                        fill={colors.salmon200}
                        css={css`
                          margin-bottom: -5px;
                          svg {
                            margin-bottom: -4px;
                          }
                        `}
                      />
                    : ``}
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
