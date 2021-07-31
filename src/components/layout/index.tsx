import React from "react";
import { css } from "@emotion/react";
import Header from "./Header";

const container = css``;

const Layout: React.FC = ({ children }) => {
  return (
    <div css={container}>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
