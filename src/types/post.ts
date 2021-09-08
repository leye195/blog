export type allMdx = {
  nodes?: mdxNodeType[];
  group?: mdxGroupType[];
};

export type mdxNodeType = {
  frontmatter: postType;
  body?: any;
  id: string;
};

export type mdxGroupType = {
  group: [
    {
      tag: string;
      totalCount: number;
    }
  ];
};

export type postType = {
  title: string;
  date: string;
  slug: string;
  tags: string[];
  path: string;
};
