import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import { css } from "@emotion/core"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Article from "../components/article"
import { colors, boxShadow } from "../components/global-styles"

const AboutMe = props => (
  <Layout>
    <SEO
      title="About"
      description="Raquel M Smith is a front-end developer with a passion for the mobile web."
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
          I'm a front-end developer based in sunny San Luis Obispo, CA. I'm
          passionate about building amazing experiences for the mobile web, from
          blazing performance to progressive web apps to solid mobile user
          experiences.
        </p>

        <p>
          This, of course, translates to the desktop as well, where
          optimizations for mobile improve site performance overall and result
          in a seamless device-to-device experience for users.
        </p>

        <h2>Technology</h2>

        <p>
          I'm fluent in Javascript, PHP, and CSS, and I've used a number of
          different frameworks to build websites. My current favorite is
          ReactJS, particularly paired with GatsbyJS to make incredibly fast,
          static, JS-powered websites.
        </p>

        <p>
          Picking up new frameworks and technologies comes easy to me. After
          all, it's not about what you know; it's what you can figure out. I
          pride myself in being able to figure out just about anything.
        </p>

        <h2>Work</h2>

        <p>
          I'm currently a full-time front-end developer for the Food Blogger Pro
          family of brands. This includes:
        </p>

        <ul>
          <li>
            Pinch of Yum - a food blog that sees over 4 million visitors every
            month
          </li>
          <li>
            WP Tasty - a software company selling products created specifically
            for food bloggers and their unique needs
          </li>
          <li>
            Food Blogger Pro - an education website that helps people learn how
            to start and run a food blog
          </li>
        </ul>

        <p>
          I've worked from home for the past 4 years, sometimes from a coworking
          space, but mostly from my home office. I love the freedom and
          independence of remote work, but I also thrive on interaction with my
          team.
        </p>

        <p>
          I also build side projects in my spare time. You can see more about
          these on my <Link to={`/projects`}>Projects page</Link>.
        </p>

        <p>
          Finally, I love helping other people learn to build stuff for the web.
          I volunteer time with bloggers to help them learn how to get their
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
          my website than I was publishing, and I knew I had found my true
          calling.{" "}
        </p>

        <p>
          After working as a microbiologist for a bit, I knew I needed to switch
          careers and do something more in line with my passions. I had been
          volunteering time on the Food Blogger Pro forums helping other
          bloggers with their website woes, and when the folks at Food Blogger
          Pro offered me a job, I jumped at the opportunity. I've been happily
          employed there ever since, moving from forum moderator to web admin to
          front-end developer in rather quick succession.
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
            alt="Headshot of Raquel M Smith"
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
            alt="Headshot of Raquel M Smith"
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
            alt="Headshot of Raquel M Smith"
            fluid={props.data.bikes.childImageSharp.fluid}
          />
        </div>

        <p>
          I don't do much with social media, so if you want to know more about
          me <em>personally</em>, here goes!
        </p>

        <p>
          I'm the proud mom of a beautiful little girl named Kacey and dog mom
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
