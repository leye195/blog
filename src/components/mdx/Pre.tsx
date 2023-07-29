import { type ComponentProps } from 'react';
import { css } from '@emotion/react';

const preStyle = css`
	width: 100%;
	color: #f8f8f2 !important;
	border: none;
`;

const Pre = ({ children }: ComponentProps<'pre'>) => (
	<pre className="language-" css={preStyle}>
		{children}
	</pre>
);

export default Pre;
