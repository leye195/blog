import { type ComponentProps } from 'react';
import { css } from '@emotion/react';

const codeStyle = css`
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
