import React from 'react';
import * as Gatsby from 'gatsby';
import { render } from '@testing-library/react';
import Header from 'components/layout/Header';

const useStaticQuery = jest.spyOn(Gatsby, 'useStaticQuery');
useStaticQuery.mockImplementation(() => ({
	logo: {
		publicURL: '',
	},
}));

describe('<Header/>', () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});

	it('should be render', () => {
		const { container } = render(<Header />);

		const logoContainer = container.getElementsByClassName('logo-container')[0];

		expect(logoContainer.childElementCount).toBe(1);
		expect(container.getElementsByClassName('menu')[0].childElementCount).toBe(3);
	});

	it('should have correct link on menu', () => {
		const { container } = render(<Header />);
		const me = container.getElementsByClassName('menu__about')[0];
		const posts = container.getElementsByClassName('menu__posts')[0];
		const tags = container.getElementsByClassName('menu__tags')[0];

		const meLink = me.getAttribute('href');
		const postsLink = posts.getAttribute('href');
		const tagsLink = tags.getAttribute('href');

		expect(meLink).toEqual('/me');
		expect(postsLink).toEqual('/posts');
		expect(tagsLink).toEqual('/tags');
	});
});
