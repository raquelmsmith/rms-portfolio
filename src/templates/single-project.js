import { React, Component } from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import { css } from "@emotion/core"
import parse from "html-react-parser"

import Layout from "../components/layout"
import Article from "../components/article"
import SEO from "../components/seo"

class SingleProject extends Component {
  render() {
    const project = this.props.data.wordpressWpProjects
    return (
      <Layout>
        <SEO
          title={project.yoast_meta.yoast_wpseo_title}
          description={project.yoast_meta.yoast_wpseo_metadesc}
        />
        <div
          css={css`
            max-width: 900px;
            padding: 3rem;
            margin: auto;
          `}
        >
          <h1
            dangerouslySetInnerHTML={{ __html: project.title }}
            css={css`
              font-size: 4rem;
            `}
          />
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
      yoast_meta {
        yoast_wpseo_title
        yoast_wpseo_metadesc
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`
