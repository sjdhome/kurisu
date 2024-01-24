import Block from "./Block";
import { EMAIL } from "../_utils/constants";
import { ReactNode } from "react";
import styles from "./Navigator.module.css";

const Item = ({
  href,
  children,
  rel,
}: {
  href: string;
  children: ReactNode;
  rel?: string;
}) => (
  <li className="list-none">
    <a href={href} rel={rel} className={styles.item}>
      {children}
    </a>
  </li>
);

export default function Navigator() {
  return (
    <Block border={true} className="dark:bg-skk-dark">
      <h3 className="mt-0">导航栏</h3>
      <ul className="p-0 m-0">
        <Item href="/">🏠 主页</Item>
        <Item href={"mailto:" + EMAIL}>✉️ 电子邮件</Item>
        <Item href="https://mastodon.social/@sjdhome" rel="me">
          🐘 Mastodon
        </Item>
        <Item href="https://twitter.com/sjdhome_com">🐦 X (Twitter)</Item>
        <Item href="https://github.com/sjdhome">🐙 GitHub</Item>
        <Item href="https://steamcommunity.com/id/sjdhome/">🚂 Steam</Item>
        <Item href="/blog/atom.xml">📰 RSS 订阅</Item>
        <Item href="/blog/post/friends/">🔗 友情链接</Item>
        <Item href="/blog/post/about-me/">😀 关于我</Item>
      </ul>
    </Block>
  );
}
