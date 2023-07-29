import { ComponentProps } from 'react';

const Section = ({ children, className }: ComponentProps<'section'>) => {
	return <section className={className}>{children}</section>;
};

export default Section;
