import { notFound } from "next/navigation";
import parse from "html-react-parser";
import { getDetailBlog, getBlogList } from "../../libs/microcms";
import { formatDate } from "@/utils/Date";

export async function generateStaticParams() {
 const { contents } = await getBlogList();

 const paths = contents.map((post) => {
  return {
   postId: post.id,
  };
 });

 return [...paths];
}

export default async function StaticDetailPage({
 params: { postId },
}: {
 params: { postId: string };
}) {
 const post = await getDetailBlog(postId);
 console.log(post.createdAt)

 if (!post) {
  notFound();
 }

 return (
  <div className="">
   <h1>{post.title}</h1>
   <h2>記事投稿日：{formatDate(post.createdAt)}</h2>
   <div className="prose max-w-[750px]" >{parse(post.content)}</div>
  </div>
 );
}