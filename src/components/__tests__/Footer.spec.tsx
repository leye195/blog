import React from 'react';
import { render } from '@testing-library/react';
import Footer from 'components/layout/Footer';

describe('<Footer/>', () => {
	it('should be render', () => {
		const { container } = render(<Footer />);

		const gitHub = container.getElementsByClassName('github')[0];
		const copyRight = container.getElementsByClassName('copyright')[0];

		expect(gitHub).toBeInTheDocument();
		expect(copyRight).toBeInTheDocument();
	});
});
