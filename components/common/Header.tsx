import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="flex items-center justify-around h-16 bg-blue-400">
      <Link href="/">메인으로</Link>
      <nav>네비게이션</nav>
    </header>
  );
};

export default Header;
