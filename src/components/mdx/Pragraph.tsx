import React from 'react';
import { css } from '@emotion/react';

const pStyle = css`
	margin-bottom: 0.5rem;
	line-height: 1.85;

	& code {
		background-color: lightskyblue;
	}
`;

const Pragraph: React.FC = ({ children }) => <p css={pStyle}>{children}</p>;

export default Pragraph;
