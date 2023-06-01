import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Footer } from "../components/footer"
import { Link } from "../components/link"
import { ColorfulH1 } from "../components/ColorfulH1"

const AboutPage = () => (
    <Layout>
        <SEO title="Raquel M Smith - About" />
        <div className="w-full flex items-center justify-center grow">
            <div className="flex flex-col items-center justify-center">
                <h1>
                    <ColorfulH1 text="About" />
                </h1>
                <main className="mt-12 max-w-2xl text-center">
                    <p>
                        Hey there. I'm a software engineer, product manager, and
                        former founder living in San Luis Obispo, CA. I taught
                        myself to code when I decided that my degrees in
                        molecular biology and microbiology weren't the right
                        career fit for me. I generally work with typescript and
                        python these days, but I've handled a number of other
                        languages as well. I'm currently working as a full-stack
                        engineer on the{" "}
                        <Link
                            to="https://posthog.com/handbook/small-teams/growth"
                            target="_blank"
                        >
                            Growth team
                        </Link>{" "}
                        at{" "}
                        <Link to="https://posthog.com" target="_blank">
                            Posthog
                        </Link>
                        .
                    </p>
                    <p>
                        In my free time I ride my mountain bike, cook and bake
                        whenever I can, and hang out with my two amazing little
                        girls, Kacey and Norah.
                    </p>
                </main>
            </div>
        </div>
        <Footer />
    </Layout>
)

export default AboutPage
