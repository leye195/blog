export const categorizePosts = (posts: any) => {
  return posts.reduce((posts: any, { frontmatter: post }: any) => {
    const tags = post.tags.split(",");
    tags.forEach((tag: string) => {
      const postTag = tag.toLowerCase().trim();
      if (posts[postTag]) posts[postTag] = [...posts[postTag], { ...post }];
      else posts[postTag] = [{ ...post }];
    });

    if (posts["all"]) posts["all"] = [...posts["all"], { ...post }];
    else posts["all"] = [{ ...post }];

    return posts;
  }, {});
};
