import React, { Component } from "react"
import { css } from "@emotion/core"

import {
  // boxShadow,
  colors,
  // orderedListStyles,
  // unorderedListStyles,
  // underline,
} from "../components/global-styles"

class CommentWrapper extends Component {
  render(props) {
    return (
      <ol
        css={css`
          list-style: none;
        `}
      >
        {this.props.children}
      </ol>
    )
  }
}

export default CommentWrapper
