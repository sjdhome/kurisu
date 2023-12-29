import Avatar from "./_components/Avatar";
import Copyright from "./_components/Copyright";
import LinkButton from "./_components/LinkButton";
import { MOTTO } from "./_utils/constants";

export default function Page() {
  return (
    <>
      <main className="text-center mt-32">
        <Avatar width={128} height={128} className="rounded-full shadow-xl" />
        <h1>sjdhome</h1>
        <small>{MOTTO}</small>
        <div className="flex flex-row mt-12 gap-x-4 justify-center">
          <LinkButton href="/blog/" className="bg-[dodgerblue] text-white">博客</LinkButton>
          <LinkButton href="https://chat.sjdhome.com" className="dark:bg-skk-dark">ChatGPT</LinkButton>
        </div>
      </main>
      <footer className="text-center mt-20">
        <Copyright />
      </footer>
    </>
  );
}
