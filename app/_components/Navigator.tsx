import Link from "next/link";
import Block from "./Block";
import { EMAIL } from "../_utils/constants";

export default function Navigator() {
  return (
    <Block border={true} className="dark:bg-skk-dark">
      <h3 className="mt-0">导航栏</h3>
      <ul className="p-0 m-0">
        {[
          ["/", "🏠 主页"],
          ["https://github.com/sjdhome", "🐙 GitHub"],
          [`mailto:${EMAIL}`, "✉️ 电子邮件"],
          ["https://twitter.com/sjdhome_com", "🐦 X (Twitter)"],
          ["https://steamcommunity.com/id/sjdhome/", "🚂 Steam"],
          ["/blog/atom.xml", "📰 RSS 订阅"],
          ["/blog/post/friends/", "🔗 友情链接"],
          ["/blog/post/about-me/", "😀 关于我"],
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
