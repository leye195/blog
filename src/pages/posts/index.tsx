import React, { useState, useEffect } from 'react';
import { graphql, Link } from 'gatsby';
import { css } from '@emotion/react';
import qs from 'qs';
import Layout from 'components/layout/Layout';
import Common from 'components/common';
import CategoryList from 'components/posts/CategoryList';
import SEO from 'components/common/SEO';
import { categorizePosts } from 'libs/category';
import { media } from '../../styles/variables';
import { postType, groupType } from 'types/post';

const contentSection = css`
	padding: 1.5rem 1rem;
	margin: auto;

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

	& .posts {
		margin: 0 auto;
		max-width: 90%;

		& .post {
			width: 100%;
			padding: 0.5rem;
			color: black;
			border-bottom: 1px solid #f5f5f5;
			transition: all 0.2s linear;

			&:last-child {
				border-bottom: none;
			}

			&:hover {
				& .post-preview__title {
					color: #7886b7;
				}
			}
		}
	}

	& .tags {
		& .tag {
			cursor: pointer;
		}

		& .tag:not(:last-child) {
			margin-right: 0.5rem;
		}
	}
`;

const isBrowser = typeof window !== 'undefined';

const PostsPage = ({ data: { bg, allMdx } }: any) => {
	const [category, setCategory] = useState<string>('all');
	const [postList, setPostList] = useState<{ [key: string]: any }>({});
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const handleOpen = (isOpen: boolean) => () => {
		setIsOpen(isOpen);
	};

	useEffect(() => {
		if (isBrowser) {
			const location = window.location;
			const { category } = qs.parse(location.search.slice(1));
			const { nodes } = allMdx;
			setPostList(categorizePosts(nodes));
			setCategory(category ? (category?.toString()?.toLowerCase() as string) : 'all');
		}
	}, [isBrowser && window.location.search]);
	return (
		<Layout>
			<SEO title="Posts | Dan DevLog" />
			<Common.PageHead imgURL={bg.publicURL}>
				<Common.Column className="heading" alignItems="center" justifyContents="center">
					<h2>Posts</h2>
				</Common.Column>
			</Common.PageHead>
			<section css={contentSection}>
				<CategoryList
					categories={['All', ...allMdx.group.map((item: groupType) => item['tag'])]}
					isOpen={isOpen}
					handleOpen={handleOpen}
				/>
				<Common.Column className="posts">
					{postList[category as string]?.map(({ slug, title, tags, date }: postType, idx: number) => (
						<Link className="post" key={idx} to={`/posts/${slug}`}>
							<Common.Post title={title} tags={tags} date={date} />
						</Link>
					))}
				</Common.Column>
			</section>
		</Layout>
	);
};

export const query = graphql`
	query {
		bg: file(relativePath: { eq: "posts-bg.jpg" }) {
			publicURL
		}
		allMdx(sort: { fields: frontmatter___date, order: DESC }) {
			nodes {
				frontmatter {
					date(formatString: "MMMM D, YYYY")
					slug
					title
					tags
				}
				id
			}
			group(field: frontmatter___tags) {
				tag: fieldValue
			}
		}
	}
`;

export default PostsPage;
