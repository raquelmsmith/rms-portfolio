// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { MultipleColorfulWords } from "../components/MultipleColorfulWords"
import { Footer } from "../components/footer"
import { Link } from "../components/link"

const ContactPage = (props: PageProps) => (
    <Layout>
        <SEO title="Raquel M Smith - Contact" />
        <div className="w-full h-full flex items-center justify-center grow">
            <div className="flex flex-col items-center justify-center">
                <h1>
                    <MultipleColorfulWords words="Contact" size={16} />
                </h1>
                <main className="mt-12 max-w-2xl text-center">
                    <p>
                        <Link
                            to="mailto:hello@raquelmsmith.com"
                            target="_blank"
                        >
                            hello@raquelmmsmith.com
                        </Link>
                    </p>
                    <p>
                        <Link
                            to="https://www.linkedin.com/in/raquelmsmith/"
                            target="_blank"
                        >
                            linkedin.com/in/raquelmsmith
                        </Link>
                    </p>
                    <p>
                        <Link
                            to="https://github.com/raquelmsmith"
                            target="_blank"
                        >
                            github.com/raquelmsmith
                        </Link>
                    </p>
                </main>
            </div>
        </div>
        <Footer />
    </Layout>
)

export default ContactPage
