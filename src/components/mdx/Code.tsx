import React from "react";
import { css } from "@emotion/react";

type Props = {
  className?: string;
};

const codeStyle = css`
  background: inherit;
  color: inherit;
  display: block;
  top: 0;
  white-space: pre-wrap;
  overflow: auto;
`;

const Code: React.FC<Props> = ({ children, className }) => {
  return (
    <code className={className} css={codeStyle}>
      {children}
    </code>
  );
};

export default Code;
