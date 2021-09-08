import React from "react";
import { css } from "@emotion/react";
import Row from "../common/Row";
import Tag from "../common/Tag";
import { flexMixin } from "../../styles/mixin";
import { media } from "../../styles/variables";

type Props = {
  title: string;
  tags: string[];
  date: string;
};

const postStyle = css`
  &.post-preview {
    ${flexMixin({ direction: "column" })}
    margin-bottom: 0.5rem;
    width: 100%;

    & .post-preview__title {
      font-size: 1.2rem;
      font-weight: 400;

      ${media.mdDown} {
        font-size: 1rem;
      }
    }

    & .post-preview__date {
      font-size: 1rem;
      color: #868e96;
      white-space: pre;

      ${media.mdDown} {
        font-size: 0.8rem;
      }
    }
  }
`;

const Post = ({ title, tags, date }: Props) => {
  return (
    <article css={postStyle} className="post-preview">
      <h2 className="post-preview__title">{title}</h2>
      <Row alignItems="center" justifyContents="space-between">
        <Row className="tags">
          {tags.map((tag) => (
            <Tag key={tag} className="tag" text={tag} />
          ))}
        </Row>
        <p className="post-preview__date">{date}</p>
      </Row>
    </article>
  );
};

export default Post;
