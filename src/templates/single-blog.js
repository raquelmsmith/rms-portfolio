import { React, Component } from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import { css } from "@emotion/core"
import parse from "html-react-parser"

import Layout from "../components/layout"
import Article from "../components/article"
import SEO from "../components/seo"
import BlogComments from "../components/comments"

class SingleBlog extends Component {

  componentDidMount(){
    const script=document.createElement('script')
    script.src="https://raquelmsmith.ck.page/d305a83a76/index.js"
    script.async=true
    script.setAttribute('data-uid', 'd305a83a76');
    this.instance.appendChild(script)
  }

  render() {
    const post = this.props.data.wordpressPost
    const comments = this.props.data.allWordpressWpComments
    return (
      <Layout>
        <SEO
          title={post.yoast_meta.yoast_wpseo_title}
          description={post.yoast_meta.yoast_wpseo_metadesc}
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
        <BlogComments comments={comments} post={post} />
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
  query($id: String!, $postId: Int!) {
    wordpressPost(id: { eq: $id }) {
      wordpress_id
      title
      content
      date
      yoast_meta {
        yoast_wpseo_title
        yoast_wpseo_metadesc
      }
    }
    allWordpressWpComments(filter: { post: { eq: $postId } }) {
      edges {
        node {
          id
          wordpress_id
          post
          author
          author_name
          author_url
          date(formatString: "MMMM DD, YYYY")
          content
          wordpress_parent
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
