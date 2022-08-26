import React, { useRef, useState } from 'react';
import { css } from '@emotion/react';
import { Link } from 'gatsby';
import { flexMixin } from 'styles/mixin';

type Props = {
	children?: React.ReactNode;
	categories: string[];
	isOpen?: boolean;
	handleOpen?: (isOpen: boolean) => () => void;
};

type posType = {
	top: number;
	left: number;
	x: number;
	y: number;
};

const categoryListStyle = css`
	${flexMixin({
		direction: 'column',
		alignItems: 'center',
	})}
	margin: 0.5rem auto;
	position: sticky;
	height: auto;

	& .category {
		${flexMixin({
			direction: 'row',
			alignItems: 'center',
		})}
		padding: 0 0.5rem;
		margin-bottom: 0.5rem;
		width: 100%;
		min-height: 66px;
		overflow: hidden;
		border-left: 5px solid rgba(0, 0, 0, 0.3);
		border-right: 5px solid rgba(0, 0, 0, 0.3);
		background-color: #e8e8e8;
		transition: all 0.25s linear;
		overflow: auto;
		cursor: grab;

		&.drag-scroll {
			user-select: none;
			cursor: grabbing;
		}

		&::-webkit-scrollbar {
			display: none;
		}

		& > li {
			padding: 0.5rem;
			margin: 0.5rem;
			border-radius: 10px;
			background-color: white;
			box-shadow: 0 1px 1px rgb(0 0 0 / 10%);
			white-space: pre;

			& > a {
				color: black;
			}
		}

		&.open {
			height: auto;
			transition: all 0.25s linear;
		}
	}

	& .more {
		${flexMixin({ direction: 'row' })}
		padding: 0.5rem;
		border: 1px solid #e3e3e3;
		border-radius: 10px;
		box-shadow: 0 1px 1px rgb(0 0 0 / 10%);
	}
`;

const CategoryList: React.FC<Props> = ({ categories }) => {
	const ref = useRef(null);
	const [pos, setPos] = useState<posType>({
		top: 0,
		left: 0,
		x: 0,
		y: 0,
	});
	const [isMouseDown, setIsMouseDown] = useState(false);

	const handleMouseDown = (e: React.MouseEvent) => {
		const { clientX, clientY } = e;
		if (ref && ref.current) {
			const ele = ref.current as any;
			const { scrollTop, scrollLeft } = ele;
			setPos({
				left: scrollLeft,
				top: scrollTop,
				x: clientX,
				y: clientY,
			});
			setIsMouseDown(true);
		}
	};

	const handleMouseMove = (e: React.MouseEvent) => {
		const dx = e.clientX - pos.x;
		const dy = e.clientY - pos.y;

		if (ref && ref.current && isMouseDown) {
			const ele = ref.current as any;

			ele.scrollTop = pos.top - dy;
			ele.scrollLeft = pos.left - dx;
		}
	};

	const handleMouseUp = (e: React.MouseEvent) => {
		setIsMouseDown(false);
	};

	return (
		<div css={categoryListStyle}>
			<ul
				ref={ref}
				className={`category ${isMouseDown ? 'drag-scroll' : ''}`}
				onMouseDown={handleMouseDown}
				onMouseMove={handleMouseMove}
				onMouseUp={handleMouseUp}
				onMouseLeave={handleMouseUp}
			>
				{categories.map((category: string) => (
					<li key={category}>
						<Link to={`?category=${category}`}>{category}</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default CategoryList;
