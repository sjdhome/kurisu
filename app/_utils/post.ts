import type { PostMetadata } from "../_types/PostMetadata";
import { API_DOMAIN } from "./constants";

async function getAllPosts(): Promise<PostMetadata[]> {
  let posts: PostMetadata[] = await (
    await fetch(`https://${API_DOMAIN}/blog/post/`, {
      next: {
        revalidate: 60,
      },
    })
  ).json();
  posts.sort((a, b) => {
    let at = new Date(a.created).getTime();
    let bt = new Date(b.created).getTime();
    // To keep order for posts that pin to top, I add very long seconds, long enough.
    const gap = 100 /* years */ * 365 * 24 * 60 * 60;
    if (a.pinToTop) {
      at += gap;
    }
    if (b.pinToTop) {
      bt += gap;
    }
    return bt - at;
  });
  return posts;
}

async function getPost(id: string): Promise<PostMetadata | null> {
  let response = await fetch(`https://${API_DOMAIN}/blog/post/${id}/`, {
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
    `https://${API_DOMAIN}/blog/post/${id}/content/`,
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
