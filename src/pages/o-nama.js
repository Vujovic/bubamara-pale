import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/about/hero"
import Activities from "../components/about/activities"

const AboutUs = () => (
  <Layout>
    <SEO title="О нама" />
    <Hero />
    <Activities />
  </Layout>
)

export default AboutUs
