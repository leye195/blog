export type allMdx = {
	nodes?: mdxNodeType[];
	group?: mdxGroupType[];
};

export type mdxNodeType = {
	frontmatter: postType;
	body?: any;
	id: string;
};

export type groupType = {
	tag?: string;
	totalCount?: number;
};

export type mdxGroupType = {
	group: groupType[];
};

export type postType = {
	title: string;
	date: string;
	slug: string;
	tags: string[];
	path: string;
};
