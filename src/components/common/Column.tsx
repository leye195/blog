import React from "react";
import { css } from "@emotion/react";
import { flexMixin } from "../../styles/mixin";

type Props = colType & {
  children: React.ReactNode;
};

type colType = {
  direction?: string;
  alignItems?: string;
  justifyContents?: string;
};

const col = (params: colType) => css`
  ${flexMixin(params)}
`;

const Column: React.FC<Props> = ({
  children,
  direction = "column",
  alignItems = "flex-start",
  justifyContents = "flex-start",
}) => {
  return (
    <div css={col({ direction, alignItems, justifyContents })}>{children}</div>
  );
};

export default Column;
