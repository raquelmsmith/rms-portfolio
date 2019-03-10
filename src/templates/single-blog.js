import { React, Component } from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import { css } from "@emotion/core"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogComments from "../components/comments"

import {
  boxShadow,
  colors,
  orderedListStyles,
  unorderedListStyles,
  underline,
} from "../components/global-styles"

class SingleBlog extends Component {
  render() {
    const post = this.props.data.wordpressPost
    const comments = this.props.data.allWordpressWpComments
    return (
      <Layout>
        <SEO
          title={post.yoast_meta.yoast_wpseo_title}
          description={post.yoast_meta.yoast_wpseo_metadesc}
        />
        <div
          css={css`
            max-width: 900px;
            padding: 3rem;
            margin: auto;
          `}
        >
          <h1
            dangerouslySetInnerHTML={{ __html: post.title }}
            css={css`
              font-size: 4rem;
            `}
          />
          <div
            css={css`
              background: ${colors.white};
              padding: 3rem;
              font-size: 1.1rem;
              line-height: 1.6;
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
              ${unorderedListStyles}
              blockquote {
                background: ${colors.grey200};
                padding: 1.5rem;
                border-radius: 4px;
                border-left: 4px solid ${colors.teal};
                font-style: italic;
                margin: 2rem;
              }
            `}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
        <BlogComments comments={comments} post={post} />
      </Layout>
    )
  }
}

SingleBlog.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default SingleBlog

export const pageQuery = graphql`
  query($id: String!, $postId: Int!) {
    wordpressPost(id: { eq: $id }) {
      title
      content
      date
      yoast_meta {
        yoast_wpseo_title
        yoast_wpseo_metadesc
      }
    }
    allWordpressWpComments(filter: { post: { eq: $postId } }) {
      edges {
        node {
          id
          wordpress_id
          post
          author
          author_name
          author_url
          date(formatString: "MMMM DD, YYYY")
          content
          wordpress_parent
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
