import React from "react";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";
import { css } from "@emotion/react";
import { Link } from "gatsby";
import Common from "../common";
import { flexMixin } from "../../styles/mixin";

type Props = {
  children?: React.ReactNode;
  categories: string[];
  isOpen: boolean;
  handleOpen: (isOpen: boolean) => () => void;
};

const categoryListStyle = css`
  ${flexMixin({
    direction: "column",
    alignItems: "center",
  })}
  margin: 0.5rem auto;
  position: sticky;
  height: auto;

  & .category {
    ${flexMixin({
      direction: "row",
      alignItems: "center",
    })}
    flex-wrap: wrap;
    padding: 0 0.5rem;
    margin-bottom: 0.5rem;
    width: 100%;
    min-height: 66px;
    overflow: hidden;
    border-left: 5px solid rgba(0, 0, 0, 0.3);
    border-right: 5px solid rgba(0, 0, 0, 0.3);
    background-color: #e8e8e8;
    transition: all 0.25s linear;

    & > li {
      padding: 0.5rem;
      margin: 0.5rem;
      border-radius: 10px;
      background-color: white;
      box-shadow: 0 1px 1px rgb(0 0 0 / 10%);

      & > a {
        color: black;
      }
    }

    &.open {
      height: auto;
      transition: all 0.25s linear;
    }
  }

  & .more {
    ${flexMixin({ direction: "row" })}
    padding: 0.5rem;
    border: 1px solid #e3e3e3;
    border-radius: 10px;
    box-shadow: 0 1px 1px rgb(0 0 0 / 10%);
  }
`;

const CategoryList: React.FC<Props> = ({ categories, isOpen, handleOpen }) => {
  return (
    <div css={categoryListStyle}>
      <ul className={`category ${isOpen ? "open" : "close"}`}>
        {categories.map((category: string) => (
          <li key={category}>
            <Link to={`?category=${category}`}>{category}</Link>
          </li>
        ))}
      </ul>
      <Common.Button
        className="more"
        type="button"
        onClick={handleOpen(!isOpen)}
      >
        {isOpen ? <MdArrowDropUp /> : <MdArrowDropDown />}
      </Common.Button>
    </div>
  );
};

export default CategoryList;
