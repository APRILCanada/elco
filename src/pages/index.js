import * as React from 'react';
import About from '../components/About';
import Hero from '../components/Hero';
import Solutions from '../components/Solutions';
import Team from '../components/Team';
import Contact from '../components/Contact';
import Layout from "../components/Layout"
import { graphql } from 'gatsby';
import Seo from '../components/Seo';
import { useTranslation } from 'react-i18next';

const IndexPage = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <Seo title={t('Welcome')} />
      <Hero />
      <About />
      <Solutions />
      <Team />
      <Contact />
    </Layout>
  );
};

export default IndexPage;

// query the translation
export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
