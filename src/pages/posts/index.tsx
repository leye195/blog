import React, { useState, useEffect } from "react";
import { graphql, Link } from "gatsby";
import { css } from "@emotion/react";
import qs from "qs";
import Layout from "../../components/layout/Layout";
import PageHead from "../../components/common/PageHead";
import Column from "../../components/common/Column";
import CategoryList from "../../components/posts/CategoryList";
import Post from "../../components/common/Post";
import { categorizePosts } from "../../libs/category";
import { media } from "../../styles/variables";
import { postType } from "types/post";

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
    max-width: 90%;

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
`;

const isBrowser = typeof window !== "undefined";

const PostsPage = ({ data: { bg, allMdx } }: any) => {
  const [category, setCategory] = useState<string>("all");
  const [postList, setPostList] = useState<{ [key: string]: any }>({});
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpen = (isOpen: boolean) => () => {
    setIsOpen(isOpen);
  };

  useEffect(() => {
    if (isBrowser) {
      const location = window.location;
      const { category } = qs.parse(location.search.slice(1));
      const { nodes } = allMdx;
      console.log(category);
      setPostList(categorizePosts(nodes));
      setCategory(
        category ? (category?.toString()?.toLowerCase() as string) : "all"
      );
    }
  }, [window.location.search]);

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
      <section css={contentSection}>
        <CategoryList
          categories={[
            "All",
            "Javascript",
            "FrontEnd",
            "React",
            "TypeScript",
            "Etc",
            "Web",
            "Tool",
          ]}
          isOpen={isOpen}
          handleOpen={handleOpen}
        />
        <Column className="posts">
          {postList[category as string]?.map(
            ({ slug, title, tags, date }: postType, idx: number) => (
              <Link key={idx} to={`/posts/${slug}`}>
                <Post title={title} tags={tags} date={date} />
              </Link>
            )
          )}
        </Column>
      </section>
    </Layout>
  );
};

export const query = graphql`
  query {
    bg: file(relativePath: { eq: "posts-bg.jpg" }) {
      publicURL
    }
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
  }
`;

export default PostsPage;
