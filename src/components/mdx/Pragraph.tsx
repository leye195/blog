import React, { ComponentProps } from 'react';
import { css } from '@emotion/react';

const pStyle = css`
	margin-bottom: 0.5rem;
	line-height: 1.85;

	& code {
		padding: 0.15rem 0.25rem;
		color: #eb5757;
		background: rgba(135, 131, 120, 0.15);
		border-radius: 2px;
	}
`;

const Pragraph = ({ children }: ComponentProps<'p'>) => <p css={pStyle}>{children}</p>;

export default Pragraph;
