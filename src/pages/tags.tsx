import React from 'react';
import { graphql, Link } from 'gatsby';
import { css } from '@emotion/react';

import { Colors, spacing } from 'styles/variables';
import type { mdxGroupType } from 'types/post';

import Layout from 'components/layout/Layout';
import Common from 'components/common';
import Tag from 'components/common/Tag';
import SEO from 'components/common/SEO';

type Props = {
	data: {
		allMdx: mdxGroupType;
	};
};

const tagsSection = css`
	max-width: 700px;
	min-height: 25rem;
	margin: ${spacing.xxxl} auto;
	padding: 0 1rem;

	& .tags {
		&__title {
			width: 100%;
			padding-bottom: 0.5rem;
			border-bottom: 1px solid #f5f3f3;
		}

		&__list {
			display: flex;
			flex-wrap: wrap;
			padding-top: 0.5rem;

			& > a {
				height: fit-content;
			}

			& .tag {
				transition: all 0.25s linear;

				&:hover {
					background-color: ${Colors.blue};
					color: ${Colors.white};
				}
			}

			& .empty__space {
				margin-right: ${spacing.m};
			}

			& .tag--wrapper {
				margin: ${spacing.xs} ${spacing.xs} 0 0;
			}
		}
	}
`;

const TagsPage = ({ data: { allMdx } }: Props) => {
	return (
		<Layout>
			<SEO title="Tags | Dan DevLog" />
			<section css={tagsSection}>
				<Common.Column className="tags">
					<h1 className="tags__title">Tags</h1>
					<div className="tags__list">
						{allMdx?.group.map(({ tag, totalCount }, idx) => (
							<div className="tag--wrapper" key={tag}>
								{idx !== 0 && <div className="empty__space" />}
								<Link to={`/posts?category=${tag}`}>
									<Tag className="tag" text={tag} count={totalCount} />
								</Link>
							</div>
						))}
					</div>
				</Common.Column>
			</section>
		</Layout>
	);
};

export const query = graphql`
	query {
		allMdx {
			group(field: frontmatter___tags) {
				tag: fieldValue
				totalCount
			}
		}
	}
`;

export default TagsPage;
