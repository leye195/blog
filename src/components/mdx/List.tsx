import React from "react";
import { css } from "@emotion/react";

const listStyle = css`
  list-style: disc;
  line-height: 1.85;
`;

const List: React.FC = ({ children }) => <li css={listStyle}>{children}</li>;

export default List;
