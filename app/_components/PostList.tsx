import type { PostMetadata } from "../_types/PostMetadata";
import PostCard from "./PostCard";

export default async function PostList({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  let posts: PostMetadata[] = await (
    await fetch("https://api.sjdhome.com/blog/post/")
  ).json();
  if (searchParams !== undefined && searchParams.q !== undefined) {
    posts = posts.filter((post) =>
      post.title
        .toLowerCase()
        .includes((searchParams.q as string).toLowerCase()),
    );
  }
  posts.sort((a, b) => {
    const aDate = new Date(a.created);
    const bDate = new Date(b.created);
    return bDate.getTime() - aDate.getTime();
  });
  return posts.length === 0 ? (
    <p>没有找到相关文章。</p>
  ) : (
    posts.map((post) => <PostCard key={post.id} post={post} />)
  );
}
