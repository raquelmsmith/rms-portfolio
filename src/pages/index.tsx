import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Footer } from "../components/footer"
import { ColorfulH1 } from "../components/ColorfulH1"

const IndexPage = () => (
    <Layout>
        <SEO title="Raquel M Smith - Software Engineer, Product Manager" />
        <div className="w-full flex items-center justify-center grow">
            <h1>
                <div className="mb-1">
                    <ColorfulH1 text="Raquel" className="!justify-start" />
                </div>
                <div className=" pl-16 xs:pl-32">
                    <ColorfulH1 text="M Smith" />
                </div>
            </h1>
        </div>
        <Footer showLogo={false} />
    </Layout>
)

export default IndexPage
