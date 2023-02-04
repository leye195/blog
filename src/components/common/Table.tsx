import React from 'react';
import { css } from '@emotion/react';
import { spacing } from 'styles/variables';

type Props = {
	info: { title: string; link?: string }[];
};

const table = css`
	max-width: 1200px;
	width: 100%;
	margin: ${spacing.m} auto;
`;

const tableBody = css`
	font-weight: bold;
`;

const tableRow = css`
	&:first-of-type {
		& td {
			border-top: 1px solid #e3e3e3;
		}
	}

	& td {
		border-bottom: 1px solid #e3e3e3;
	}

	& td:first-of-type {
		padding: 0.5rem;
		border-right: 1px solid #e3e3e3;

		text-align: right !important;
		font-weight: bolder !important;
	}

	& td:last-child {
		padding: 1rem 0 1rem 0.5rem;
	}
`;

const Table = ({ info }: Props) => {
	return (
		<table css={table}>
			<thead>
				<tr>
					<th align="center"></th>
					<th></th>
				</tr>
			</thead>
			<tbody css={tableBody}>
				{info?.map(({ title, link }) => (
					<tr key={title} css={tableRow}>
						<td align="center">{title}</td>
						<td>
							<a href={link}>{link}</a>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default Table;
