import React from 'react';
import * as Gatsby from 'gatsby';
import { render } from '@testing-library/react';
import Home from 'pages/index';

const useStaticQuery = jest.spyOn(Gatsby, 'useStaticQuery');
useStaticQuery.mockImplementation(() => ({
	logo: {
		publicURL: '',
	},
	img: {
		publicURL: '',
	},
	site: {
		siteMetadata: {
			defaultTitle: 'title',
			defaultDescription: 'defaultTitle',
			siteUrl: 'siteURL',
		},
	},
}));

const data = {
	allMdx: {
		nodes: [
			{
				frontmatter: {
					title: 'title',
					slug: 'slug',
					tags: ['1', '2'],
					data: 'date',
				},
				id: 'id',
			},
		],
	},
	avatar: {
		publicURL: 'imageURL',
	},
};

describe('Home Page', () => {
	const renderPage = () => render(<Home data={data} />);
	it('should be render', () => {
		const { container, getByText } = renderPage();

		const title = getByText('Dan.Dev.Log');
		const subTitle = getByText('Frontend Developer');

		const posts = container.querySelector('.posts');

		expect(container).toBeInTheDocument();
		expect(title).toBeInTheDocument();
		expect(subTitle).toBeInTheDocument();
		expect(posts?.childNodes.length).toBeGreaterThanOrEqual(1);
	});
});
