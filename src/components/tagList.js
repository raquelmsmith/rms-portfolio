import React, { Component } from "react"
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
            margin-bottom: 0;
            &:before {
              content: "#";
              margin-right: 2px;
              font-weight: bold;
              color: ${colors.teal};
            }
          }
        `}
      >
        {this.props.tags.map(tag => (
          <li>{tag}</li>
        ))}
      </ul>
    )
  }
}

export default TagList
