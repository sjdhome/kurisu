import type { PostMetadata } from "@/app/_types/PostMetadata";
import Giscus from "@/app/_components/Giscus";
import { marked } from "marked";

export default async function Page({ params }: { params: { id: string } }) {
  let response = await fetch(`https://api.sjdhome.com/blog/post/${params.id}`);
  if (response.status === 404) {
    return <p>404 Not found</p>;
  }
  const postMetadata: PostMetadata = await response.json();
  response = await fetch(
    `https://api.sjdhome.com/blog/post/${params.id}/content`
  );
  const markdown = await response.text();
  const html = marked(markdown);
  return (
    <>
      <main dangerouslySetInnerHTML={{ __html: html }} />
      {postMetadata.showComment ? (
        <Giscus
          repo="sjdhome/www.sjdhome.com"
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
