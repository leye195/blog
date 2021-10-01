import React from 'react';
import { render } from '@testing-library/react';
import Common from 'components/common';

const props = {
	className: 'container',
};

describe('<Container/>', () => {
	it('should be render', () => {
		const { container, getByText } = render(
			<Common.Container {...props}>
				<p>container test</p>
			</Common.Container>,
		);

		expect(container.getElementsByClassName(props.className)[0]).toBeInTheDocument();
		expect(getByText('container test')).toBeInTheDocument();
	});
});
