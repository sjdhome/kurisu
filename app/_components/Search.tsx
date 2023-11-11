"use client";

import { useState } from "react";

export default function Search({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const [value, setValue] = useState((searchParams["q"] as string) ?? "");

  return (
    <form action="/blog/" method="get">
      <div className="flex rounded-[12px] border border-solid border-[#ccc] dark:border-transparent dark:bg-skk-dark p-2 mx-2 my-4 items-center hover:shadow-lg transition-shadow duration-300">
        <span>🔍</span>
        <input
          type="search"
          name="q"
          placeholder="站内搜索"
          value={value}
          onInput={(event) => {
            setValue((event.target as HTMLInputElement).value);
          }}
          className="flex-1 p-2 border-none outline-none rounded-[12px]"
        />
      </div>
    </form>
  );
}
