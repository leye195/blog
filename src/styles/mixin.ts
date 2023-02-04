import { css } from '@emotion/react';

type Flex = {
	display?: 'flex' | 'inline-flex';
	direction?: 'row' | 'column' | 'reverse-row' | 'reverse-column';
	alignItems?: 'flex-start' | 'flex-end' | 'center' | 'start' | 'end';
	justifyContents?: 'flex-start' | 'flex-end' | 'center' | 'start' | 'end';
	gap?: string;
};

export const flexMixin = ({
	display = 'flex',
	direction = 'row',
	alignItems = 'flex-start',
	justifyContents = 'flex-start',
	gap = '0',
}: Flex) => css`
	display: ${display};
	flex-direction: ${direction};
	align-items: ${alignItems};
	justify-content: ${justifyContents};
	gap: ${gap};
`;
