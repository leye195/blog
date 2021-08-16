import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout/Layout";
import PageHead from "../components/common/PageHead";
import Column from "../components/common/Column";

const AboutPage = ({ data: { bg } }: any) => {
  return (
    <Layout>
      <PageHead imgURL={bg.publicURL}>
        <Column
          className="heading"
          alignItems="center"
          justifyContents="center"
        >
          <h2>About</h2>
        </Column>
      </PageHead>
    </Layout>
  );
};

export const query = graphql`
  query {
    bg: file(relativePath: { eq: "about.jpg" }) {
      publicURL
    }
  }
`;

export default AboutPage;
