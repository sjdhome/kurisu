import Link from "next/link";
import Avatar from "./_components/Avatar";
import Button from "./_components/Button";
import Copyright from "./_components/Copyright";
import "./page.module.css";

export default function Page() {
  return (
    <>
      <main>
        <Avatar width={128} height={128} />
        <h1>sjdhome</h1>
        <small>愿你有一天能与重要的人重逢</small>
        <div className="flex flex-row">
          <Link href="/blog/post/about-me/">
            <Button>关于我</Button>
          </Link>
          <Link href="/blog/">
            <Button>博客</Button>
          </Link>
        </div>
      </main>
      <footer>
        <Copyright />
      </footer>
    </>
  );
}
