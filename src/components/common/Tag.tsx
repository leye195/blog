import React from "react";
import { css } from "@emotion/react";
import { media } from "../../styles/variables";

type TagType = {
  text: string;
  className?: string;
};

const tagStyle = css`
  height: 1rem;
  padding: 0.5rem;
  border: 1px solid #7886b7;
  color: #7886b7;
  border-radius: 0.5rem;

  ${media.mdDown} {
    height: 0.8rem;
    font-size: 0.8rem;
  }
`;

const Tag = ({ className, text }: TagType) => {
  return (
    <div className={className} css={tagStyle}>
      {text}
    </div>
  );
};

export default Tag;
