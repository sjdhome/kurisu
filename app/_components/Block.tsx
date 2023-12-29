import { ReactNode } from "react";
import styles from "./Block.module.css";

export default function Block({
  children,
  border,
  className,
}: {
  children: ReactNode;
  border: boolean;
  className?: string;
}) {
  const borderClass = border ? " " + styles["block-border"] : "";
  const extraClass = className !== undefined ? " " + className : "";
  return (
    <div className={`${styles.block}${borderClass}${extraClass}`}>
      {children}
    </div>
  );
}
