import React, { Component } from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"
import { colors } from "../components/global-styles"
import Icon from "./icon"

class FooterLink extends Component {
  render() {
    return (
      <li
        css={css`
          align-items: center;
          padding: 0.5rem;
          margin-bottom: 0;
          font-size: 0.75rem;
          @media (min-width: 650px) {
            padding: 0.5rem 1.5rem;
            font-size: 1rem;
          }
          svg {
            display: block;
            margin: 0 auto 0.4rem;
            @media (min-width: 650px) {
              margin: 0 0.5rem -0.25rem 0;
              display: inline-block;
            }
          }
          ${this.props.mobileOnly
            ? `
              @media (min-width: 650px) {
                display: none;
              }
            `
            : `
              @media (min-width: 650px) {
                  display: flex;
                }
            `}
          ${this.props.desktopOnly
            ? `
              @media (max-width: 650px) {
                display: none;
              }
            `
            : ``}
        `}
      >
        {this.props.isInternal ? (
          <Link to={this.props.target}>
            <Icon
              name={this.props.icon}
              width="1.2rem"
              height="1.2rem"
              viewBox={this.props.iconViewBox}
              fill={colors.grey300}
            />
            {this.props.anchor}
          </Link>
        ) : (
          <a href={this.props.target}>
            <Icon
              name={this.props.icon}
              width="1.2rem"
              height="1.2rem"
              viewBox={this.props.iconViewBox}
              fill={colors.grey300}
            />
            <span
              css={css`
                ${this.props.secondaryAnchor
                  ? `
                    @media (min-width: 650px) {
                      display: none;
                    }
                   `
                  : ``}
              `}
            >
              {this.props.anchor}
            </span>
            {this.props.secondaryAnchor ? (
              <span
                css={css`
                  display: none;
                  @media (min-width: 650px) {
                    display: inline-block;
                  }
                `}
              >
                {this.props.secondaryAnchor}
              </span>
            ) : (
              ``
            )}
          </a>
        )}
      </li>
    )
  }
}

FooterLink.defaultProps = {
  iconViewBox: "0 0 512 512",
  isInternal: false,
  mobileOnly: false,
}

export default FooterLink
