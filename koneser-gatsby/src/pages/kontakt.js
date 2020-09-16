import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import IntroImage from "../components/IntroImage";
import Contact from "../components/Contact";
import ContactImg from '../assets/images/kontakt.jpg'


const ContactPage = () => (
  <Layout>
    <SEO title="Kontakt" />
    <IntroImage image={ContactImg} title={'Kontakt'} subTitle={`Masz jakieś pytania? 
Skontaktuj się z nami!`}/>
    <Contact />
  </Layout>
)

export default ContactPage;
