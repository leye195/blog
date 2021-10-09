module.exports = {
	siteMetadata: {
		title: 'Dan DevLog',
		siteUrl: 'https://dantechblog.gatsbyjs.io',
	},
	plugins: [
		'gatsby-plugin-typescript',
		'gatsby-plugin-emotion',
		'gatsby-plugin-gatsby-cloud',
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-image',
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		'gatsby-plugin-resolve-src',
		'gatsby-plugin-advanced-sitemap',
		{
			resolve: `gatsby-plugin-feed`,
			options: {
				query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
				feeds: [
					{
						serialize: ({ query: { site, allMdx } }) => {
							return allMdx.edges.map(edge => {
								return Object.assign({}, edge.node.frontmatter, {
									description: edge.node.excerpt,
									date: edge.node.frontmatter.date,
									url: site.siteMetadata.siteUrl + `/posts/${edge.node.slug}`,
									guid: site.siteMetadata.siteUrl + `/posts/${edge.node.slug}`,
									custom_elements: [{ 'content:encoded': edge.node.html }],
								});
							});
						},
						query: `
              {
                allMdx(
                  sort: { fields: [frontmatter___date], order: DESC }
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      slug
                      frontmatter {
                        title
                        date
                      }
                    }
                  }
                }
              }
            `,
						output: '/rss.xml',
					},
				],
			},
		},
		{
			resolve: 'gatsby-plugin-gtag',
			options: {
				trackingId: process.env.GA_ID, // 측정 ID
				head: false, // head에 tracking script를 넣고 싶다면 true로 변경
				anonymize: true,
			},
		},
		{
			resolve: 'gatsby-plugin-mdx',
			options: {
				extentions: ['.md', '.mdx'],
				gatsbyRemarkPlugins: [
					{
						resolve: `gatsby-remark-highlight-code`,
						options: {
							terminal: 'carbon',
							theme: 'vscode',
						},
					},
					{
						resolve: 'gatsby-remark-images',
						options: {
							maxWidth: 1200,
						},
					},
				],
			},
		},
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				name: 'dan.dev-log',
				short_name: 'dan.dev-log',
				start_url: '/',
				background_color: '#7886b7',
				icon: 'src/images/logo.svg',
				display: `standalone`,
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'pages',
				path: `${__dirname}/src/pages`,
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: `${__dirname}/src/images`,
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'posts',
				path: `${__dirname}/src/posts`,
			},
		},
		{
			resolve: 'gatsby-plugin-google-fonts',
			options: {
				fonts: ['roboto mono', `Noto Sans KR\:400,400i,700,700i`],
				display: 'swap',
			},
		},
		{
			resolve: 'gatsby-plugin-robots-txt',
			host: 'https://dantechblog.gatsbyjs.io/',
			sitemap: 'https://dantechblog.gatsbyjs.io/sitemap.xml',
			policy: [{ userAgent: '*', allow: '/' }],
		},
		{
			resolve: `gatsby-plugin-canonical-urls`,
			options: {
				siteUrl: `https://dantechblog.gatsbyjs.io/`,
				stripQueryString: true,
			},
		},
	],
};
