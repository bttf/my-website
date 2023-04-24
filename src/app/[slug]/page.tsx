import { format } from "date-fns";
import Link from "next/link";
import { getAllPostSlugs, getSinglePost } from "@/lib/ghost";

export async function generateStaticParams() {
  return await getAllPostSlugs();
}

export default async function Post({ params }: { params: { slug: string } }) {
  const post = await getSinglePost(params.slug);
  if (!post) {
    return "Post was not found";
  }
  return (
    <>
      <div>
        <div className="text-xs pb-1">
          <Link href="/">← Home</Link>
        </div>
        <div className="text-5xl font-semibold mb-4">{post.title}</div>
        {post.published_at && (
          <div className="mb-4 text-sm">
            {format(new Date(post.published_at), "PPP")}
          </div>
        )}
      </div>

      <div
        className="page-body"
        dangerouslySetInnerHTML={{ __html: post.html ?? "" }}
      />
    </>
  );
}
