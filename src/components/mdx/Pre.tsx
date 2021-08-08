import React from "react";
import { css } from "@emotion/react";

const preStyle = css`
  width: 100%;
  background-color: #282a36 !important;
  color: #f8f8f2 !important;
  border: none;
`;

const Pre: React.FC = ({ children }) => (
  <pre className="language-" css={preStyle}>
    {children}
  </pre>
);

export default Pre;
