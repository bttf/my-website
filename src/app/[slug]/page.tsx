import Link from "next/link";
import { getAllPostSlugs, getSinglePost } from "../lib/ghost";
import styles from "./styles.module.css";

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
      <div className="font-medium text-sm -mt-2 mb-2">
        <Link href="/">&lt;&lt; Home</Link>
      </div>
      <div
        className={styles.body}
        dangerouslySetInnerHTML={{ __html: post.html ?? "" }}
      />
    </>
  );
}
