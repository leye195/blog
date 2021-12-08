import Common from 'components/common';
import Layout from 'components/layout/Layout';

// styles
const pageStyles = {
	color: '#232129',
	padding: '64px 96px 120px 96px',
	fontFamily: '-apple-system, Roboto, sans-serif, serif',
};
const headingStyles = {
	marginTop: 0,
	marginBottom: 32,
	maxWidth: 320,
};

const NotFoundPage = () => {
	return (
		<Layout>
			<Common.SEO title="404: Not Found" />
			<main style={pageStyles}>
				<h1 style={headingStyles}>Page Not found</h1>
				<p>We couldn’t find what you were looking for.</p>
			</main>
		</Layout>
	);
};

export default NotFoundPage;
