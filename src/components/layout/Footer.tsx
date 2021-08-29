import React from "react";
import { css } from "@emotion/react";
import { FaGithubSquare } from "react-icons/fa";
import Row from "../common/Row";
import Column from "../common/Column";

const footerStyle = css`
  padding: 3rem 0;
  border-top: 1px solid #f5f3f3;

  & svg {
    font-size: 2.5rem;
    cursor: pointer;
    color: black;
  }

  & .copyright {
    margin-top: 1rem;
    font-size: 0.85rem;
    text-align: center;
  }
`;

const Footer: React.FC = () => {
  return (
    <footer css={footerStyle}>
      <Column alignItems="center" justifyContents="center">
        <Row alignItems="center" justifyContents="center">
          <a href="https://github.com/leye195" target="_blank" rel="noopener">
            <FaGithubSquare />
          </a>
        </Row>
        <p className="copyright">
          Copyright © dan.dev.log {new Date().getFullYear()}
        </p>
      </Column>
    </footer>
  );
};

export default Footer;
