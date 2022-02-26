const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require('path');
const fs = require('fs-extra');

exports.onCreateNode = ({ node, actions, getNode }) => {
	const { createNodeField } = actions;
	if (node.internal.type === `Mdx`) {
		const value = createFilePath({ node, getNode });
		createNodeField({
			name: `slug`,
			node,
			value,
		});
	}
};

exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions;
	const blogTemplate = path.resolve('./src/templates/blog-post.tsx');
	const res = await graphql(`
		{
			allMdx(sort: { order: DESC, fields: [frontmatter___date] }) {
				edges {
					node {
						fields {
							slug
						}
						frontmatter {
							title
						}
					}
					previous {
						fields {
							slug
						}
						frontmatter {
							title
						}
					}
					next {
						fields {
							slug
						}
						frontmatter {
							title
						}
					}
				}
			}
		}
	`);
	const posts = res.data.allMdx.edges;
	posts.forEach(({ node, next, previous }) => {
		createPage({
			component: blogTemplate,
			path: `/posts${node.fields.slug}`,
			context: {
				slug: node.fields.slug,
				previous: next,
				next: previous,
			},
		});
	});
};

exports.onPostBuild = () => {
	fs.copySync(path.join(__dirname, '/src/locales'), path.join(__dirname, '/public/locales'));
};
