import { useEffect, useState } from 'react';

const useScroll = () => {
	const [scrollY, setScrollY] = useState(0);

	const handleScroll = () => {
		const { scrollY } = window;
		setScrollY(scrollY);
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return { scrollY };
};

export default useScroll;
