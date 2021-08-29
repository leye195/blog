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
    padding: 0 1rem;
    height: 100%;
    max-width: 310px;

    & .menu {
      margin-top: 0.5rem;
      & > a {
        font-size: 1rem;
        font-weight: bold;
        color: black;
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
      max-width: 768px;
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
            <Link className="menu__about" to="/me">
              Me
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
