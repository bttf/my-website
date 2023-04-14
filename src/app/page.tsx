import Link from "next/link";
import { getPosts, PostOrPage } from "./lib/ghost";

const PostsList = ({
  posts,
  title,
}: {
  posts: PostOrPage[];
  title: string;
}) => (
  <>
    <div className="text-xl font-medium">{title}</div>
    <hr />
    {posts.map((p, i) => (
      <li key={i} className="list-none text-md my-2 last:mb-0">
        <Link href={`/${p.slug}`}>{p.title}</Link>
      </li>
    ))}
  </>
);

export default async function Home() {
  const {
    blogPosts = [],
    projectPosts = [],
    musicPosts = [],
    contentPosts = [],
  } = await getPosts();
  return (
    <>
      <div className="mb-4">
        <PostsList title="Blog posts" posts={blogPosts} />
      </div>

      <div className="mb-4">
        <PostsList title="Projects" posts={projectPosts} />
      </div>

      <div className="mb-4">
        <PostsList title="Music recordings" posts={musicPosts} />
      </div>

      <div>
        <PostsList title="Content creations" posts={contentPosts} />
      </div>
    </>
  );
}
