import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Hero from "../components/index/hero"
import Stats from "../components/index/stats"
import News from "../components/index/news"

const IndexPage = () => (
  <Layout>
    <SEO title="Почетна" />
    <Hero />
    <Stats />
    <News />
  </Layout>
)

export default IndexPage
