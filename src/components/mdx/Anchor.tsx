import React from 'react';
import { css } from '@emotion/react';

type Props = {
	href: string;
	children: React.ReactNode;
};

const AnchorStyle = css`
	color: #7886b7;
	line-height: 1.5;
`;

const Anchor: React.FC<Props> = ({ children, href }) => {
	return (
		<a css={AnchorStyle} href={href}>
			{children}
		</a>
	);
};

export default Anchor;
