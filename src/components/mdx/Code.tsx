import { type ComponentProps } from 'react';
import { css } from '@emotion/react';

const codeStyle = css`
	background: inherit;
	color: inherit;
	display: block;
	top: 0;
	white-space: pre-wrap;
	overflow: auto;
	color: #eb5757;
	background: rgba(135, 131, 120, 0.15);
`;

const Code = ({ children, className }: ComponentProps<'code'>) => {
	return (
		<code className={className} css={codeStyle}>
			{children}
		</code>
	);
};

export default Code;
