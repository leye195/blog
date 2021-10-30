import React from 'react';
import { css } from '@emotion/react';
import { media, Colors } from 'styles/variables';
import LazyImage from './LazyImage';

type Props = {
	children?: React.ReactNode;
	className?: string;
	imgURL: string;
};

const topSection = css`
	background-color: ${Colors.blue};
	position: relative;
	margin: 0 auto;
	height: 25rem;

	${media.sm} {
		max-width: 550px;
	}
	${media.md} {
		max-width: 700px;
	}
	${media.lg} {
		max-width: 950px;
	}
	${media.xl} {
		max-width: 1200px;
	}

	& .heading {
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		color: ${Colors.white};
		text-shadow: 0px 3px 14px ${Colors.black};

		& > h2 {
			margin: 0;
			font-size: 3rem;
			text-align: center;
			border-bottom: 0.25rem solid ${Colors.white};
		}

		& > span {
			font-size: 1.5rem;
			font-weight: 300;
		}

		& .avatar {
			height: 8.5rem;
			width: 8.5rem;
			margin-bottom: 1rem;

			& > img {
				background-color: ${Colors.white};
				border-radius: 50%;
			}
		}
	}
`;

const PageHead: React.FC<Props> = ({ className, imgURL, children }) => {
	return (
		<section className={className} css={topSection}>
			<LazyImage className="bg-image" src={imgURL} alt="" loading="lazy" />
			{children}
		</section>
	);
};

export default PageHead;
