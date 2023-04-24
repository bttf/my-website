import { getSinglePost } from "@/lib/ghost";
import Header from "@/app/Header";

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
