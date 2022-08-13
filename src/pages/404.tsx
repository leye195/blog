import { css } from '@emotion/react';

import Common from 'components/common';
import Layout from 'components/layout/Layout';
import { flexMixin } from 'styles/mixin';

const main = css`
	${flexMixin({ alignItems: 'center', direction: 'column' })};
	min-height: calc(100vh - 280px);
	padding: 2rem;
`;

const title = css`
	margin: 0 auto 2rem auto;
	text-align: center;
`;

const NotFoundPage = () => {
	return (
		<Layout>
			<Common.SEO title="404: Not Found" />
			<main css={main}>
				<h1 css={title}>404: Page Not found</h1>
			</main>
		</Layout>
	);
};

export default NotFoundPage;
