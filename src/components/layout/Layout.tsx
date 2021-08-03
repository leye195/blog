import React from "react";
import { Global, css } from "@emotion/react";
import { MDXProvider } from "@mdx-js/react";
import Header from "./Header";
import Footer from "./Footer";
import MDXDesign from "../mdx";
import global from "../../styles/global";

const container = css``;

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Global styles={global} />
      <MDXProvider
        components={{
          p: (props) => <MDXDesign.Pragraph {...props} />,
        }}
      >
        <div css={container}>
          <Header />
          {children}
          <Footer />
        </div>
      </MDXProvider>
    </>
  );
};

export default Layout;
