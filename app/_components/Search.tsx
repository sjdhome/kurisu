import Block from "./Block";

export default function Search() {
  return (
    <form action="/blog/" method="get">
      <div className="flex rounded-[12px] border border-solid border-[#ccc] p-2 mx-2 my-4 items-center hover:shadow-xl transition-shadow duration-300">
        <span>🔍</span>
        <input
          type="search"
          name="q"
          placeholder="站内搜索"
          className="flex-1 p-2 border-none outline-none rounded-[12px]"
        />
      </div>
    </form>
  );
}
