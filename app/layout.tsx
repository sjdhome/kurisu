import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "sjdhome",
  description: "我的个人网站兼功能入口。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-Hans">
      <body>{children}</body>
    </html>
  );
}
