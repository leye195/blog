import React from "react";
import { css } from "@emotion/react";

type TagType = {
  text: string;
  className?: string;
};

const tagStyle = css`
  height: 1rem;
  padding: 0.5rem;
  background-color: #7886b7;
  color: white;
  border-radius: 0.5rem;
`;

const Tag = ({ className, text }: TagType) => {
  return (
    <div className={className} css={tagStyle}>
      {text}
    </div>
  );
};

export default Tag;
