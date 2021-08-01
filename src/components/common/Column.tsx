import React from "react";
import { css } from "@emotion/react";
import { flexMixin } from "../../styles/mixin";

type Props = colType & {
  children: React.ReactNode;
  className?: string;
};

type colType = {
  direction?: string;
  alignItems?: string;
  justifyContents?: string;
};

const col = (params: colType) => css`
  ${flexMixin(params)}
  width: 100%;
`;

const Column: React.FC<Props> = ({
  children,
  className,
  direction = "column",
  alignItems = "flex-start",
  justifyContents = "flex-start",
}) => {
  return (
    <div
      className={className}
      css={col({ direction, alignItems, justifyContents })}
    >
      {children}
    </div>
  );
};

export default Column;
