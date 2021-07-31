import { graphql } from "gatsby";
import React from "react";
import { mdxNodeType } from "types/post";
import Layout from "../components/layout/Layout";

const IndexPage = ({ data: { allMdx } }: any) => {
  return (
    <Layout>
      Hello
      <ul>
        {allMdx.nodes.map(({ frontmatter }: mdxNodeType) => (
          <li>{frontmatter.title}</li>
        ))}
      </ul>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          date(fromNow: false)
          slug
          title
        }
        id
      }
    }
  }
`;

export default IndexPage;
