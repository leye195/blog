import React from 'react';
import { render } from '@testing-library/react';
import Common from 'components/common';

const props = {
	info: [
		{
			title: 'title',
			link: 'https://naver.com',
		},
	],
};

describe('<Table/>', () => {
	it('should be render', () => {
		const { container } = render(<Common.Table {...props} />);

		const tbody = container.querySelector('tbody');
		expect(tbody?.childNodes.length).toEqual(props.info.length);
	});
});
