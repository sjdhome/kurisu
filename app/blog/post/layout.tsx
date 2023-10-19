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
      <hr className="m-0 border-none h-px bg-[#ccc]" />
      <div
        className={`flex flex-col lg:flex-row max-w-5xl mx-auto px-4 ${styles.post}`}
      >
        <Block border={false} className="w-full">
          {children}
        </Block>
      </div>
      <footer className="text-center mt-12 mb-8">
        <Copyright />
      </footer>
    </>
  );
}
