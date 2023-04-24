import clsx from "clsx";
import Link from "next/link";
import { Inter_Tight } from "next/font/google";
import { getSinglePost } from "@/lib/ghost";
import Header from "@/app/Header";

const interTight = Inter_Tight({ subsets: ["latin"], weight: "600" });

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getSinglePost(params.slug);
  if (!post)
    return {
      title: "Adnan's Web Site",
      description:
        "Adnan Chowdhury is a Software Developer in the United States.",
    };
  return {
    title: `${post.title} - Adnan's Web Site`,
    description: post.excerpt,
  };
}

export default function PostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="mb-4">
        <Header small />
      </div>

      <div>{children}</div>
    </>
  );
}
