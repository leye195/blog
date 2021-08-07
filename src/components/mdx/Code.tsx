import React from "react";
import { css } from "@emotion/react";

const codeStyle = css`
  background: inherit;
  color: inherit;
  display: block;
  padding: 30px;
  top: 0;
  white-space: pre-wrap;
`;

const Code: React.FC = ({ children }) => (
  <code css={codeStyle}>{children}</code>
);

export default Code;
