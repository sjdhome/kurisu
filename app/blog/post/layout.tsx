import Block from "@/app/_components/Block";
import BlogHeader from "@/app/_components/BlogHeader";
import Copyright from "@/app/_components/Copyright";
import styles from "./layout.module.css";

export default function PostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header>
        <BlogHeader />
      </header>
      <hr className="m-0 border-none h-px bg-[#ccc] dark:bg-transparent" />
      <div
        className={`flex flex-col lg:flex-row max-w-5xl mx-auto ${styles.post}`}
      >
        <Block border={false} className="flex-1">
          {children}
        </Block>
      </div>
      <footer className="text-center mt-12 mb-8">
        <Copyright />
      </footer>
    </>
  );
}
