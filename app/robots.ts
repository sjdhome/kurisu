import type { MetadataRoute } from "next";
import { WEBSITE_DOMAIN } from "./_utils/constants";

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: "*",
			allow: "/"
		},
		sitemap: `https://${WEBSITE_DOMAIN}/sitemap.xml`
	}
}