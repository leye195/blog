import React from 'react';
import { render } from '@testing-library/react';
import Common from 'components/common';

const props = {
	alignItems: 'flex-start',
	justifyContents: 'center',
	className: 'column',
};

describe('<Column/>', () => {
	it('should be render', () => {
		const { container, getByText } = render(
			<Common.Column {...props}>
				<p>column test</p>
			</Common.Column>,
		);

		expect(container.getElementsByClassName(props.className)[0]).toBeInTheDocument();
		expect(getByText('column test')).toBeInTheDocument();
	});
});
