export const categorizePosts = (posts: any) => {
	return posts.reduce((posts: any, { frontmatter: post }: any) => {
		const { tags } = post;
		tags.forEach((tag: string) => {
			const postTag = tag.toLowerCase();
			if (posts[postTag]) posts[postTag] = [...posts[postTag], { ...post }];
			else posts[postTag] = [{ ...post }];
		});

		if (posts['all']) posts['all'] = [...posts['all'], { ...post }];
		else posts['all'] = [{ ...post }];

		return posts;
	}, {});
};

export const saveTheme = (isDark: boolean) => {
	if (isDark) {
		localStorage.setItem('color-theme', 'dark');
		document.body.classList.add('dark');
	} else {
		localStorage.setItem('color-theme', 'light');
		document.body.classList.remove('dark');
	}
};

export const classNames = (classList: string[]) => {
	return classList.join(' ');
};
