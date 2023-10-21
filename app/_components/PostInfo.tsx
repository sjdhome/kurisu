import { PostMetadata } from "../_types/PostMetadata";

export default function PostInfo({
  post,
  className,
}: {
  post: PostMetadata;
  className?: string;
}) {
  const created = new Date(post.created);
  const edited = new Date(post.edited);
  return (
    <div className={`rounded-xl bg-skk-gray dark:bg-skk-dark px-4 py-2 border border-solid border-skk-deep-gray dark:border-skk-deep-gray-dark ${className}`}>
      <p>作者：{post.author}</p>
      <p>标签：{post.tags.join("、")}</p>
      <p>创作日期：{created.toLocaleDateString("zh-CN")}</p>
      <p>编辑日期：{edited.toLocaleDateString("zh-CN")}</p>
			<p>许可协议：<a href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh">CC BY-NC-SA 4.0</a></p>
			<p>转载或引用本文时请遵守许可协议，注明出处、不得用于商业用途！</p>
    </div>
  );
}
