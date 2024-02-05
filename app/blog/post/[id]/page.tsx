import type { PostMetadata } from "@/app/_types/PostMetadata";
import Giscus from "@/app/_components/Giscus";
import { marked } from "marked";
import { getPost, getPostContent } from "@/app/_utils/post";
import { WEBSITE_DOMAIN } from "@/app/_utils/constants";
import PostInfo from "@/app/_components/PostInfo";

export async function generateMetadata({ params }: { params: { id: string } }) {
  const postMetadata: PostMetadata | null = await getPost(params.id);
  if (postMetadata === null) {
    return {
      title: "404 Not found - sjdhome blog",
      description: "404 Not found",
    };
  }
  return {
    title: `${postMetadata.title} - sjdhome blog`,
    description: postMetadata.description,
  };
}

export default async function Page({ params }: { params: { id: string } }) {
  const post = await getPost(params.id);
  const markdown = await getPostContent(params.id);
  if (post === null || markdown === null) {
    return <p>404 Not found</p>;
  }
  const html = await marked.parse(markdown, { async: true });
  return (
    <>
      <main dangerouslySetInnerHTML={{ __html: html }} />
      <PostInfo post={post} className="my-16" />
      {post.enableComment ? (
        <Giscus
          repo={`sjdhome/${WEBSITE_DOMAIN}`}
          repoId="R_kgDOKG2diQ"
          category="Announcements"
          categoryId="DIC_kwDOKG2dic4CYltw"
          mapping="pathname"
          strict="0"
          reactionsEnabled="1"
          emitMetadata="0"
          inputPosition="top"
          theme="preferred_color_scheme"
          lang="zh-CN"
          loading="lazy"
        />
      ) : null}
    </>
  );
}
