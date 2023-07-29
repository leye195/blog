import React from 'react';
import { css } from '@emotion/react';
import { type Flex, flexMixin } from 'styles/mixin';

type Props = colType & {
	children: React.ReactNode;
	className?: string;
} & colType;

type colType = {
	direction?: Flex['direction'];
	alignItems?: Flex['alignItems'];
	justifyContents?: Flex['justifyContents'];
	gap?: Flex['gap'];
};

const col = (params: colType) => css`
	${flexMixin(params)}
	width: 100%;
`;

const Column: React.FC<Props> = ({
	children,
	className,
	direction = 'column',
	alignItems = 'flex-start',
	justifyContents = 'flex-start',
	gap = '0px',
}) => {
	return (
		<div className={className} css={col({ direction, alignItems, justifyContents, gap })}>
			{children}
		</div>
	);
};

export default Column;
