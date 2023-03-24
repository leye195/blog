import React from 'react';
import { graphql, Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { css } from '@emotion/react';
import Layout from 'components/layout/Layout';
import Common from 'components/common';
import Utterances from 'components/comment/Utterances';
import { Colors, media, spacing } from 'styles/variables';
import SEO from 'components/common/SEO';

const containerStyle = css`
	margin: 0 auto;
`;

const contentsWrapper = css`
	margin: 0 auto;
	padding: ${spacing.xxxl} ${spacing.m};
	max-width: 50rem;
	width: auto;

	${media.sm} {
		font-size: 0.85rem;
	}

	& .post-date {
		margin-bottom: ${spacing.m};
		width: 100%;
		font-size: 0.85rem;
		font-weight: 500;
		text-align: end;
		color: ${Colors.gray};
	}
`;

const postContainer = css`
	width: 100%;

	code {
		font-weight: 600;
	}
`;

const postLink = css`
	display: flex;
	align-items: center;
	padding: 0.25rem ${spacing.xs};

	${media.smDown} {
		font-size: 0.85rem;
	}

	&.next,
	&.prev {
		& > p {
			word-break: break-all;
		}

		& > svg {
			font-size: 1.5rem;
		}

		& .next-icon {
			margin-left: ${spacing.xs};
		}

		& .prev-icon {
			margin-right: ${spacing.xs};
		}
	}
`;

const BlogPost = ({ data: { mdx }, pageContext: { next, previous } }: any) => {
	return (
		<Layout>
			<SEO title={`${mdx.frontmatter.title} | Dan DevLog`} description={mdx.excerpt} article />
			<Common.Container css={containerStyle}>
				<Common.Column css={contentsWrapper}>
					<Common.Column className="top-section">
						<h1>{mdx.frontmatter.title}</h1>
						<p className="post-date">{mdx.frontmatter.date}</p>
					</Common.Column>
					<Common.Container css={postContainer}>
						<MDXRenderer>{mdx.body}</MDXRenderer>
					</Common.Container>
					<hr />
					<Common.Row justifyContents="space-between">
						<Common.Row alignItems="center" justifyContents="flex-start">
							{previous && (
								<Link className="prev" css={postLink} to={`/posts${previous.fields.slug}`}>
									<MdChevronLeft className="prev-icon" />
									<p>{previous.frontmatter.title}</p>
								</Link>
							)}
						</Common.Row>
						<Common.Row alignItems="center" justifyContents="flex-end">
							{next && (
								<Link className="next" css={postLink} to={`/posts${next.fields.slug}`}>
									<p>{next.frontmatter.title}</p>
									<MdChevronRight className="next-icon" />
								</Link>
							)}
						</Common.Row>
					</Common.Row>
					<hr />
					<Utterances repo="leye195/blog" theme="github-light" />
				</Common.Column>
			</Common.Container>
		</Layout>
	);
};

export const query = graphql`
	query getPost($slug: String) {
		mdx(fields: { slug: { eq: $slug } }) {
			frontmatter {
				title
				date(formatString: "MMMM D, YYYY")
			}
			body
			excerpt(truncate: true)
		}
	}
`;

export default BlogPost;
