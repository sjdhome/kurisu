import Link from "next/link";
import Avatar from "./Avatar";

export default function BlogHeader() {
  return (
    <div className="dark:bg-[#252d38]">
      <div className="pt-20 pb-12 max-w-5xl mx-auto">
        <div className="flex flex-row items-center gap-x-4 mx-4">
          <Link href="/blog/">
            <Avatar
              width={64}
              height={64}
              className="rounded-full shadow-xl dark:shadow-none"
            />
          </Link>
          <div className="flex flex-col gap-y-2">
            <Link
              href="/blog/"
              className="no-underline text-inherit text-3xl font-bold"
            >
              sjdhome blog
            </Link>
            <small>愿你有一天能与重要的人重逢</small>
          </div>
        </div>
      </div>
    </div>
  );
}
