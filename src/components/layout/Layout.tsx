import React from "react";
import { css } from "@emotion/react";
import { Global } from "@emotion/react";
import Header from "./Header";
import Footer from "./Footer";
import global from "../../styles/global";

const container = css``;

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Global styles={global} />

      <div css={container}>
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
