import React from "react";
import { css } from "@emotion/react";
import { media } from "../../styles/variables";

type containerType = {
  children: React.ReactNode;
  className?: string;
};

const container = css`
  ${media.sm} {
    max-width: 550px;
  }
  ${media.md} {
    max-width: 700px;
  }
  ${media.lg} {
    max-width: 950px;
  }
  ${media.xl} {
    max-width: 1200px;
  }
`;

const Container = ({ className, children }: containerType) => {
  return (
    <div className={className} css={container}>
      {children}
    </div>
  );
};

export default Container;
