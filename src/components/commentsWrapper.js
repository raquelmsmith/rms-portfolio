import React, { Component } from "react"
import { css } from "@emotion/react"

class CommentWrapper extends Component {
  render(props) {
    return (
      <ol
        css={css`
          list-style: none;
          margin-left: 2rem;
        `}
      >
        {this.props.children}
      </ol>
    )
  }
}

export default CommentWrapper
