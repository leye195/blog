import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import CategoryList from 'components/posts/CategoryList';

const props = {
	categories: ['all', 'dev'],
};

describe('<CategoryList/>', () => {
	it('should be render', () => {
		const { container, getByText } = render(<CategoryList {...props} />);

		const categories = container.getElementsByClassName('category')[0];

		expect(categories).toBeInTheDocument();
		expect(categories.childElementCount).toEqual(props.categories.length);
		expect(getByText('all')).toBeInTheDocument();
		expect(getByText('dev')).toBeInTheDocument();
	});

	it('should have correct link on category', () => {
		const { getByText } = render(<CategoryList {...props} />);
		const all = getByText('all');
		const dev = getByText('dev');

		expect(all.getAttribute('href')).toEqual('?category=all');
		expect(dev.getAttribute('href')).toEqual('?category=dev');
	});

	it('should add drag-scroll classname on mouse move', () => {
		const { container } = render(<CategoryList {...props} />);
		const categoryList = container.getElementsByClassName('category')[0];

		fireEvent.mouseDown(categoryList);
		expect(categoryList).toHaveClass('drag-scroll');

		fireEvent.mouseUp(categoryList);
		expect(categoryList).not.toHaveClass('drag-scroll');
	});
});
