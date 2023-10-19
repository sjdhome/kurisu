import Link from "next/link";
import Avatar from "./_components/Avatar";
import Button from "./_components/Button";
import Copyright from "./_components/Copyright";
import styles from "./page.module.css";

export default function Page() {
  return (
    <>
      <main className="text-center mt-32">
        <Avatar width={128} height={128} className="rounded-full shadow-xl" />
        <h1>sjdhome</h1>
        <small>愿你有一天能与重要的人重逢</small>
        <div className="flex flex-row justify-center mt-12 gap-x-4">
          <Link href="/blog/post/about-me/" className="no-underline text-white">
            <Button className="bg-[dodgerblue] dark:bg-[dodgerblue]">关于我</Button>
          </Link>
          <Link href="/blog/" className="no-underline text-inherit">
            <Button className="dark:bg-[#252d38]">博客</Button>
          </Link>
        </div>
      </main>
      <footer className="text-center mt-20">
        <Copyright />
      </footer>
    </>
  );
}
