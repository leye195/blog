import React from "react";
import { css } from "@emotion/react";
import { media } from "../../styles/variables";

type TagType = {
  text: string;
  count?: number;
  className?: string;
};

const tagStyle = css`
  display: flex;
  justify-content: space-between;
  height: 1rem;
  padding: 0.5rem;
  position: relative;
  border: 1px solid #7886b7;
  border-radius: 10px;
  color: #7886b7;

  & > span {
    margin-left: 0.5rem;
  }

  ${media.mdDown} {
    height: 0.8rem;
    font-size: 0.8rem;
  }
`;

const Tag = ({ className, text, count }: TagType) => {
  return (
    <div className={className} css={tagStyle}>
      {text}
      {count && <span>{count}</span>}
    </div>
  );
};

export default Tag;
