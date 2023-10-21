import Link from "next/link";
import { PostMetadata } from "../_types/PostMetadata";
import Block from "./Block";

export default function PostCard({ post }: { post: PostMetadata }) {
  const created = new Date(post.created);
  const edited = new Date(post.edited);
  return (
    <Block border={true} className="dark:bg-skk-dark">
      <Link href={`/blog/post/${post.id}`} className="text-inherit">
        <h1 className="mt-0 mb-2 text-3xl">{post.title}</h1>
      </Link>
      <small>
        {created.toLocaleDateString("zh-CN")}
        {post.created !== post.edited
          ? ` · ${edited.toLocaleDateString("zh-CN")}`
          : ""}
      </small>
      <p className="mb-0 mt-4">{post.description}</p>
    </Block>
  );
}
