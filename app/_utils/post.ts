import type { PostMetadata } from "../_types/PostMetadata";

async function getAllPosts(): Promise<PostMetadata[]> {
  let posts: PostMetadata[] = await (
    await fetch("https://api.sjdhome.com/blog/post/", {
      next: { revalidate: 500 },
    })
  ).json();
  posts.sort((a, b) => {
    const aDate = new Date(a.created);
    const bDate = new Date(b.created);
    return (
      bDate.getTime() +
      (b.pinToTop ? 9999 : 0) -
      (aDate.getTime() + (a.pinToTop ? 9999 : 0))
    );
  });
  return posts;
}

async function getPost(id: string): Promise<PostMetadata | null> {
  let response = await fetch(`https://api.sjdhome.com/blog/post/${id}`, {
    next: { revalidate: 500 },
  });
  if (!response.ok) {
    return null;
  }
  let post: PostMetadata = await response.json();
  return post;
}

async function getPostContent(id: string): Promise<string | null> {
  const response = await fetch(
    `https://api.sjdhome.com/blog/post/${id}/content`,
    {
      next: { revalidate: 500 },
    }
  );
  if (!response.ok) {
    return null;
  }
  return response.text();
}

export { getAllPosts, getPost, getPostContent };
