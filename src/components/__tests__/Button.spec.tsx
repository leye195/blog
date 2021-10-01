import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Common from 'components/common';

describe('<Button/>', () => {
	it('should be render', () => {
		const handleClick = jest.fn();
		const { getByText } = render(
			<Common.Button onClick={handleClick} type="button">
				button
			</Common.Button>,
		);

		const button = getByText('button');
		expect(button).toBeInTheDocument();

		userEvent.click(button);
		expect(handleClick).toBeCalledTimes(1);
	});
});
