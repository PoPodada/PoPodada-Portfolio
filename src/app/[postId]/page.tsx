import { notFound } from "next/navigation";
import parse from "html-react-parser";
import { getDetailBlog, getBlogList } from "../../libs/microcms";

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

 const time = new Date().toLocaleString();

 if (!post) {
  notFound();
 }

 return (
  <div>
   <h1>{post.title}</h1>
   <h2>{time}</h2>
   <div>{parse(post.content)}</div>
  </div>
 );
}