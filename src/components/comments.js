import { React, Component } from "react"
// import { graphql } from "gatsby"
// import PropTypes from "prop-types"
import { css } from "@emotion/core"
import SingleComment from "../components/singleComment"
import CommentsWrapper from "../components/commentsWrapper"

import {
  // boxShadow,
  colors,
  // orderedListStyles,
  // unorderedListStyles,
  // underline,
} from "../components/global-styles"

class BlogComments extends Component {
  render(props) {
    const sortComments = allComments => {
      let sortedComments = allComments.filter(
        comment => comment.node.wordpress_parent === 0
      )
      sortedComments = sortedComments.map(comment => {
        return getChildComments(comment, allComments)
      })
      return sortedComments
    }
    const getChildComments = (comment, allComments) => {
      const parentId = comment.node.wordpress_id
      let children = allComments.filter(
        comment => comment.node.wordpress_parent === parentId
      )
      if (children.length !== 0) {
        let allchildren = children.map(child =>
          getChildComments(child, allComments)
        )
        return [comment, allchildren]
      }
      return comment
    }
    const renderComments = comment => {
      if (!Array.isArray(comment)) {
        return <SingleComment comment={comment} />
      } else {
        return (
          <SingleComment comment={comment[0]}>
            <CommentsWrapper>
              {comment[1].map(comment => renderComments(comment))}
            </CommentsWrapper>
          </SingleComment>
        )
      }
    }

    const allComments = this.props.comments
    const post = this.props.post

    return (
      <div
        css={css`
          max-width: 600px;
          margin: auto;
          > ol {
            margin-left: 0;
            > li {
              padding-bottom: 4rem;
              border-bottom: 1px solid ${colors.grey300};
              &:last-child {
                border-bottom: none;
              }
            }
          }
        `}
      >
        {allComments ? (
          <div>
            <h2>
              {allComments.edges.length} Comments on "{post.title}"
            </h2>
            <CommentsWrapper>
              {sortComments(allComments.edges).map(comment => {
                return renderComments(comment)
              })}
            </CommentsWrapper>
          </div>
        ) : (
          <p />
        )}
      </div>
    )
  }
}

export default BlogComments
