import React from "react";
import { graphql } from "gatsby";
import { css } from "@emotion/react";
import { mdxNodeType } from "types/post";
import Layout from "../components/layout/Layout";
import Img from "../components/common/Img";
import Column from "../components/common/Column";
import { media } from "../styles/variables";
import { flexMixin } from "../styles/mixin";

const topSection = css`
  position: relative;
  height: 30rem;

  & .heading {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    color: white;

    & > h2 {
      margin-top: 0;
      font-size: 3rem;
    }

    & > span {
      font-size: 1.5rem;
      font-weight: 300;
    }

    & .avatar {
      height: 8.5rem;
      width: 8.5rem;
      margin-bottom: 1rem;

      & > img {
        background-color: white;
        border-radius: 50%;
      }
    }
  }
`;

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
  }

  & .post-preview {
    ${flexMixin({ direction: "column" })}
    margin-bottom: 1rem;
    width: 100%;

    &-title {
      font-size: 2rem;
    }

    &-date {
      font-size: 1rem;
      color: #868e96;
    }
  }
`;

const IndexPage = ({ data: { allMdx, bg, avatar } }: any) => {
  return (
    <Layout>
      <section css={topSection}>
        <Img className="bg-image" src={bg.publicURL} alt="" />
        <Column
          className="heading"
          alignItems="center"
          justifyContents="center"
        >
          <div className="avatar">
            <Img src={avatar.publicURL} alt="" />
          </div>
          <h2>Frontend Developer</h2>
          <span>DanYJ's 개발 블로그</span>
        </Column>
      </section>
      <section css={contentSection}>
        <Column className="posts">
          {allMdx.nodes.map(({ frontmatter, id }: mdxNodeType) => (
            <>
              <article className="post-preview" key={id}>
                <h2 className="post-preview-title">{frontmatter.title}</h2>
                <p className="post-preview-date">Posted {frontmatter.date}</p>
              </article>
              <hr></hr>
            </>
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
          date(fromNow: true)
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
    avatar: file(relativePath: { eq: "avatar.png" }) {
      publicURL
    }
  }
`;

export default IndexPage;
