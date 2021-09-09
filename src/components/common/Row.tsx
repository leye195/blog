import React from "react";
import { css } from "@emotion/react";
import { flexMixin } from "styles/mixin";

type Props = rowType & {
  children: React.ReactNode;
  className?: string;
};

type rowType = {
  direction?: string;
  alignItems?: string;
  justifyContents?: string;
};

const row = (params: rowType) => css`
  ${flexMixin(params)}
  width: 100%;
`;

const Row: React.FC<Props> = ({
  children,
  className,
  direction = "row",
  alignItems = "flex-start",
  justifyContents = "flex-start",
}) => {
  return (
    <div
      className={className}
      css={row({ direction, alignItems, justifyContents })}
    >
      {children}
    </div>
  );
};

export default Row;
