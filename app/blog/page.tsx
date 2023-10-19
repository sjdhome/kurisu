import type { Metadata } from "next";
import BlogHeader from "../_components/BlogHeader";
import Copyright from "../_components/Copyright";
import Navigator from "../_components/Navigator";
import PostList from "../_components/PostList";
import Search from "../_components/Search";

export const metadata: Metadata = {
  title: "sjdhome blog",
  description: "我的个人博客，记录编程知识和生活感想。",
};

export default function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  return (
    <>
      <header>
        <BlogHeader />
      </header>
      <hr className="m-0 border-none h-px bg-[#ccc] dark:bg-transparent" />
      <div className="flex flex-col lg:flex-row max-w-5xl mx-auto px-4">
        <main className="basis-2/3">
          <PostList searchParams={searchParams} />
        </main>
        <aside className="basis-1/3">
          <div className="lg:sticky lg:top-4">
            <Search />
            <Navigator />
          </div>
        </aside>
      </div>
      <footer className="text-center mt-12 mb-8">
        <Copyright />
      </footer>
    </>
  );
}
