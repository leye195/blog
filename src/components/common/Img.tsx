import React from 'react';
import { css } from '@emotion/react';

type imageType = {
	src: string;
	alt: string;
	className?: string;
};

const image = css`
	width: 100%;
	height: 100%;
`;

const Img = ({ className, src, alt }: imageType) => {
	return <img className={className} css={image} src={src} alt={alt} />;
};

export default Img;
