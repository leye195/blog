import React from 'react';
import { css } from '@emotion/react';

import { flexMixin } from 'styles/mixin';
import { media } from 'styles/variables';

import Common from 'components/common';

type Props = {
	title: string;
	tags: string[];
	date: string;
};

const postStyle = css`
	&.post-preview {
		${flexMixin({ direction: 'column' })}
		margin-bottom: 0.5rem;
		width: 100%;

		& .post-preview__title {
			font-size: 1.2rem;
			font-weight: 400;

			${media.mdDown} {
				font-size: 1rem;
			}
		}

		& .post-preview__date {
			font-size: 1rem;
			color: #868e96;
			white-space: pre;

			${media.mdDown} {
				font-size: 0.8rem;
			}
		}
	}
`;

const Post = ({ title, tags, date }: Props) => {
	return (
		<article css={postStyle} className="post-preview">
			<h2 className="post-preview__title">{title}</h2>
			<Common.Row alignItems="center" justifyContents="space-between">
				<Common.Row className="tags">
					{tags.map(tag => (
						<Common.Tag key={tag} className="tag" text={tag} />
					))}
				</Common.Row>
				<p className="post-preview__date">{date}</p>
			</Common.Row>
		</article>
	);
};

export default Post;
