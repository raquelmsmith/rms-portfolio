// Gatsby supports TypeScript natively!
import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Footer } from "../components/footer"
import { Link } from "../components/link"
import { ColorfulH1 } from "../components/ColorfulH1"

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
            <div className="w-full flex items-center justify-center grow">
                <div className="flex flex-col items-center justify-center">
                    <h1>
                        <ColorfulH1 text="Words" />
                    </h1>
                    <main className="mt-12 max-w-2xl text-center">
                        <p>
                            I don't write that often, but when I do{" "}
                            <span className="line-through opacity-50">
                                I drink Dos Equis
                            </span>{" "}
                            I'll link them here.
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
                                                decoration={false}
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
