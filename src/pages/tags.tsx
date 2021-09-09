import React from "react";
import { graphql, Link } from "gatsby";
import { css } from "@emotion/react";
import Layout from "components/layout/Layout";
import Common from "components/common";
import Tag from "components/common/Tag";
import { mdxGroupType } from "types/post";
import { media } from "styles/variables";

type Props = {
  data: {
    allMdx: mdxGroupType;
  };
};

const tagsSection = css`
  max-width: 700px;
  margin: 2rem auto 2rem auto;

  & .tags {
    &__title {
      width: 100%;
      padding-bottom: 0.5rem;
      border-bottom: 1px solid #f5f3f3;
    }

    &__list {
      display: flex;
      flex-wrap: wrap;
      padding-top: 1rem;
      min-height: 25rem;

      & > a {
        height: fit-content;
      }

      & .tag {
        transition: all 0.25s linear;

        &:hover {
          background-color: #7886b7;
          color: white;
        }
      }

      & .empty__space {
        margin-right: 1rem;
      }
    }
  }
`;

const TagsPage = ({ data: { allMdx } }: Props) => {
  return (
    <Layout>
      <section css={tagsSection}>
        <Common.Column className="tags">
          <h1 className="tags__title">Tags</h1>
          <div className="tags__list">
            {allMdx?.group.map(({ tag, totalCount }, idx) => (
              <>
                {idx !== 0 && <div className="empty__space" />}
                <Link to={`/posts?category=${tag}`}>
                  <Tag className="tag" text={tag} count={totalCount} />
                </Link>
              </>
            ))}
          </div>
        </Common.Column>
      </section>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx {
      group(field: frontmatter___tags) {
        tag: fieldValue
        totalCount
      }
    }
  }
`;

export default TagsPage;
