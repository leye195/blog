import { css } from "@emotion/react";
import emotionNormalize from "emotion-normalize";

export default css`
  ${emotionNormalize}
  html,
  body {
    padding: 0;
    margin: 0;
    min-height: 100%;
    box-sizing: border-box;
  }

  a,
  a:hover {
    text-decoration: none;
  }

  p {
    margin: 0;
  }

  ul,
  li {
    list-style: none;
  }

  button {
    display: inline-block;
    margin: 0;
    padding: 0;
    border: none;
    cursor: pointer;
    background-color: unset;
    -webkit-appearance: none;
    -moz-appearance: none;

    &:focus {
      outline: 0;
    }
    &:disabled {
      cursor: default;
    }
  }

  #root {
    min-height: 100vh;
  }
`;
