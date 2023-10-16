import Link from "next/link";
import Avatar from "./Avatar";

export default function BlogHeader() {
	return <div className="mt-20 mb-12">
		<div className="flex flex-row">
			<Avatar width={64} height={64} />
			<Link href="/blog/">sjdhome blog</Link>
		</div>
		<div className="mx-6"><small>愿你有一天能与重要的人重逢</small></div>
	</div>
}