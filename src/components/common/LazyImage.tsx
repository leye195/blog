import React, { useState, useRef, useEffect } from 'react';
import Img from './Img';

type imageType = {
	src: string;
	alt: string;
	className?: string;
	loading?: 'eager' | 'lazy' | undefined;
};

const LazyImage = (props: imageType) => {
	const [isLoaded, setIsLoaded] = useState(false);
	const imgRef = useRef<HTMLImageElement>(null);

	useEffect(() => {
		if (imgRef.current && imgRef.current.complete) {
			setIsLoaded(true);
		}
	}, []);

	return (
		<Img
			{...props}
			ref={imgRef}
			className={`${props.className} source ${isLoaded ? 'loaded' : ''}`}
			onLoad={() => setIsLoaded(true)}
			loading={props.loading}
		/>
	);
};

export default LazyImage;
