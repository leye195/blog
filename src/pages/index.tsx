import React from "react";
import { graphql, Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { css } from "@emotion/react";
import { mdxNodeType } from "types/post";
import Layout from "../components/layout/Layout";
import Column from "../components/common/Column";
import PageHead from "../components/common/PageHead";
import Post from "../components/common/Post";
import { media } from "../styles/variables";

const contentSection = css`
  padding: 1.5rem 1rem;
  margin: auto;

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

    & > a {
      width: 100%;
      padding: 0.5rem;
      color: black;
      transition: all 0.2s linear;
    }

    & > a:hover {
      background-color: #e8ecfd;
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
      <PageHead imgURL={bg.publicURL}>
        <Column
          className="heading"
          alignItems="center"
          justifyContents="center"
        >
          <div className="avatar">
            <StaticImage src="../images/avatar.png" alt="Home" />
          </div>
          <h2>Frontend Developer</h2>
          <span>DanYJ's 개발 블로그</span>
        </Column>
      </PageHead>
      <section css={contentSection}>
        <Column className="posts">
          {allMdx.nodes.map(({ frontmatter, id }: mdxNodeType) => (
            <Link key={id} to={`/posts/${frontmatter.slug}`}>
              <Post
                title={frontmatter.title}
                tags={frontmatter.tags}
                date={frontmatter.date}
              />
            </Link>
          ))}
        </Column>
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
