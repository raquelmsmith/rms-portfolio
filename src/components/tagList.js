import React, { Component } from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"
import { colors } from "../components/global-styles"

class TagList extends Component {
  render() {
    return (
      <ul
        css={css`
          list-style-type: none;
          display: flex;
          flex-wrap: wrap;
          margin-left: 0;
          margin-bottom: 0;
          max-width: 700px;
          & a {
            color: unset;
            background: none;
            text-decoration: none;
          }
          & li {
            background-color: ${colors.white};
            margin-right: 0.75rem;
            padding: 2px 0.45rem;
            border-radius: 4px;
            border: 1px solid ${colors.grey200};
            border-bottom: 2px solid ${colors.teal};
            &:before {
              content: "#";
              margin-right: 2px;
              font-weight: bold;
              color: ${colors.teal};
            }
            &:hover {
              border-bottom: 2px solid ${colors.salmon};
              &:before {
                color: ${colors.salmon};
              }
            }
          }
        `}
      >
        {this.props.tags.map(tag => (
          <Link to={`tag/${tag}`}>
            <li>{tag}</li>
          </Link>
        ))}
      </ul>
    )
  }
}

export default TagList
