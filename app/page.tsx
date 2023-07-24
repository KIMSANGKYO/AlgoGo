import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen p-24">
      <h2> 여기가 메인페이지</h2>
      <Link href="/algolist">알고리즘 목록</Link>
    </main>
  );
}
