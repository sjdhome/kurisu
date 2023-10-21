import Link from "next/link";
import Avatar from "./Avatar";
import { MOTTO } from "../_utils/constants";

export default function BlogHeader() {
  return (
    <div className="dark:bg-skk-dark">
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
            <small>{MOTTO}</small>
          </div>
        </div>
      </div>
    </div>
  );
}
