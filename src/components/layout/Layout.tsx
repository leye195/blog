import React from "react";
import { css } from "@emotion/react";
import Header from "./Header";
import Footer from "./Footer";

const container = css``;

const Layout: React.FC = ({ children }) => {
  return (
    <div css={container}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
