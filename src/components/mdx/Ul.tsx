import { ComponentProps } from 'react';
import { css } from '@emotion/react';

const ulStyle = css`
	margin-left: 1rem;

	li {
		font-size: 16px;
	}
`;

const Ul = ({ children }: ComponentProps<'ul'>) => {
	return <ul css={ulStyle}>{children}</ul>;
};

export default Ul;
