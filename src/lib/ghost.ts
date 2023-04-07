import GhostContentAPI from "@tryghost/content-api";

const api = new GhostContentAPI({
  url: "http://137.184.70.114",
  key: "f334ffec641f6d75d5ce73f262",
  version: "v5.0",
});

export async function getPosts() {
  return await api.posts
    .browse({
      limit: "all",
    })
    .catch((err) => {
      console.error(err);
    });
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
