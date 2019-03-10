import { React, Component } from "react"
// import { graphql } from "gatsby"
// import PropTypes from "prop-types"
import { css } from "@emotion/core"
import SingleComment from "../components/singleComment"
import CommentsWrapper from "../components/commentsWrapper"

import // boxShadow,
// colors,
// orderedListStyles,
// unorderedListStyles,
// underline,
"../components/global-styles"

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
    const allComments = this.props.comments
    const post = this.props.post
    const sortedComments = sortComments(allComments)

    return (
      <div
        css={css`
          max-width: 600px;
          margin: auto;
        `}
      >
        <h2>
          {allComments.length} Comments on "{post.title}"
        </h2>

        {console.log(sortedComments)}
        <CommentsWrapper>
          {sortedComments.map(comment => {
            if (!Array.isArray(comment)) {
              return <SingleComment comment={comment} />
            }
          })}
        </CommentsWrapper>
      </div>
    )
  }
}

export default BlogComments
