import React from 'react';
import { render } from '@testing-library/react';
import Card from 'components/me/Card';

const props = {
	title: 'card title',
	period: 'from - now',
	position: 'position',
	projects: 'projects',
	projectDescription: [{ title: 'title', stack: 'stack', describe: [{ main: '' }] }],
};

describe('<Card/>', () => {
	it('should be render', () => {
		const { getByText } = render(<Card {...props} />);

		expect(getByText(props.title)).toBeInTheDocument();
		expect(getByText(props.period)).toBeInTheDocument();
		expect(getByText(props.position)).toBeInTheDocument();
		expect(getByText(props.projects)).toBeInTheDocument();
	});
});
