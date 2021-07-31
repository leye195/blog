import { css } from "@emotion/react";

export const flexMixin = ({
  direction = "row",
  alignItems = "flex-start",
  justifyContents = "flex-start",
}) => css`
  display: flex;
  flex-direction: ${direction};
  align-items: ${alignItems};
  justify-content: ${justifyContents};
`;
