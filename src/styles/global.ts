import { css } from '@emotion/react';
import emotionNormalize from 'emotion-normalize';
import { spacing } from './variables';

const darkTheme = css`
	body {
		&.dark {
			background-color: #282c35;

			h1,
			h2,
			h3,
			h4,
			h5,
			p,
			li,
			td,
			tr {
				color: white;
			}

			a svg,
			a p {
				color: white;
			}

			.menu {
				& > a {
					color: white !important;
				}
			}

			.category {
				border-color: #383636;
				border-style: solid;
				border-width: 1px 6px;
				background-color: #282c35;

				& > li {
					border: 1px solid #383636;
					background-color: #33353a;

					& a {
						color: white;
					}
				}
			}

			.skills {
				color: white;
			}

			.github {
				& > svg {
					color: white;
				}
			}
		}
	}
`;

export default css`
	${emotionNormalize}
	${darkTheme}
	html,
	body {
		padding: 0;
		margin: 0;
		min-height: 100%;
		box-sizing: border-box;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
			'Helvetica Neue', sans-serif;
	}

	a {
		color: #7886b7;
	}

	a,
	a:hover {
		text-decoration: none;
	}

	p {
		margin: 0;
		padding: 0;
	}

	ul,
	li,
	ol {
		padding: 0;
		margin: 0;
		list-style: none;
	}

	img {
		width: 100%;
	}

	button {
		display: inline-block;
		margin: 0;
		padding: 0;
		border: none;
		cursor: pointer;
		background-color: unset;
		-webkit-appearance: none;
		-moz-appearance: none;

		&:focus {
			outline: 0;
		}
		&:disabled {
			cursor: default;
		}
	}

	hr {
		margin: ${spacing.m} 0;
		width: 100%;
		border: 0;
		border-top: 1px solid rgba(0, 0, 0, 0.1);
	}

	#root {
		min-height: 100vh;
	}

	deckgo-highlight-code {
		width: 100%;
		box-shadow: none;
	}
`;
