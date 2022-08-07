import { React, Component } from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import { css } from "@emotion/react"
import parse from "html-react-parser"

import Layout from "../components/layout"
import Article from "../components/article"
import SEO from "../components/seo"
import BlogComments from "../components/comments"

class SingleBlog extends Component {

  componentDidMount(){
    const script=document.createElement('script')
    script.src="https://raquelmsmith.ck.page/b5b28b1396/index.js"
    script.async=true
    script.setAttribute('data-uid', 'b5b28b1396');
    this.instance.appendChild(script)
  }

  render() {
    console.log("THE POST",this.props)
    const post = this.props.data.wpPost
    const comments = post.comments
    return (
      <Layout>
        <SEO
          title={post.seo.title}
          description={post.seo.metaDesc}
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
            dangerouslySetInnerHTML={{ __html: post.title }}
            css={css`
              font-size: 2.5rem;
              text-align: center;
              margin-bottom: 3rem;
              @media (min-width: 650px) {
                font-size: 4rem;
              }
            `}
          />
          <div ref={el => (this.instance = el)} className="convertkit"></div>
          <Article>{parse(post.content)}</Article>
        </div>
        {/* <BlogComments comments={comments} post={post} /> */}
      </Layout>
    )
  }
}

SingleBlog.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default SingleBlog

export const pageQuery = graphql`
  query($id: String!) {
    wpPost(id: { eq: $id }) {
      databaseId
      title
      content
      date
      seo {
        title
        metaDesc
      }
      comments {
          nodes {
            author {
              node {
                url
                name
              }
            }
            content
            parentDatabaseId
            parentId
            date
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
