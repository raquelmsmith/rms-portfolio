// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { MultipleColorfulWords } from "../components/MultipleColorfulWords"
import { Footer } from "../components/footer"
import { Link } from "../components/link"

const WordsPage = ({
    data: {
        allMarkdownRemark: { edges },
    },
}) => {
    const getDomain = (url: string) => {
        const urlObj = new URL(url)
        return urlObj.hostname.replace("www.", "")
    }
    const posts = edges
    return (
        <Layout>
            <SEO title="Raquel M Smith - Contact" />
            <div className="w-full h-full flex items-center justify-center grow">
                <div className="flex flex-col items-center justify-center">
                    <h1>
                        <MultipleColorfulWords words="Words" size={16} />
                    </h1>
                    <main className="mt-12 max-w-2xl text-center">
                        <p>
                            I don't write all that frequently, but when I do
                            I'll try to link them here.
                        </p>
                        <div className="mt-8">
                            {posts.map(({ node }) => {
                                const title =
                                    node.frontmatter.title || node.fields.slug
                                return (
                                    <div className="grid grid-cols-4 gap-x-4 mb-6">
                                        <span className="text-right font-bold font-mono text-sm mt-1">
                                            {node.frontmatter.date}
                                        </span>
                                        <div className="text-left col-span-3">
                                            <Link
                                                to={
                                                    node.frontmatter
                                                        .externalLink
                                                        ? node.frontmatter
                                                              .externalLink
                                                        : `/words${node.frontmatter.slug}`
                                                }
                                                className="text-left"
                                                target={
                                                    node.frontmatter
                                                        .externalLink
                                                        ? "_blank"
                                                        : ""
                                                }
                                            >
                                                {title}
                                            </Link>
                                            {node.frontmatter.externalLink && (
                                                <div className="text-xs italic">
                                                    {getDomain(
                                                        node.frontmatter
                                                            .externalLink
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </main>
                </div>
            </div>
            <Footer />
        </Layout>
    )
}

export const pageQuery = graphql`
    query {
        allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
            edges {
                node {
                    id
                    excerpt(pruneLength: 250)
                    frontmatter {
                        date(formatString: "YYYY-MM-DD")
                        slug
                        title
                        externalLink
                    }
                }
            }
        }
    }
`

export default WordsPage
