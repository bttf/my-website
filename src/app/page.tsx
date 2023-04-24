import Link from "next/link";
import { Inter_Tight } from "next/font/google";
import { getPosts, PostOrPage } from "@/lib/ghost";
import clsx from "clsx";

const interTight = Inter_Tight({ subsets: ["latin"], weight: "600" });

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
        <Link className="hover:underline" href={`/${p.slug}`}>
          {p.title}
        </Link>
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
        <div className={clsx(interTight.className, ["text-4xl"])}>
          <Link href="/">
            <span className="text-white">Adnan Chowdhury</span>
          </Link>
        </div>
        <div>Sofware engineer, musician, content creator</div>
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
