import React from "react";
import { css } from "@emotion/react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { Global } from "@emotion/react";
import global from "../../styles/global";
import { media } from "../../styles/variables";

const headerStyle = css`
  height: 60px;
  border-bottom: 2px solid #f5f3f3;

  & .inner-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: auto;
    height: 100%;
    max-width: 310px;

    & .menu {
      margin-top: 0.5rem;
      & > a {
        margin-right: 1.5rem;
        font-size: 1.25rem;
        font-weight: bold;
        color: #7886b7;
      }
    }

    ${media.smDown} {
      justify-content: center;
    }

    ${media.sm} {
      max-width: 550px;
    }
    ${media.md} {
      max-width: 700px;
    }
    ${media.lg} {
      max-width: 950px;
    }
    ${media.xl} {
      max-width: 1200px;
    }
  }
`;

const Header = () => {
  return (
    <>
      <Global styles={global} />
      <header css={headerStyle}>
        <div className="inner-container">
          <Link to="/">
            <StaticImage
              className="logo"
              src="../../images/logo.svg"
              alt="dan.dev.log"
            />
          </Link>
          <div className="menu">
            <Link to="/about">About</Link>
            <Link to="/posts">Posts</Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
