import type { Metadata } from "next";
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
      <div className="flex flex-col lg:flex-row max-w-5xl mx-auto">
        <main className="basis-2/3">
          <PostList searchParams={searchParams} />
        </main>
        <aside className="basis-1/3">
          <div className="lg:sticky lg:top-4">
            <Search searchParams={searchParams} />
            <Navigator />
          </div>
        </aside>
      </div>
    </>
  );
}
