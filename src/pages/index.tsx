import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { MultipleColorfulWords } from "../components/MultipleColorfulWords"
import { Footer } from "../components/footer"

const IndexPage = () => (
    <Layout>
        <SEO title="Raquel M Smith - Software Engineer, Product Manager" />
        <div className="w-full h-full flex items-center justify-center grow">
            <h1>
                <div className="mb-1">
                    <MultipleColorfulWords
                        words="Raquel"
                        size={16}
                        className="!justify-start"
                    />
                </div>
                <div className="pl-32">
                    <MultipleColorfulWords words="M Smith" size={16} />
                </div>
            </h1>
        </div>
        <Footer showLogo={false} />
    </Layout>
)

export default IndexPage
