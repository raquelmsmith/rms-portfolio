import React, { Component } from "react"
import { css } from "@emotion/core"
import { Formik, Form, Field } from "formik"
import * as Yup from "yup"

import {
  fonts,
  colors,
  buttonPrimary,
  formField,
} from "../components/global-styles"

class CommentForm extends Component {
  render(props) {
    const CommentSchema = Yup.object().shape({
      author: Yup.string()
        .min(2, "Please provide a valid name")
        .max(245, "The name is too long")
        .required("This field is required"),
      url: Yup.string().url(),
      comment: Yup.string()
        .min(2, "Please include a comment")
        .max(65525, "Your comment exceeds the maximum length")
        .required("This field is required"),
      email: Yup.string()
        .email("Invalid email")
        .required("This field is required"),
    })
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
        <Formik
          initialValues={{
            author: "",
            url: "",
            email: "",
            comment: "",
          }}
          validationSchema={CommentSchema}
          onSubmit={values => {
            // same shape as initial values
            console.log(values)
          }}
        >
          {({ errors, touched }) => (
            <Form
              css={css`
                label {
                  display: block;
                  margin-top: 1rem;
                }
                .error {
                  color: ${colors.salmon};
                  font-size: 0.7rem;
                  margin-top: 2px;
                  font-style: italic;
                }
              `}
            >
              <div>
                <label htmlFor="comment">Comment*</label>
                <Field
                  name="comment"
                  id="comment"
                  component="textarea"
                  rows="8"
                  css={css`
                    width: 100%;
                    ${formField}
                  `}
                />
                {errors.comment && touched.comment ? (
                  <div className="error">{errors.comment}</div>
                ) : null}
              </div>
              <div>
                <label htmlFor="author">Name*</label>
                <Field
                  name="author"
                  id="author"
                  size="30"
                  css={css`
                    ${formField}
                  `}
                />
                {errors.author && touched.author ? (
                  <div className="error">{errors.author}</div>
                ) : null}
              </div>
              <div>
                <label htmlFor="email">Email*</label>
                <Field
                  name="email"
                  id="email"
                  type="email"
                  size="30"
                  css={css`
                    ${formField}
                  `}
                />
                {errors.email && touched.email ? (
                  <div className="error">{errors.email}</div>
                ) : null}
              </div>
              <div>
                <label htmlFor="url">Website</label>
                <Field
                  name="url"
                  id="url"
                  type="url"
                  size="30"
                  css={css`
                    ${formField}
                  `}
                />
                {errors.url && touched.url ? (
                  <div className="error">{errors.url}</div>
                ) : null}
              </div>
              <Field
                type="hidden"
                name="comment_post_ID"
                value={this.props.postId}
                id="comment_post_ID"
              />
              <button
                type="submit"
                css={css`
                ${buttonPrimary}
                background-color: ${colors.teal};
                margin-top: 1rem;
              `}
              >
                Post Comment
              </button>
            </Form>
          )}
        </Formik>
      </div>
    )
  }
}

export default CommentForm
