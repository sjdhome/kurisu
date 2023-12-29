import { ReactNode } from "react";
import BlogHeader from "../_components/BlogHeader";
import Copyright from "../_components/Copyright";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <header>
        <BlogHeader />
      </header>
      <hr className="m-0 border-none h-px bg-[#ccc] dark:bg-transparent" />
      {children}
      <footer className="text-center mt-12 mb-8">
        <Copyright />
      </footer>
    </>
  );
}
