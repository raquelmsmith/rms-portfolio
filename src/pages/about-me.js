import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import { css } from "@emotion/react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Article from "../components/article"
import { colors, boxShadow } from "../components/global-styles"

const AboutMe = props => {
  const startedCodingTimestamp = new Date("January 1, 2014").getUTCFullYear()
  const startedPMTimestamp = new Date("January 1, 2016").getUTCFullYear()
  const now = new Date(Date.now()).getUTCFullYear()
  const yearsSinceCoding = now - startedCodingTimestamp
  const yearsSincePM = now - startedPMTimestamp

  console.log(yearsSinceCoding)


  return (
    <Layout>
      <SEO
        title="About"
        description="Raquel M Smith is an effective product manager and front-end developer with a passion for the mobile web."
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
        <Article>
          <Img
            css={css`
              max-width: 200px;
              border-radius: 100%;
              width: 200px;
              margin: 0 auto 2rem;
              ${boxShadow}
              @media (min-width: 650px) {
                margin-left: 2rem;
                margin-top: 2rem;
                float: right;
              }
            `}
            data-pin-nopin="true"
            alt="Headshot of Raquel M Smith"
            fluid={props.data.headshot.childImageSharp.fluid}
          />
          <h1>Hi there!</h1>

          <p>I'm Raquel. Nice to meet you :)</p>

          <p>
            I'm a product manager and software engineer based in sunny San Luis Obispo, CA. 
            I like to call myself a "product engineer" - someone who is not only highly capable with code, 
            but who also deeply cares about the customer, their problems, and their experiences. I've spent 
            the last {yearsSinceCoding} years writing code and {yearsSincePM} years in product management, 
            often doing both at the same time.
          </p>

          <h2>Technology</h2>

          <p>
            I'm primarily a front-end engineer, though I can work the whole stack. 
            I'm fluent in Javascript, PHP, and CSS, and I've used a number of
            different frameworks to build websites including ReactJS, ReactNative, and GatsbyJS. 
          </p>

          <p>
            Picking up new frameworks and technologies comes easy to me. After
            all, it's not about what you know; it's what you can figure out. I
            pride myself in being able to figure out just about anything.
          </p>

          <h2>Work</h2>

          <p>
            I'm currently Co-Founder of <a href="https://brunch.so">Brunch</a>, a publishing and monetization platform for food influencers.
            I built the platform from the ground up using React Native, Hasura, Docker, and Node. 
            We have thousands of users and we've helped many people monetize their content.
          </p>

          <p>
            Previously, I worked as a product manager at Dozuki. As the first PM at the company, 
            I spent much of my time setting up product processes, prioritizing engineering time, and 
            orienting the company towards common goals.
            I also worked for the Food Blogger Pro family of brands, which 
            includes Pinch of Yum, Food Blogger Pro, and WP Tasty, as a product 
            manager and front-end engineer.
          </p>

          <p>
            I've worked remotely since 2015, mostly from my home office. I love the freedom and
            independence of remote work, but I also thrive on interaction with my
            team.
          </p>

          <p>
            I also build side projects in my spare time. You can see more about
            these on my <Link to={`/projects`}>Projects page</Link>.
          </p>

          <p>
            Finally, I love helping other people learn to build stuff for the web.
            I previously volunteered time with bloggers to help them learn how to get their
            websites out into the world and seen by millions - and that's not an
            exaggeration. I also volunteer with a local coding education
            organization, <a href="https://www.meetup.com/codeslo/">CodeSLO</a>,
            to help others in my community learn how to code. My time spent
            helping others is always a highlight in my day.
          </p>

          <h2>My Story</h2>

          <p>
            In 2009 I moved to San Luis Obispo to attend college at Cal Poly. I
            graduated with dual degrees in Molecular Biology and Microbiology, but
            I also started building my first websites in my spare time. A lifelong
            cook, I loved the idea of starting a food blog to share my kitchen
            creations. I started with a simple WordPress site and published to my
            heart's content.
          </p>

          <p>
            I eventually wanted to change a few things about my website, so I
            searched around until I found the stylesheet and made some minor edits
            there. It was thrilling! Soon I was spending more time fiddling with
            my website than I was publishing, and I knew that working in the web was my calling.
          </p>

          <p>
            After working as a microbiologist for a bit, I knew I needed to switch
            careers and do something more in line with my passions. I had been
            volunteering time on the Food Blogger Pro forums helping other
            bloggers with their website woes, and when the folks at Food Blogger
            Pro offered me a job, I jumped at the opportunity. I quickly moved from 
            forum moderator to web admin to front-end engineer to product manager. 
            While my time with the Food Blogger Pro team has come to an end, I am so 
            grateful for the opportunity Bjork and Lindsay gave me to explore and 
            develop my passions for product management and software engineering.
          </p>

          <h2>Life</h2>

          <div
            css={css`
              display: flex;
              flex-wrap: wrap;
              justify-content: space-between;
              margin-bottom: 2rem;
              @media (min-width: 800px) {
                display: block;
                float: right;
                margin-top: -6rem;
                margin-left: 2rem;
              }
            `}
          >
            <Img
              css={css`
                max-width: 200px;
                border-radius: 100%;
                width: 150px;
                ${boxShadow}
                @media (min-width: 800px) {
                  width: 200px;
                  margin-left: 6rem;
                  margin-top: 2rem;
                }
              `}
              data-pin-nopin="true"
              alt="Kacey"
              fluid={props.data.kacey.childImageSharp.fluid}
            />

            <Img
              css={css`
                max-width: 200px;
                border-radius: 100%;
                width: 150px;
                @media (min-width: 800px) {
                  margin-left: 0;
                  margin-top: -4rem;
                  border: 4px solid ${colors.white};
                  z-index: 10;
                  width: 200px;
                }
              `}
              data-pin-nopin="true"
              alt="Dedas, my black lab"
              fluid={props.data.dedas.childImageSharp.fluid}
            />

            <Img
              css={css`
                max-width: 200px;
                border-radius: 100%;
                width: 150px;
                ${boxShadow}
                @media (min-width: 800px) {
                  margin-left: 10rem;
                  margin-top: -7rem;
                  width: 200px;
                }
              `}
              data-pin-nopin="true"
              alt="My husband and me wearing bicycle helmets at Montana De Oro in Los Osos, CA"
              fluid={props.data.bikes.childImageSharp.fluid}
            />
          </div>

          <p>
            I don't do much with social media, so if you want to know more about
            me <em>personally</em>, here goes!
          </p>

          <p>
            I'm the proud mom of two beautiful little girls named Kacey and Norah and dog mom
            to a black lap pup named Dedas.{" "}
          </p>

          <p>
            I'm a trail runner and mountain biker and can never get enough of
            either.
          </p>

          <p>
            I also love to cook and try new recipes. I find myself in the kitchen
            most nights making healthy-ish meals for my family. Feeding family and
            friends delicious food is one of my favorite things to do.
          </p>

          <h2>Get in Touch</h2>

          <p>
            I'd love to hear from you! Feel free to reach out to{" "}
            <a href="mailto:hello@raquelmsmith.com">hello@raquelmsmith.com</a>{" "}
            about projects you have in mind, other opportunities, or just to chat.
            I'm friendly and I love meeting new people!
          </p>
        </Article>
      </div>
    </Layout>
  )
}

export default AboutMe

export const pageQuery = graphql`
  query {
    headshot: file(relativePath: { eq: "raquel-m-smith-headshot.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    kacey: file(relativePath: { eq: "kacey.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    dedas: file(relativePath: { eq: "dedas.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    bikes: file(relativePath: { eq: "bikes.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
