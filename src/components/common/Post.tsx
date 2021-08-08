import React from "react";
import { css } from "@emotion/react";
import Row from "../common/Row";
import Tag from "../common/Tag";
import { flexMixin } from "../../styles/mixin";

type Props = {
  title: string;
  tags: string;
  date: string;
};

const postStyle = css`
  &.post-preview {
    ${flexMixin({ direction: "column" })}
    margin-bottom: 0.5rem;
    width: 100%;

    &-title {
      font-size: 2rem;
    }

    & .post-preview-date {
      font-size: 1.15rem;
      color: #868e96;
      white-space: pre;
    }
  }
`;

const Post = ({ title, tags, date }: Props) => {
  return (
    <article css={postStyle} className="post-preview">
      <h2 className="post-preview-title">{title}</h2>
      <Row alignItems="center" justifyContents="space-between">
        <Row className="tags">
          {tags.split(",").map((tag) => (
            <Tag key={tag} className="tag" text={tag} />
          ))}
        </Row>
        <p className="post-preview-date">{date}</p>
      </Row>
    </article>
  );
};

export default Post;
