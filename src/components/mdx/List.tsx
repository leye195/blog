import { type ComponentProps } from 'react';
import { css } from '@emotion/react';

const listStyle = css`
	list-style: disc;
	line-height: 1.85;
`;

const List = ({ children }: ComponentProps<'li'>) => <li css={listStyle}>{children}</li>;

export default List;
