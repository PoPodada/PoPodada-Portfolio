"use server";

import BlogCard from "@/components/BlogCard";
import { getBlogList } from "@/libs/microcms";

export default async function Home() {
  const { contents } = await getBlogList();
  console.log(contents[0]);

  if (!contents || contents.length === 0) {
    return <h1>No contents</h1>;
  }

  return (
      <div className="grow flex flex-wrap max-w-[750px]">
        {contents.map((post) => {
          return (
            <BlogCard
              key={post.id}
              id={post.id}
              title={post.title}
              createdAt={post.createdAt}
              imgURL={post.eyecatch?.url}
            />
          );
        })}
      </div>
  );
}
