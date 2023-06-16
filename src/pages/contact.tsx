import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Footer } from "../components/footer"
import { Link } from "../components/link"
import { ColorfulH1 } from "../components/ColorfulH1"

const ContactPage = () => (
    <Layout>
        <SEO title="Raquel M Smith - Contact" />
        <div className="w-full flex items-center justify-center grow">
            <div className="flex flex-col items-center justify-center">
                <h1>
                    <ColorfulH1 text="Contact" />
                </h1>
                <main className="mt-12 max-w-2xl text-center">
                    <p>
                        <Link
                            to="mailto:hello@raquelmsmith.com"
                            target="_blank"
                            decoration={false}
                        >
                            hello@raquelmsmith.com
                        </Link>
                    </p>
                    <p>
                        <Link
                            to="https://www.linkedin.com/in/raquelmsmith/"
                            target="_blank"
                            decoration={false}
                        >
                            linkedin.com/in/raquelmsmith
                        </Link>
                    </p>
                    <p>
                        <Link
                            to="https://github.com/raquelmsmith"
                            target="_blank"
                            decoration={false}
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
