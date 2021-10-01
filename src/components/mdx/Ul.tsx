import React from 'react';
import { css } from '@emotion/react';

const ulStyle = css`
	margin-left: 1rem;
`;

const Ul: React.FC = ({ children }) => {
	return <ul css={ulStyle}>{children}</ul>;
};

export default Ul;
