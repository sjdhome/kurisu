import { ReactNode } from "react";
import styles from "./Block.module.css";

export default function Block({
  children,
  border,
  className,
}: {
  children: ReactNode;
  border?: boolean;
  className?: string;
}) {
  if (border === true) {
    return (
      <div className={`${styles.block} ${styles["block-border"]} ${className}`}>
        {children}
      </div>
    );
  } else {
    return <div className={`${styles.block} ${className}`}>{children}</div>;
  }
}
