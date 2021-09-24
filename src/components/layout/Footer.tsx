import React from "react";
import { css } from "@emotion/react";
import { FaGithubSquare } from "react-icons/fa";
import Common from "components/common";

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
      <Common.Column alignItems="center" justifyContents="center">
        <Common.Row alignItems="center" justifyContents="center">
          <a
            className="github"
            href="https://github.com/leye195"
            target="_blank"
            rel="noopener"
          >
            <FaGithubSquare />
          </a>
        </Common.Row>
        <p className="copyright">© {new Date().getFullYear()} dan.dev.log </p>
      </Common.Column>
    </footer>
  );
};

export default Footer;
