import Avatar from "./Avatar";
import { MOTTO } from "../_utils/constants";

export default function BlogHeader() {
  return (
    <div className="dark:bg-skk-dark">
      <div className="pt-20 pb-12 max-w-5xl mx-auto">
        <div className="flex flex-row items-center gap-x-4 mx-4">
          <a href="/blog/">
            <Avatar
              width={64}
              height={64}
              className="rounded-full shadow-xl dark:shadow-none"
            />
          </a>
          <div className="flex flex-col gap-y-2">
            <a
              href="/blog/"
              className="no-underline hover:underline text-inherit text-3xl font-bold"
            >
              sjdhome blog
            </a>
            <small>{MOTTO}</small>
          </div>
        </div>
      </div>
    </div>
  );
}
