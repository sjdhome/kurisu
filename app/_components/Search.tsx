import { ChangeEventHandler } from "react";
import Block from "./Block";

export default function Search({
  value,
  onChange,
}: {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}) {
  return (
    <Block>
      <h3>搜索</h3>
      <input type="search" placeholder="请输入关键字……" value={value} onChange={onChange} />
    </Block>
  );
}
