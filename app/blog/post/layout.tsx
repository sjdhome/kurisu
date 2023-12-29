import Block from "@/app/_components/Block";
import styles from "./layout.module.css";

export default function PostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div
        className={`flex flex-col lg:flex-row max-w-5xl mx-auto ${styles.post}`}
      >
        <Block border={false} className="flex-1">
          {children}
        </Block>
      </div>
    </>
  );
}
