import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import DarkModeToggle from 'components/layout/DarkModeToggle';

const handleTheme = jest.fn();
const handleIsDark = jest.fn();

describe('<Container/>', () => {
	it('should be render', () => {
		const { container } = render(<DarkModeToggle isDark handleTheme={handleTheme} handleIsDark={handleIsDark} />);

		expect(container.getElementsByClassName('react-toggle')[0]).toBeInTheDocument();
		expect(handleIsDark).toBeCalledTimes(1);
	});

	it('should toggle mode', () => {
		const { container } = render(<DarkModeToggle isDark handleTheme={handleTheme} handleIsDark={handleIsDark} />);
		const toggle = container.getElementsByClassName('react-toggle')[0];

		fireEvent.click(toggle);
		expect(handleTheme).toBeCalledTimes(1);
	});
});
