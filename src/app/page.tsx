import Link from "next/link";
import { getPosts } from "@/lib/ghost";
import { PostOrPage } from "tryghost__content-api";
import clsx from "clsx";
import Header from "@/app/Header";

const PostsList = ({
  posts,
  title,
  rightAlign,
}: {
  posts: PostOrPage[];
  title: string;
  rightAlign?: boolean;
}) => (
  <>
    <div
      className={clsx("text-xl", "font-medium", {
        "text-right": rightAlign,
      })}
    >
      {title}
    </div>
    <hr
      className={clsx("w-1/2", {
        "ml-auto": rightAlign,
      })}
    />
    {posts.map((p, i) => (
      <li
        key={i}
        className={clsx("list-none", "text-md", "my-2", "last:mb-0", {
          "text-right": rightAlign,
        })}
      >
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
    videoGamePosts = [],
  } = await getPosts();

  return (
    <>
      <div className="mb-4">
        <Header />
      </div>

      <div className="mb-4">
        <PostsList title="Blog posts" posts={blogPosts} />
      </div>

      <div className="mb-4">
        <PostsList title="Professional Accomplishments" posts={projectPosts} />
      </div>

      <div className="mb-4">
        <PostsList title="Video Game Projects" posts={videoGamePosts} />
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
