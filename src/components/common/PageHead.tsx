import React from "react";
import { css } from "@emotion/react";
import Img from "./Img";

type Props = {
  children?: React.ReactNode;
  className?: string;
  imgURL: string;
};

const topSection = css`
  position: relative;
  height: 25rem;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 1rem;
    background: linear-gradient(to right, black, transparent);
  }

  &::after {
    content: "";
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    width: 1.5rem;
    background: linear-gradient(to left, black, transparent);
  }

  & .heading {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    color: white;
    text-shadow: 0px 3px 14px black;

    & > h2 {
      margin: 0;
      font-size: 3rem;
      text-align: center;
      border-bottom: 0.25rem solid white;
    }

    & > span {
      font-size: 1.5rem;
      font-weight: 300;
    }

    & .avatar {
      height: 8.5rem;
      width: 8.5rem;
      margin-bottom: 1rem;

      & > img {
        background-color: white;
        border-radius: 50%;
      }
    }
  }
`;

const PageHead: React.FC<Props> = ({ className, imgURL, children }) => {
  return (
    <section className={className} css={topSection}>
      <Img className="bg-image" src={imgURL} alt="" />
      {children}
    </section>
  );
};

export default PageHead;
