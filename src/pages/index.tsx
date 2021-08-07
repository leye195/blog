import React from "react";
import { graphql, Link } from "gatsby";
import { css } from "@emotion/react";
import { mdxNodeType } from "types/post";
import Layout from "../components/layout/Layout";
import Img from "../components/common/Img";
import Column from "../components/common/Column";
import Row from "../components/common/Row";
import Tag from "../components/common/Tag";
import PageHead from "../components/common/PageHead";
import { media } from "../styles/variables";
import { flexMixin } from "../styles/mixin";

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

  & .post-preview {
    ${flexMixin({ direction: "column" })}
    margin-bottom: 0.5rem;
    width: 100%;

    &-title {
      font-size: 2rem;
    }

    &-date {
      font-size: 1.15rem;
      color: #868e96;
      white-space: pre;
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

const IndexPage = ({ data: { allMdx, bg, avatar } }: any) => {
  return (
    <Layout>
      <PageHead imgURL={bg.publicURL}>
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
      </PageHead>
      <section css={contentSection}>
        <Column className="posts">
          {allMdx.nodes.map(({ frontmatter, id }: mdxNodeType) => (
            <Link key={id} to={`/posts/${frontmatter.slug}`}>
              <article className="post-preview" key={id}>
                <h2 className="post-preview-title">{frontmatter.title}</h2>
                <Row alignItems="center" justifyContents="space-between">
                  <Row className="tags">
                    {frontmatter.tags.split(",").map((tag) => (
                      <Tag key={tag} className="tag" text={tag} />
                    ))}
                  </Row>
                  <p className="post-preview-date">{frontmatter.date}</p>
                </Row>
              </article>
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
    avatar: file(relativePath: { eq: "avatar.png" }) {
      publicURL
    }
  }
`;

export default IndexPage;
