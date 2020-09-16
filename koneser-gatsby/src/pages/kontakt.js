import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import IntroImage from "../components/IntroImage";
import Contact from "../components/Contact";

const ContactPage = () => (
  <Layout>
    <SEO title="Kontakt" />
    <IntroImage image={'/images/kontakt.jpg'} title={'Kontakt'} subTitle={`Masz jakieś pytania? 
Skontaktuj się z nami!`}/>
    <Contact />
  </Layout>
)

export default ContactPage;
