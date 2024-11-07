import BlogCard from "@/components/BlogCard";
import Profile from "@/components/Profile";
import { getBlogList } from "@/libs/microcms";

export default async function Home() {
  const { contents } = await getBlogList();

  if (!contents || contents.length === 0) {
    return <h1>No contents</h1>;
  }

  return (
    <div className="flex items-start mt-8 justify-between">
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
      <div className="min-w-[300px] sticky top-10">
        <Profile />
      </div>
    </div>
  );
}
