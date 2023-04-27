import { PostOrPage } from "tryghost__content-api";

const URL = "https://ghost.adnan-chowdhury.com";
const KEY = "f334ffec641f6d75d5ce73f262";
const VERSION = "v5.0";

const _filterByTag = (posts: PostOrPage[], tagName: string) => {
  return posts.filter((p) => {
    const tags = p.tags ?? [];
    return tags.map((t) => t.name).includes(tagName);
  });
};

export async function getPosts() {
  const res = await fetch(
    `${URL}/ghost/api/content/posts/?key=${KEY}&limit=all&include=tags`,
    {
      headers: {
        "Accept-Version": VERSION,
      },
      next: {
        revalidate: 60,
      },
    }
  );

  const { posts } = await res.json();

  if (!posts || !posts.length) return {};

  const blogPosts = _filterByTag(posts, "#blog");
  const projectPosts = _filterByTag(posts, "#project");
  const musicPosts = _filterByTag(posts, "#music");
  const contentPosts = _filterByTag(posts, "#content");
  const videoGamePosts = _filterByTag(posts, "#videogames");

  return {
    blogPosts,
    projectPosts,
    musicPosts,
    contentPosts,
    videoGamePosts,
  };
}

export async function getAllPostSlugs() {
  const res = await fetch(
    `${URL}/ghost/api/content/posts/?key=${KEY}&limit=all`,
    {
      headers: {
        "Accept-Version": VERSION,
      },
      next: {
        revalidate: 60,
      },
    }
  );

  const { posts }: { posts: PostOrPage[] } = await res.json();

  if (!posts || !posts.length) return [];

  return posts.map((p) => p.slug);
}

export async function getSinglePost(postSlug: string) {
  const res = await fetch(
    `${URL}/ghost/api/content/posts/slug/${postSlug}/?key=${KEY}`,
    {
      headers: {
        "Accept-Version": VERSION,
      },
      next: {
        revalidate: 60,
      },
    }
  );
  const { posts }: { posts: PostOrPage[] } = await res.json();
  return posts[0];
}
