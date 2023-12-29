import { ReactNode } from "react";
import style from "./Button.module.css";

export default function Button({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`${className} ${style.button}`}>{children}</div>;
}
