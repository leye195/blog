import React from "react";
import { css } from "@emotion/react";

const pStyle = css`
  line-height: 1.85;
`;

const Pragraph: React.FC = ({ children }) => <p css={pStyle}>{children}</p>;

export default Pragraph;
