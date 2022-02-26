import React, { useEffect, useState } from 'react';
import { Global, css } from '@emotion/react';
import { MDXProvider } from '@mdx-js/react';
import { MdArrowUpward } from 'react-icons/md';
import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader';
import i18n from 'i18n';

import useScroll from 'hooks/useScroll';
import { classNames } from 'libs';

import Header from 'components/layout/Header';
import Footer from 'components/layout/Footer';
import Common from 'components/common';
import MDXDesign from 'components/mdx';
import global from 'styles/global';
import { flexMixin } from 'styles/mixin';
import { I18nextProvider } from 'react-i18next';

deckDeckGoHighlightElement();

const container = css`
	& .to-top {
		${flexMixin({
			direction: 'row',
			alignItems: 'center',
			justifyContents: 'center',
		})}
		padding: 1rem;
		position: fixed;
		bottom: 1rem;
		right: 1rem;
		border-radius: 50%;
		background-color: #7886b7;
		color: white;
		box-shadow: 0px 1px 6px 1px #00000078;
		cursor: pointer;
		opacity: 0;
		visibility: hidden;
		transition: all 0.25s;

		&.show {
			visibility: visible;
			opacity: 1;
		}
	}
`;

const Layout: React.FC = ({ children }) => {
	const { scrollY } = useScroll();
	const [isVisible, setIsVisible] = useState(false);

	const handleToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	useEffect(() => {
		if (scrollY > 100) setIsVisible(true);
		else setIsVisible(false);
	}, [scrollY]);

	return (
		<I18nextProvider i18n={i18n}>
			<Global styles={global} />
			<MDXProvider
				components={{
					p: props => <MDXDesign.Pragraph {...props} />,
					pre: props => <MDXDesign.Pre {...props} />,
					a: props => <MDXDesign.Anchor {...props} />,
					li: props => <MDXDesign.List {...props} />,
					ul: props => <MDXDesign.Ul {...props} />,
				}}
			>
				<div css={container}>
					<Header />
					{children}

					<Common.Button
						className={classNames(['to-top', isVisible ? 'show' : ''])}
						type="button"
						onClick={handleToTop}
					>
						<MdArrowUpward />
					</Common.Button>
				</div>
			</MDXProvider>
		</I18nextProvider>
	);
};

export default Layout;
