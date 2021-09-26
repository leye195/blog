import React from "react";
import { Helmet } from "react-helmet";
import { graphql, useStaticQuery } from "gatsby";

type Props = {
  title?: string;
  description?: string;
  article?: boolean;
};

const SEO = ({ title, description, article = false }: Props) => {
  const { site } = useStaticQuery(query);
  const { defaultTitle, siteUrl } = site.siteMetadata;

  return (
    <Helmet title={title || defaultTitle}>
      <meta
        name="google-site-verification"
        content="-VbHu6wFO57CBz4OA2s8BwT8CvLhOQB0Bo4-J1wL64s"
      />
      {article && <meta property="og:type" content="article" />}
      <meta property="og:title" content={title || defaultTitle} />
      <meta property="twitter:title" content={title || defaultTitle} />
      {description && (
        <>
          <meta name="description" content={description} />
          <meta property="og:description" content={description} />
          <meta property="twitter:description" content={description} />
        </>
      )}
    </Helmet>
  );
};

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
        siteUrl
      }
    }
  }
`;

export default SEO;
