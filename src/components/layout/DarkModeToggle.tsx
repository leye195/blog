import React, { useState, useEffect, useMemo } from 'react';
import Toggle from 'react-toggle';
import { css } from '@emotion/react';
import { useMediaQuery } from 'react-responsive';
import { saveTheme } from 'libs';

const darkMode = css`
	.react-toggle-track-check,
	.react-toggle-track-x {
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 0.8rem;
		font-weight: bold;
		color: white;
	}
`;

const DarkModeToggle = () => {
	const [isDark, setIsDark] = useState<boolean>(false);
	const systemPrefers = useMediaQuery({
		query: '(prefers-color-scheme: dark)',
	});

	useEffect(() => {
		const osTheme = systemPrefers ? 'dark' : 'light';
		const userTheme = localStorage.getItem('color-theme');
		const theme = userTheme || osTheme;

		if (theme === 'dark') {
			document.body.classList.add('dark');
			setIsDark(true);
		} else {
			document.body.classList.remove('dark');
			setIsDark(false);
		}
	}, [systemPrefers]);

	const handleTheme = () => {
		setIsDark(prev => {
			saveTheme(!prev);
			return !prev;
		});
	};

	return (
		<Toggle
			css={darkMode}
			checked={isDark}
			onChange={handleTheme}
			icons={{ checked: 'D', unchecked: 'L' }}
			aria-label="Dark mode toggle"
		/>
	);
};

export default DarkModeToggle;
