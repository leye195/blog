import React, { useState, useCallback } from 'react';
import { css } from '@emotion/react';
import { graphql, Link, useStaticQuery } from 'gatsby';

import { saveTheme } from 'libs';
import { media } from 'styles/variables';

import Common from 'components/common';
import DarkModeToggle from 'components/layout/DarkModeToggle';

const headerStyle = css`
	min-height: auto;

	& .inner-container {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin: auto;
		padding: 0 1rem;
		height: 100%;
		max-width: 310px;

		& .logo-container {
			display: flex;
			padding: 0.5rem 0;
		}

		${media.smDown} {
			flex-wrap: wrap;
			padding: 0;
			height: auto;
			max-width: 95%;

			& .logo-container {
				justify-content: center;
				width: 100%;
			}
		}

		${media.sm} {
			max-width: 550px;
		}
		${media.md} {
			max-width: 768px;
		}
	}

	& .menu {
		display: flex;
		justify-content: center;
		height: 2rem;
		width: 100%;
		position: relative;
		padding-top: 0.5rem;
		padding-bottom: 0.5rem;
		border-top: 1px solid #f5f3f3;

		& > a {
			display: flex;
			align-items: center;
			position: relative;
			color: black;
			font-size: 1rem;
			font-weight: bold;

			&::after {
				content: '';
				position: absolute;
				height: 0.2rem;
				width: 100%;
				left: 0;
				bottom: 0;
				opacity: 0;
				transition: all 0.09s linear;
			}

			&:hover {
				&::after {
					background-color: #7886b7;
					opacity: 1;
				}
			}
		}

		&__about,
		&__posts {
			margin-right: 1.5rem;
		}

		& .current-link {
			&::after {
				background-color: #7886b7;
				opacity: 1;
			}
		}

		& .theme {
			position: absolute;
			right: 0;
			margin-right: 1rem;
			margin-top: 0.25rem;
		}
	}
`;

const Header = () => {
	const [isDark, setIsDark] = useState<boolean>(false);

	const data = useStaticQuery(graphql`
		query {
			logo: file(relativePath: { eq: "logo.png" }) {
				publicURL
			}
		}
	`);

	const handleIsDark = useCallback((isDark: boolean) => {
		setIsDark(isDark);
	}, []);

	const handleTheme = useCallback(() => {
		setIsDark(prev => {
			saveTheme(!prev);
			return !prev;
		});
	}, []);

	return (
		<header css={headerStyle}>
			<Common.Column>
				<div className="inner-container">
					<Link className="logo-container" to="/">
						<img className="logo" src={data.logo.publicURL} alt="dan.dev.log" />
					</Link>
				</div>
				<div className="menu">
					<Link className="menu__about" to="/me" activeClassName="current-link">
						Me
					</Link>
					<Link className="menu__posts" to="/posts" activeClassName="current-link">
						Posts
					</Link>
					<Link className="menu__tags" to="/tags" activeClassName="current-link">
						Tags
					</Link>
					<div className="theme">
						<DarkModeToggle isDark={isDark} handleTheme={handleTheme} handleIsDark={handleIsDark} />
					</div>
				</div>
			</Common.Column>
		</header>
	);
};

export default Header;
