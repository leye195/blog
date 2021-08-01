export type allMdx = {
  nodes: mdxNodeType[];
};

export type mdxNodeType = {
  frontmatter: postType;
  body?: any;
  id: string;
};

export type postType = {
  title: string;
  date: string;
  slug: string;
  tags: string;
};
