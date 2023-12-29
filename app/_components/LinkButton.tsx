import { ReactNode } from "react";
import styles from "./LinkButton.module.css";

export default function LinkButton({
  children,
  href,
  className,
}: {
  children: ReactNode;
  href: string;
  className?: string;
}) {
  const extraClassName = className === undefined ? "" : " " + className;
  return (
    <a className={`${styles["link-button"]}${extraClassName}`} href={href}>
      {children}
    </a>
  );
}
