import Avatar from "./_components/Avatar";
import Button from "./_components/Button";
import Copyright from "./_components/Copyright";
import { MOTTO } from "./_utils/constants";

export default function Page() {
  return (
    <>
      <main className="text-center mt-32">
        <Avatar width={128} height={128} className="rounded-full shadow-xl" />
        <h1>sjdhome</h1>
        <small>{MOTTO}</small>
        <div className="flex flex-row mt-12 gap-x-4 justify-center">
          <a href="/blog/" className="no-underline text-white">
            <Button className="bg-[dodgerblue] dark:bg-[dodgerblue]">
              博客
            </Button>
          </a>
          <a
            href="https://chat.sjdhome.com"
            className="no-underline text-initial"
          >
            <Button className="dark:bg-skk-dark">ChatGPT</Button>
          </a>
        </div>
      </main>
      <footer className="text-center mt-20">
        <Copyright />
      </footer>
    </>
  );
}
