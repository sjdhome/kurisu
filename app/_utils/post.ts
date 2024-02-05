import type { PostMetadata } from "../_types/PostMetadata";
import { API_DOMAIN } from "./constants";

async function getAllPosts(): Promise<PostMetadata[]> {
  let posts: PostMetadata[] = await (
    await fetch(`https://${API_DOMAIN}/blog/posts`, {
      next: {
        revalidate: 60,
      },
    })
  ).json();
  return posts;
}

async function getPost(id: string): Promise<PostMetadata | null> {
  let response = await fetch(`https://${API_DOMAIN}/blog/post?id=${id}`, {
    next: {
      revalidate: 60,
    },
  });
  if (!response.ok) {
    return null;
  }
  let post: PostMetadata = await response.json();
  return post;
}

async function getPostContent(id: string): Promise<string | null> {
  const response = await fetch(
    `https://${API_DOMAIN}/blog/post_content?id=${id}`,
    {
      next: {
        revalidate: 60,
      },
    },
  );
  if (!response.ok) {
    return null;
  }
  return response.text();
}

export { getAllPosts, getPost, getPostContent };
