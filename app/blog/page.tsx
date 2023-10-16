import { useState } from "react";
import BlogHeader from "../_components/BlogHeader";
import Copyright from "../_components/Copyright";
import Navigator from "../_components/Navigator";
import Search from "../_components/Search";
import { PostMetadata } from "../_types/PostMetadata";
import PostCard from "../_components/PostCard";

export default function Page({ posts }: { posts: PostMetadata[] }) {
  const [search, setSearch] = useState("");
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <>
      <header>
        <BlogHeader />
      </header>
      <hr />
      <div>
        <main>
          {filteredPosts.length === 0 ? (
            <p>没有找到相关文章。</p>
          ) : (
            filteredPosts.map((post) => <PostCard key={post.id} post={post} />)
          )}
        </main>
        <aside>
          <Search
            value={search}
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
          <Navigator />
        </aside>
      </div>
      <footer>
        <Copyright />
      </footer>
    </>
  );
}
