import React, { createRef, useLayoutEffect } from 'react';
import { css } from '@emotion/react';

const src = 'https://utteranc.es/client.js';

export interface IUtterancesProps {
	repo: string;
	theme: string;
}

const UtterancesContainer = css`
	width: 100%;
`;

const Utterances: React.FC<IUtterancesProps> = React.memo(({ repo, theme }) => {
	const containerRef = createRef<HTMLDivElement>();

	useLayoutEffect(() => {
		const utterances = document.createElement('script');

		const attributes = {
			src,
			repo,
			theme,
			'issue-term': 'pathname',
			label: '✨💬 comments',
			crossOrigin: 'anonymous',
			async: 'true',
		};

		Object.entries(attributes).forEach(([key, value]) => {
			utterances.setAttribute(key, value);
		});

		if (containerRef.current) containerRef.current.appendChild(utterances);
	}, [repo]);

	return <div css={UtterancesContainer} ref={containerRef} />;
});

Utterances.displayName = 'Utterances';

export default Utterances;
