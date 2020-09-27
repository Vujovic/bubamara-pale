import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/about/hero"
import Activities from "../components/about/activities"
import Parents from "../components/about/parents"

const AboutUs = () => (
  <Layout>
    <SEO title="О нама" />
    <Hero />
    <Activities />
    <Parents />
  </Layout>
)

export default AboutUs
