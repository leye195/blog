import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { css } from "@emotion/react";
import Layout from "components/layout/Layout";
import Common from "components/common";
import Utterances from "components/comment/Utterances";
import { Colors, media } from "styles/variables";
import SEO from "components/common/SEO";

const containerStyle = css`
  margin: 0 auto;
`;

const contentsWrapper = css`
  margin: 0 auto;
  padding: 2rem 1rem;
  max-width: 40rem;
  width: auto;

  ${media.sm} {
    font-size: 0.85rem;
  }

  & .post-date {
    margin-bottom: 1rem;
    width: 100%;
    font-size: 0.85rem;
    font-weight: 500;
    text-align: end;
    color: ${Colors.gray};
  }
`;

const postContainer = css`
  width: 100%;
`;

const BlogPost = ({ data: { mdx } }: any) => {
  return (
    <Layout>
      <SEO
        title={`${mdx.frontmatter.title} | Dan DevLog`}
        description={mdx.excerpt}
        article
      />
      <Common.Container css={containerStyle}>
        <Common.Column css={contentsWrapper}>
          <Common.Column className="top-section">
            <h1>{mdx.frontmatter.title}</h1>
            <p className="post-date">{mdx.frontmatter.date}</p>
          </Common.Column>
          <Common.Container css={postContainer}>
            <MDXRenderer>{mdx.body}</MDXRenderer>
          </Common.Container>
          <hr />
          <Utterances repo="leye195/blog" theme="github-light" />
        </Common.Column>
      </Common.Container>
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
      excerpt(truncate: true)
    }
  }
`;

export default BlogPost;
