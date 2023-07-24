import "./globals.css";
import type { Metadata } from "next";

//FIXME: SEO 활용 나중에 활용해보자
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className="flex items-center justify-center h-16 bg-blue-400">
          헤더
        </header>
        {children}
        <footer className="flex items-center justify-center h-16 bg-blue-400">
          푸터
        </footer>
      </body>
    </html>
  );
}
