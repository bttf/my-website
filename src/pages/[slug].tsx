import { getSinglePost, getPosts } from "@/lib/ghost";
import { PostOrPage } from "@tryghost/content-api";
import { GetStaticPropsContext } from "next";

export async function getStaticPaths() {
  const posts = await getPosts();

  if (!posts) return {};

  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: false };
}

const stringParam = (value: string | string[] | undefined) =>
  Array.isArray(value) ? value.join("") : `${value ?? ""}`;

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const post = await getSinglePost(stringParam(params?.slug));

  return {
    props: { post },
  };
}
export default function Post({ post }: { post: PostOrPage }) {
  return (
    <div className="max-w-xl mx-auto">
      <h1 className="text-4xl mb-4">{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post?.html ?? "" }} />
    </div>
  );
}
