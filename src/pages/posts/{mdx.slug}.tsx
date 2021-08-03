import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { css } from "@emotion/react";
import Layout from "../../components/layout/Layout";
import Container from "../../components/common/Container";
import Column from "../../components/common/Column";
import Utterances from "../../components/comment/Utterances";
import { Colors } from "../../styles/variables";

const containerStyle = css`
  margin: 0 auto;
`;

const contentsWrapper = css`
  margin: 0 auto;
  padding: 2rem 1rem;
  max-width: 40rem;
  width: auto;

  & .post-date {
    margin-bottom: 1rem;
    width: 100%;
    font-size: 0.85rem;
    font-weight: 500;
    text-align: end;
    color: ${Colors.gray};
  }
`;

const BlogPost = ({ data: { mdx } }: any) => {
  return (
    <Layout>
      <Container css={containerStyle}>
        <Column css={contentsWrapper}>
          <Column className="top-section">
            <h1>{mdx.frontmatter.title}</h1>
            <p className="post-date">{mdx.frontmatter.date}</p>
          </Column>
          <MDXRenderer>{mdx.body}</MDXRenderer>

          <hr />
          <Utterances repo="leye195/blog" theme="github-light" />
        </Column>
      </Container>
    </Layout>
  );
};

export const query = graphql`
  query getPost($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
      body
    }
  }
`;

export default BlogPost;
