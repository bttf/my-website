import GhostContentAPI, { PostOrPage } from "@tryghost/content-api";

const api = new GhostContentAPI({
  url: "http://137.184.70.114",
  key: "f334ffec641f6d75d5ce73f262",
  version: "v5.0",
});

const _filterByTag = (posts: PostOrPage[], tagName: string) => {
  return posts.filter((p) => {
    const tags = p.tags ?? [];
    return tags.map((t) => t.name).includes(tagName);
  });
};

export async function getPosts() {
  const posts = await api.posts
    .browse({
      limit: "all",
      include: "tags",
    })
    .catch((err) => {
      console.error(err);
    });

  if (!posts || !posts.length) return {};

  const blogPosts = _filterByTag(posts, "#blog");
  const projectPosts = _filterByTag(posts, "#project");
  const musicPosts = _filterByTag(posts, "#music");
  const contentPosts = _filterByTag(posts, "#content");

  return {
    blogPosts,
    projectPosts,
    musicPosts,
    contentPosts,
  };
}

export async function getAllPostSlugs() {
  const posts = await api.posts
    .browse({
      limit: "all",
    })
    .catch((err) => {
      console.error(err);
    });

  if (!posts || !posts.length) return [];

  return posts.map((p) => p.slug);
}

export async function getSinglePost(postSlug: string) {
  return await api.posts
    .read({
      slug: postSlug,
    })
    .catch((err) => {
      console.error(err);
    });
}

export * from "@tryghost/content-api";
