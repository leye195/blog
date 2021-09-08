import React from "react";
import { css } from "@emotion/react";
import { graphql, Link, useStaticQuery } from "gatsby";
import { media } from "../../styles/variables";

const headerStyle = css`
  min-height: auto;
  border-bottom: 2px solid #f5f3f3;

  & .inner-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: auto;
    padding: 0 1rem;
    height: 100%;
    max-width: 310px;

    & .logo-container {
      display: flex;
      padding: 0.5rem 0;
    }

    & .menu {
      margin-top: 0.5rem;

      & > a {
        position: relative;
        font-size: 1rem;
        font-weight: bold;
        color: black;

        &::after {
          content: "";
          position: absolute;
          height: 0.2rem;
          width: 100%;
          left: 0;
          bottom: 0;
          opacity: 0;
          transition: all 0.09s linear;
        }

        &:hover {
          &::after {
            background-color: #7886b7;
            opacity: 1;
          }
        }
      }

      &__about,
      &__posts {
        margin-right: 1.5rem;
      }

      & .current-link {
        &::after {
          background-color: #7886b7;
          opacity: 1;
        }
      }
    }

    ${media.smDown} {
      flex-wrap: wrap;
      padding: 0;
      height: auto;
      max-width: 95%;

      & .logo-container {
        justify-content: center;
        width: 100%;
      }

      & .menu {
        display: flex;
        justify-content: center;
        margin-top: 0;
        margin-left: 0.5rem;
        padding: 0.5rem 0;
        width: 100%;

        &__about,
        &__posts,
        &__tags {
          display: flex;
          justify-content: center;
        }
      }
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
      logo: file(relativePath: { eq: "logo.png" }) {
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
            <Link
              className="menu__about"
              to="/me"
              activeClassName="current-link"
            >
              Me
            </Link>
            <Link
              className="menu__posts"
              to="/posts"
              activeClassName="current-link"
            >
              Posts
            </Link>
            <Link
              className="menu__tags"
              to="/tags"
              activeClassName="current-link"
            >
              Tags
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
