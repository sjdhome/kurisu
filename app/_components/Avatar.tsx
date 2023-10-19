import Image from "next/image";
import avatar from "../_assets/avatar.jpg";

export default function Avatar({
  width,
  height,
  className,
}: {
  width: number;
  height: number;
  className?: string;
}) {
  return (
    <Image
      src={avatar}
      alt="我的头像，内容是在地球上空中看太阳升起。"
      width={width}
      height={height}
      className={className}
    />
  );
}
