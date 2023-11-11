import style from "./Button.module.css";

export default function Button({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`${className} ${style.button}`}>{children}</div>;
}
