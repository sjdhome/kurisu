import Link from "next/link";
import Block from "./Block";

export default function Navigator() {
	return (
		<Block>
			<h3>导航栏</h3>
			<ul>
				<li><Link href="/">主页</Link></li>
				<li><Link href="https://github.com/sjdhome">GitHub</Link></li>
				<li><Link href="mailto:sjdhoome@gmail.com">电子邮件</Link></li>
				<li><Link href="/blog/atom.xml">RSS 订阅</Link></li>
			</ul>
		</Block>
	);
}