import React from 'react';
import { css } from '@emotion/react';
import { Flex, flexMixin } from 'styles/mixin';

type Props = rowType & {
	children: React.ReactNode;
	className?: string;
} & rowType;

type rowType = {
	direction?: Flex['direction'];
	alignItems?: Flex['alignItems'];
	justifyContents?: Flex['justifyContents'];
	gap?: Flex['gap'];
};

const row = ({ direction, alignItems, justifyContents, gap }: rowType) => css`
	${flexMixin({ direction, alignItems, justifyContents, gap })}
	width: 100%;
`;

const Row: React.FC<Props> = ({
	children,
	className,
	direction = 'row',
	alignItems = 'flex-start',
	justifyContents = 'flex-start',
	gap = '0px',
}) => {
	return (
		<div className={className} css={row({ direction, alignItems, justifyContents, gap })}>
			{children}
		</div>
	);
};

export default Row;
