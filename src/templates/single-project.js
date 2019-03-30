import { React, Component } from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import { css } from "@emotion/core"
import parse from "html-react-parser"
import Img from "gatsby-image"

import Layout from "../components/layout"
import Article from "../components/article"
import SEO from "../components/seo"
import TagList from "../components/tagList"
import { colors } from "../components/global-styles"

class SingleProject extends Component {
  render() {
    const project = this.props.data.wordpressWpProjects
    return (
      <Layout>
        <SEO
          title={project.yoast_meta.yoast_wpseo_title}
          description={project.yoast_meta.yoast_wpseo_metadesc}
          keywords={project.tags.map(tag => tag.name)}
        />
        <div
          css={css`
            max-width: 900px;
            padding: 3rem 0;
            margin: auto;
            @media (min-width: 650px) {
              padding: 3rem;
            }
          `}
        >
          <h1
            dangerouslySetInnerHTML={{ __html: project.title }}
            css={css`
              margin-bottom: 3rem;
              font-size: 2.5rem;
              text-align: center;
              @media (min-width: 650px) {
                font-size: 4rem;
              }
            `}
          />
          <section>
            <Img
              alt={project.featured_media.alt_text}
              fluid={project.featured_media.localFile.childImageSharp.fluid}
              css={css`
                border-bottom: 1px solid ${colors.grey300};
              `}
            />
          </section>
          <section
            css={css`
              background: ${colors.white};
              display: flex;
              justify-content: center;
              padding-top: 3rem;
            `}
          >
            <TagList tags={project.tags.map(tag => tag.name)} />
          </section>
          <Article>{parse(project.content)}</Article>
        </div>
      </Layout>
    )
  }
}

SingleProject.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default SingleProject

export const pageQuery = graphql`
  query($id: String!) {
    wordpressWpProjects(id: { eq: $id }) {
      wordpress_id
      title
      content
      date
      tags {
        id
        name
      }
      yoast_meta {
        yoast_wpseo_title
        yoast_wpseo_metadesc
      }
      featured_media {
        source_url
        alt_text
        localFile {
          childImageSharp {
            fluid(maxWidth: 804) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`
