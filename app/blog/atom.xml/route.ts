import type { PostMetadata } from "@/app/_types/PostMetadata";
import { RAW_DOMAIN, WEBSITE_DOMAIN } from "@/app/_utils/constants";
import { getAllPosts, getPostContent } from "@/app/_utils/post";
import { marked } from "marked";
import formatXml from "xml-formatter";

export async function GET(request: Request): Promise<Response> {
  let posts: PostMetadata[] = await getAllPosts();
  posts = posts.filter((post) => post.visible);
  return new Response(
    formatXml(
      `<?xml version="1.0" encoding="utf-8"?>
			<feed xmlns="http://www.w3.org/2005/Atom">
			<id>https://${WEBSITE_DOMAIN}/blog/</id>
			<title>sjdhome blog</title>
			<updated>${posts[0].edited}</updated>
			<author>
					<name>sjdhome</name>
					<uri>https://${WEBSITE_DOMAIN}/</uri>
			</author>
			<link rel="alternate" href="https://${WEBSITE_DOMAIN}/blog/"/>
			<link rel="self" href="https://${WEBSITE_DOMAIN}/blog/atom.xml"/>
			<subtitle>愿你有一天能与重要的人重逢</subtitle>
			<logo>https://${RAW_DOMAIN}/img/earth.jpg</logo>
			<icon>https://${WEBSITE_DOMAIN}/favicon.ico</icon>
			<rights>sjdhome © 2023</rights>
			${(
        await Promise.all(
          posts.map(async (post) => {
            const content =
              (await getPostContent(post.id)) ??
              `<p>请前往 <a href="https://${WEBSITE_DOMAIN}/blog/post/${post.id}/">https://${WEBSITE_DOMAIN}/blog/post/${post.id}/</a> 阅读全文</p>`;
            return `<entry>
					<title type="html"><![CDATA[${post.title}]]></title>
					<id>https://${WEBSITE_DOMAIN}/blog/post/${post.id}/</id>
					<link href="https://${WEBSITE_DOMAIN}/blog/post/${post.id}/"/>
					<updated>${post.edited}</updated>
					<summary type="html"><![CDATA[${post.description}]]></summary>
					<content type="html"><![CDATA[${marked(content)}]]></content>
					<category label="${post.tags.join(" ")}"/>
					<published>${post.created}</published>
					</entry>`;
          }),
        )
      ).join("")}
	</feed>`,
      {
        collapseContent: true,
        whiteSpaceAtEndOfSelfclosingTag: true,
      },
    ),
    { headers: { "Content-Type": "application/xml; charset=utf-8" } },
  );
}

export const dynamic = "force-dynamic";
