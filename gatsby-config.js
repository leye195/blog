module.exports = {
  siteMetadata: {
    title: "Dan DevLog",
    siteUrl: "https://dantechblog.gatsbyjs.io",
  },
  plugins: [
    "gatsby-plugin-typescript",
    "gatsby-plugin-emotion",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-resolve-src",
    {
      resolve: "gatsby-plugin-gtag",
      options: {
        trackingId: `G-RXBYPBJS9M`, // 측정 ID
        head: false, // head에 tracking script를 넣고 싶다면 true로 변경
        anonymize: true,
      },
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extentions: [".md", ".mdx"],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-highlight-code`,
            options: {
              terminal: "carbon",
              theme: "vscode",
            },
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 1200,
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "dan.dev-log",
        short_name: "dan.dev-log",
        start_url: "/",
        background_color: "#7886b7",
        icon: "src/images/logo.svg",
        display: `standalone`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: ["roboto mono", `Noto Sans KR\:400,400i,700,700i`],
        display: "swap",
      },
    },
  ],
};
