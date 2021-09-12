import React from "react";
import { css } from "@emotion/react";

const codeStyle = css`
  background: inherit;
  color: inherit;
  display: block;
  top: 0;
  white-space: pre-wrap;
  overflow: auto;
`;

const Code: React.FC = ({ children }) => (
  <code className="language-" css={codeStyle}>
    {children}
  </code>
);

export default Code;
