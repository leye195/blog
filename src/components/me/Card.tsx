import React from 'react';
import { css } from '@emotion/react';

type CardType = {
	title: string;
	period: string;
	description: string;
};

const content = css`
	margin-bottom: 1rem;

	& .period {
		font-size: 0.95rem !important;
	}

	& p {
		white-space: pre-line;
	}
`;

const Card = ({ title, period, description }: CardType) => {
	return (
		<div>
			<h4>{title}</h4>
			<div css={content}>
				<p className="period">{period.trim()}</p>
			</div>
			<div css={content}>
				<p>{description.trim()}</p>
			</div>
		</div>
	);
};

export default Card;
