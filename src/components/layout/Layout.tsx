import React from "react";
import { Global, css } from "@emotion/react";
import { MDXProvider } from "@mdx-js/react";
import { MdArrowUpward } from "react-icons/md";
import Header from "components/layout/Header";
import Footer from "components/layout/Footer";
import Common from "components/common";
import MDXDesign from "components/mdx";
import global from "styles/global";

const container = css`
  & .to-top {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    position: fixed;
    bottom: 1rem;
    right: 1rem;
    border-radius: 50%;
    background-color: #7886b7;
    color: white;
    box-shadow: 0px 1px 6px 1px #00000078;
    cursor: pointer;
  }
`;

const Layout: React.FC = ({ children }) => {
  const handleToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Global styles={global} />
      <MDXProvider
        components={{
          p: (props) => <MDXDesign.Pragraph {...props} />,
          code: (props) => <MDXDesign.Code {...props} />,
          pre: (props) => <MDXDesign.Pre {...props} />,
          a: (props) => <MDXDesign.Anchor {...props} />,
          li: (props) => <MDXDesign.List {...props} />,
        }}
      >
        <div css={container}>
          <Header />
          {children}
          <Footer />
          <Common.Button className="to-top" type="button" onClick={handleToTop}>
            <MdArrowUpward />
          </Common.Button>
        </div>
      </MDXProvider>
    </>
  );
};

export default Layout;
