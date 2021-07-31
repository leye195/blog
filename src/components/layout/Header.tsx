import React from "react";
import { css } from "@emotion/react";
import { StaticImage } from "gatsby-plugin-image";

const headerStyle = css`
  height: 60px;

  & .inner-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: auto;
    max-width: 1100px;
    height: 100%;
  }
`;

const logo = css``;

const Header = () => {
  return (
    <header css={headerStyle}>
      <div className="inner-container">
        <StaticImage src="../../images/logo.svg" alt="dan.dev.log" />
      </div>
    </header>
  );
};

export default Header;
