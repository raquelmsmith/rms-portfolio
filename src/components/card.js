import React, { Component } from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"
import { colors, underline } from "../components/global-styles"
import TagList from "./tagList"

class Card extends Component {
  render() {
    return (
      <article
        css={css`
          background: ${colors.white};
          display: flex;
        `}
      >
        <section
          css={css`
            border-right: 1px solid ${colors.grey200};
            min-width: 400px;
          `}
        >
          <Link to={this.props.target}>{this.props.children}</Link>
        </section>
        <section
          css={css`
            padding: 2rem;
            display: flex;
            flex-direction: column;
            justify-items: center;
          `}
        >
          <h2>
            <Link
              to={this.props.target}
              css={css`
                text-decoration: none;
                ${underline(
                  colors.white,
                  colors.salmon,
                  colors.salmon,
                  "94%",
                  "3px"
                )}
                &:hover {
                  ${underline(
                    colors.white,
                    colors.teal,
                    colors.teal,
                    "94%",
                    "3px"
                  )}
                }
              `}
              href="#"
            >
              {this.props.title}
            </Link>
          </h2>
          <p dangerouslySetInnerHTML={{ __html: this.props.description }} />
          <TagList tags={this.props.tags} />
        </section>
      </article>
    )
  }
}

export default Card
