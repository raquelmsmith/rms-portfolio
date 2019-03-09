import { React, Component } from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import { css } from "@emotion/core"

import {
  boxShadow,
  colors,
  orderedListStyles,
  unorderedListStyles,
  underline,
} from "../components/global-styles"

class BlogComments extends Component {
  render(props) {
    const comments = this.props.comments
    const post = this.props.post
    const getAuthorNameLink = (name, url) => {
      if (url) {
        return <a href={url}>{name}</a>
      }
      return name
    }
    const sortComments = allComments => {
      let sortedComments = allComments.filter(
        comment => comment.node.wordpress_parent === 0
      )
      sortedComments = sortedComments.map(comment => {
        let parentId = comment.node.wordpress_id
        let children = getChildComments(allComments, parentId, comment)
        if (children.length !== 0) {
          return [comment, children]
        }
        return comment
      })
      console.log(sortedComments)
    }
    const getChildComments = (allComments, parentId, comment) => {
      let children = allComments.filter(
        comment => comment.node.wordpress_parent === parentId
      )
      if (children.length !== 0) {
        children = children.map(comment => {
          return [
            comment,
            getChildComments(allComments, comment.node.wordpress_id),
          ]
        })
      }
      return children
    }
    return (
      <div
        css={css`
          max-width: 600px;
          margin: auto;
        `}
      >
        {sortComments(comments)}
        <h2>
          {comments.length} Comments on "{post.title}"
        </h2>
        <ol
          css={css`
            list-style: none;
          `}
        >
          {comments.map(edge => {
            let comment = edge.node
            if (comment.wordpress_parent === 0) {
              return (
                <li
                  css={css`
                    margin-top: 3rem;
                  `}
                >
                  <div>
                    <h3
                      css={css`
                        font-size: 1.5rem;
                        margin-bottom: 0.2rem;
                        a {
                          color: ${colors.salmon};
                          text-decoration: none;
                        }
                      `}
                    >
                      {getAuthorNameLink(
                        comment.author_name,
                        comment.author_url
                      )}
                    </h3>
                    <p
                      css={css`
                        font-size: 0.8rem;
                        font-style: italic;
                      `}
                    >
                      {comment.date}
                    </p>
                    <div
                      css={css`
                        background-color: ${colors.white};
                        margin-left: 2rem;
                        padding: 2rem;
                        line-height: 1.8;
                        color: ${colors.mediumGrey};
                      `}
                      dangerouslySetInnerHTML={{ __html: comment.content }}
                    />
                  </div>
                </li>
              )
            }
          })}
        </ol>
      </div>
    )
  }
}

export default BlogComments
