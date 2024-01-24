import { PostMetadata } from "../_types/PostMetadata";
import Block from "./Block";

export default function PostCard({ post }: { post: PostMetadata }) {
  const created = new Date(post.created).toLocaleDateString("zh-CN");
  const edited = new Date(post.edited).toLocaleDateString("zh-CN");
  return (
    <Block border={true} className="dark:bg-skk-dark">
      <h1 className="mt-0 mb-2 text-2xl lg:text-3xl">
        <a
          href={`/blog/post/${post.id}`}
          className="text-inherit no-underline hover:underline"
        >
          {post.title}
        </a>
      </h1>
      <small>{created}</small>
      <p className="mb-0 mt-4">{post.description}</p>
    </Block>
  );
}
