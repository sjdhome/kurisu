import type { MetadataRoute } from "next";
import { getAllPosts } from "./_utils/post";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
		{
			url: "https://www.sjdhome.com/"
		},
		{
			url: "https://www.sjdhome.com/blog/"
		},
		...(await getAllPosts()).map((post) => {
			return {
				url: `https://www.sjdhome.com/blog/post/${post.id}/`,
				lastModified: new Date(post.edited),
			};
		})
	];
}
