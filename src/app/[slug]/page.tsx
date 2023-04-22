import Link from "next/link";
import { getAllPostSlugs, getSinglePost } from "../lib/ghost";
import { format } from "date-fns";

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
        <div className="text-5xl font-semibold mb-4">{post.title}</div>
        {post.created_at && (
          <div className="mb-4 text-sm">
            {format(new Date(post.created_at), "PPP")}
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
