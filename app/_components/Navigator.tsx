import Link from "next/link";
import Block from "./Block";

export default function Navigator() {
  return (
    <Block border={true}>
      <h3 className="mt-0">导航栏</h3>
      <ul className="p-0 m-0">
        {[
          ["/", "🏠 主页"],
          ["https://github.com/sjdhome", "🐙 GitHub"],
          ["mailto:sjdhoome@gmail.com", "✉️ 电子邮件"],
          ["/blog/atom.xml", "📰 RSS 订阅"],
        ].map(([href, text]) => (
          <li key={href} className="list-none">
            <Link
              href={href}
              className="text-inherit py-2 block no-underline hover:bg-[#ccc] w-full"
            >
              {text}
            </Link>
          </li>
        ))}
      </ul>
    </Block>
  );
}
