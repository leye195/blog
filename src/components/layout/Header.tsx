import React from "react";
import { css } from "@emotion/react";
import { graphql, Link, useStaticQuery } from "gatsby";
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
        font-size: 1.25rem;
        font-weight: bold;
        color: #7886b7;
      }

      &__about {
        margin-right: 1.5rem;
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
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo.svg" }) {
        publicURL
      }
    }
  `);
  return (
    <>
      <header css={headerStyle}>
        <div className="inner-container">
          <Link className="logo-container" to="/">
            <img className="logo" src={data.logo.publicURL} alt="dan.dev.log" />
          </Link>
          <div className="menu">
            <Link className="menu__about" to="/about">
              About
            </Link>
            <Link className="menu__posts" to="/posts?category=all">
              Posts
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
