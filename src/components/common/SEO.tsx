import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';

type Props = {
	title?: string;
	description?: string;
	article?: boolean;
};

const SEO = ({ title, description = 'Blog posted about development', article = false }: Props) => {
	const { site, img } = useStaticQuery(query);
	const { defaultTitle } = site.siteMetadata;

	return (
		<Helmet title={title || defaultTitle}>
			<meta name="google-site-verification" content="SNn8OfS93Xxp1ddDVezupnfWFekOCL-_dl6oOsob920" />
			<meta name="naver-site-verification" content="ecfeaa9be7cbad3bdcce2e35d5cb4d1d1a93fb89" />
			<meta name="title" content={title || defaultTitle} />
			<meta name="description" content={description || ''} />
			<meta property="og:type" content={article ? 'article' : 'webpage'} />
			<meta property="og:title" content={title || defaultTitle} />
			<meta property="og:url" content="https://dantechblog.netlify.app/" />
			<meta property="og:description" content={description || ''} />
			<meta property="og:image" content={img.publicURL} />

			<meta property="twitter:title" content={title || defaultTitle} />
			<meta property="twitter:url" content="https://dantechblog.netlify.app/" />
			<meta property="twitter:card" content="summary_large_image" />
			<meta property="twitter:description" content={description || ''} />
			<meta property="twitter:image" content={img.publicURL} />
		</Helmet>
	);
};

const query = graphql`
	query SEO {
		img: file(relativePath: { eq: "pageImage.png" }) {
			publicURL
		}
		site {
			siteMetadata {
				defaultTitle: title
				defaultDescription: description
				siteUrl
			}
		}
	}
`;

export default SEO;
