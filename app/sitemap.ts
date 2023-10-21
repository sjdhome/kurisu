import type { MetadataRoute } from "next";
import { getAllPosts } from "./_utils/post";
import { WEBSITE_DOMAIN } from "./_utils/constants";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
		{
			url: `https://${WEBSITE_DOMAIN}/`
		},
		{
			url: `https://${WEBSITE_DOMAIN}/blog/`
		},
		...(await getAllPosts()).map((post) => {
			return {
				url: `https://${WEBSITE_DOMAIN}/blog/post/${post.id}/`,
				lastModified: new Date(post.edited),
			};
		})
	];
}
