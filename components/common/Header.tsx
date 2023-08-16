import Link from "next/link";
import React from "react";

//TODO: 유저 문제 페이지 라우팅 추가
const Header = () => {
  return (
    <header className="flex flex-col items-center justify-around bg-myWhite">
      <div className="flex items-center justify-between w-full h-20 p-4">
        <Link href="/" className="text-3xl font-medium">
          AlgoGo
        </Link>
        <nav>네비게이션</nav>
      </div>
      <ul className="flex items-center w-full h-16 p-4 space-x-10 bg-myBlue">
        <Link href="/">전체 문제</Link>
        <Link href="/algolist">알고리즘</Link>
        <Link href="/travel">행성 여행</Link>
        <Link href="/community">커뮤니티</Link>
        <Link href="/rank">랭크</Link>
        <li>유저 문제</li>
        <Link href="/adminEdit">관리자 페이지</Link>
      </ul>
    </header>
  );
};

export default Header;
