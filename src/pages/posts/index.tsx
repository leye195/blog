import * as React from "react";
import { css } from "@emotion/react";
import { graphql, Link } from "gatsby";
import Layout from "../../components/layout/Layout";
import PageHead from "../../components/common/PageHead";
import Column from "../../components/common/Column";

const PostsPage = ({ data: { bg } }: any) => {
  return (
    <Layout>
      <PageHead imgURL={bg.publicURL}>
        <Column
          className="heading"
          alignItems="center"
          justifyContents="center"
        >
          <h2>Posts</h2>
        </Column>
      </PageHead>
      <p>My cool posts will go in here</p>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          slug
          title
          tags
        }
        id
      }
    }
    bg: file(relativePath: { eq: "posts-bg.jpg" }) {
      publicURL
    }
  }
`;

export default PostsPage;
