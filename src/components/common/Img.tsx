import React from 'react';
import { css } from '@emotion/react';

type imageType = {
	src: string;
	alt: string;
	className?: string;
	loading?: 'eager' | 'lazy' | undefined;
	onLoad?: React.ReactEventHandler<HTMLImageElement> | undefined;
};

const image = css`
	width: 100%;
	height: 100%;

	&.source {
		opacity: 0.2;
		transition: opacity 1200ms;
	}

	&.loaded {
		opacity: 1;
	}
`;

const Img = React.forwardRef<HTMLImageElement, imageType>(({ className, src, alt, loading, onLoad }, ref) => {
	return <img ref={ref} className={className} css={image} src={src} alt={alt} loading={loading} onLoad={onLoad} />;
});

export default Img;
