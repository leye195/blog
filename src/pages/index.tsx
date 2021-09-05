import React from "react";
import { graphql, Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { css } from "@emotion/react";
import { mdxNodeType } from "types/post";
import Layout from "../components/layout/Layout";
import Common from "../components/common";
import { media } from "../styles/variables";

const pageHeader = css`
  display: flex;
  padding: 1rem 0;
  height: 12rem;
  position: relative;
  color: white;
  background-color: #7886b7;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 1rem;
    background: linear-gradient(to right, #3d4d7f, transparent);
  }

  &::after {
    content: "";
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    width: 1.5rem;
    background: linear-gradient(to left, #3d4d7f, transparent);
  }

  & h1.page-header__title {
    border-bottom: 0.25rem solid white;
  }
`;

const contentSection = css`
  padding: 2rem 1rem 1.5rem 1rem;
  margin: 2rem auto 0 auto;

  ${media.sm} {
    max-width: 550px;
  }
  ${media.md} {
    max-width: 700px;
  }
  ${media.lg} {
    max-width: 950px;
  }
  ${media.xl} {
    max-width: 1200px;
  }

  & .posts {
    margin: 0 auto;
    max-width: 80%;

    & .post {
      width: 100%;
      padding: 0.5rem;
      color: black;
      border-bottom: 1px solid #f5f5f5;
      transition: all 0.2s linear;

      &:last-child {
        border-bottom: none;
      }

      &:hover {
        & .post-preview__title {
          color: #7886b7;
        }
      }
    }
  }

  & .tags {
    & .tag {
      cursor: pointer;
    }

    & .tag:not(:last-child) {
      margin-right: 0.5rem;
    }
  }

  & .button-group {
    padding: 0.5rem;

    & .page-button {
      padding: 1rem;
      font-weight: bold;
      font-size: 1.2rem;
      background-color: #7886b7;
      color: white;
    }
  }
`;

const IndexPage = ({ data: { allMdx, bg } }: any) => {
  return (
    <Layout>
      <div css={pageHeader}>
        <Common.Column
          className="heading"
          alignItems="center"
          justifyContents="center"
        >
          <h1 className="page-header__title">Dan.Dev.Log</h1>
          <span>Frontend Developer</span>
        </Common.Column>
      </div>
      <section css={contentSection}>
        <Common.Column className="posts">
          {allMdx.nodes.map(({ frontmatter, id }: mdxNodeType) => (
            <Link className="post" key={id} to={`/posts/${frontmatter.slug}`}>
              <Common.Post
                title={frontmatter.title}
                tags={frontmatter.tags}
                date={frontmatter.date}
              />
            </Link>
          ))}
        </Common.Column>
      </section>
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
    bg: file(relativePath: { eq: "bg.jpg" }) {
      publicURL
    }
  }
`;

export default IndexPage;
