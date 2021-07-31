import React from "react";
import { css } from "@emotion/react";
import { flexMixin } from "../../styles/mixin";

type Props = rowType & {
  children: React.ReactNode;
};

type rowType = {
  direction?: string;
  alignItems?: string;
  justifyContents?: string;
};

const row = (params: rowType) => css`
  ${flexMixin(params)}
`;

const Row: React.FC<Props> = ({
  children,
  direction = "row",
  alignItems = "flex-start",
  justifyContents = "flex-start",
}) => {
  return (
    <div css={row({ direction, alignItems, justifyContents })}>{children}</div>
  );
};

export default Row;
