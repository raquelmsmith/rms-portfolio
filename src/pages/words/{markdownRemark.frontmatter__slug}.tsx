import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { MultipleColorfulWords } from "../../components/MultipleColorfulWords"
import { Footer } from "../../components/footer"

export default function WordsPostTemplate({
    data, // this prop will be injected by the GraphQL query below.
}: {
    data: any
}) {
    const { markdownRemark } = data // data.markdownRemark holds your post data
    const { frontmatter, html } = markdownRemark
    return (
        <Layout>
            <SEO title={frontmatter.title + " - Raquel M Smith"} />
            <div className="w-full h-full flex items-center justify-center grow">
                <div className="flex flex-col items-center justify-center">
                    <h1>
                        <MultipleColorfulWords
                            words={frontmatter.title}
                            size={8}
                        />
                    </h1>
                    <main
                        className="my-12 max-w-xl text-center"
                        dangerouslySetInnerHTML={{ __html: html }}
                    />
                </div>
            </div>
            <Footer />
        </Layout>
    )
}

export const pageQuery = graphql`
    query ($id: String!) {
        markdownRemark(id: { eq: $id }) {
            html
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                slug
                title
            }
        }
    }
`
