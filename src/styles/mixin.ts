import { css } from '@emotion/react';

export const flexMixin = ({
	direction = 'row',
	alignItems = 'flex-start',
	justifyContents = 'flex-start',
	gap = '0px',
}) => css`
	display: flex;
	flex-direction: ${direction};
	align-items: ${alignItems};
	justify-content: ${justifyContents};
	gap: ${gap};
`;
