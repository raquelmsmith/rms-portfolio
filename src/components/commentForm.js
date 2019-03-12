import React, { Component } from "react"
import { css } from "@emotion/core"

import {
  fonts,
  colors,
  buttonPrimary,
  formField,
} from "../components/global-styles"

class CommentForm extends Component {
  render(props) {
    return (
      <div
        css={css`
          background: ${colors.white};
          border-top: 5px solid ${colors.salmon};
          padding: 2rem;
          margin-top: 2rem;
          color: ${colors.grey500};
        `}
      >
        <div
          css={css`
            font-size: 2.4rem;
            font-weight: bold;
            color: ${colors.salmon};
            font-family: ${fonts.quicksand};
            margin-bottom: 1.5rem;
          `}
        >
          Leave a Reply
        </div>
        <p>
          Your email address will not be published. Required fields are marked *
        </p>
        <form
          method="post"
          action="#"
          css={css`
            label {
              display: block;
            }
          `}
        >
          <div>
            <label htmlFor="comment">Comment*</label>
            <textarea
              css={css`
                width: 100%;
                ${formField}
              `}
              id="comment"
              name="comment"
              cols="45"
              rows="8"
              maxlength="65525"
              required="required"
            />
          </div>
          <div>
            <label htmlFor="author">Name*</label>
            <input
              css={css`
                ${formField}
              `}
              id="author"
              name="author"
              type="text"
              size="30"
              maxlength="245"
              required="required"
            />
          </div>
          <div>
            <label htmlFor="email">Email*</label>
            <input
              css={css`
                ${formField}
              `}
              id="email"
              name="email"
              type="email"
              size="30"
              maxlength="100"
              aria-describedby="email-notes"
              required="required"
            />
          </div>
          <div>
            <label htmlFor="url">Website</label>
            <input
              css={css`
                ${formField}
              `}
              id="url"
              name="url"
              type="url"
              size="30"
              maxlength="200"
            />
          </div>
          <div>
            <input
              css={css`
                ${buttonPrimary}
                background-color: ${colors.teal};
                margin-top: 1rem;
              `}
              name="submit"
              type="submit"
              id="submit"
              class="submit"
              value="Post Comment"
            />
            <input
              type="hidden"
              name="comment_post_ID"
              value={this.props.postId}
              id="comment_post_ID"
            />
            <input
              type="hidden"
              name="comment_parent"
              id="comment_parent"
              value="0"
            />
          </div>
        </form>
      </div>
    )
  }
}

export default CommentForm
