import { css } from '@emotion/react';
import emotionNormalize from 'emotion-normalize';

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
		margin-top: 1rem;
		margin-bottom: 1rem;
		width: 100%;
		border: 0;
		border-top: 1px solid rgba(0, 0, 0, 0.1);
	}

	#root {
		min-height: 100vh;
	}

	.deckgo-highlight-code {
		width: 100%;
	}
`;
