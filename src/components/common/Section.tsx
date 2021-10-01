import React from 'react';

type Props = {
	className?: string;
};

const Section: React.FC<Props> = ({ children, className }) => {
	return <section className={className}>{children}</section>;
};

export default Section;
