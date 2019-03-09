import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SingleProject = () => (
  <Layout>
    <SEO title="Page two" />
    <p>This is a single project!</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SingleProject
