import type { PostMetadata } from "../_types/PostMetadata";
import { getAllPosts } from "../_utils/post";
import PostCard from "./PostCard";

export default async function PostList({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  let posts: PostMetadata[] = await getAllPosts();
  posts = posts.filter((post) => post.visible === true);
  if (searchParams !== undefined && searchParams.q !== undefined) {
    posts = posts.filter(
      (post) =>
        post.title
          .toLowerCase()
          .includes((searchParams.q as string).toLowerCase()) ||
        post.description
          .toLowerCase()
          .includes((searchParams.q as string).toLowerCase()),
    );
  }
  posts.sort((a: PostMetadata, b: PostMetadata) => {
    return b.created - a.created;
  });
  return posts.length === 0 ? (
    <p>没有找到相关文章。</p>
  ) : (
    posts.map((post) => <PostCard key={post.id} post={post} />)
  );
}
