import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { MyMap } from "../components/map"
import Form from "../components/contact/form"

const Contact = () => (
  <Layout>
    <SEO title="Контакт" />
    <Form />
    <MyMap />
  </Layout>
)

export default Contact
