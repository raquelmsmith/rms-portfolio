import React, { Component } from "react"
import { css } from "@emotion/core"

import {
  // boxShadow,
  colors,
  // orderedListStyles,
  // unorderedListStyles,
  // underline,
} from "../components/global-styles"

class SingleComment extends Component {
  render(props) {
    const comment = this.props.comment.node
    const children = this.props.children
    const getAuthorNameLink = (name, url) => {
      if (url) {
        return <a href={url}>{name}</a>
      }
      return name
    }
    return (
      <li
        key={comment.id}
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
            {getAuthorNameLink(comment.author_name, comment.author_url)}
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
              color: ${colors.grey500};
            `}
            dangerouslySetInnerHTML={{ __html: comment.content }}
          />
        </div>
        {children}
      </li>
    )
  }
}

export default SingleComment
