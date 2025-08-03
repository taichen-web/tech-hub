"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  // ログイン状態をlocalStorageから取得（初回マウント時に1度だけ）
  // クライアント側限定処理のため `typeof window !== "undefined"` でガード
  useEffect(() => {
    if (typeof window !== "undefined") {
      const loginStatus = localStorage.getItem("isLoggedIn");
      setIsLoggedIn(loginStatus === "true");
    }
  }, []);

  // ログアウト処理
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    router.push("/");
  };

  return (
    <nav className="flex gap-6 px-6 py-4 bg-white shadow-md sticky top-0 z-50">
      <Link href="/" className="text-gray-700 hover:text-amber-600 font-medium">
        🏠 TechHub
      </Link>
      <Link
        href="/posts"
        className="text-gray-700 hover:text-amber-600 font-medium"
      >
        📚 記事一覧
      </Link>
      <Link
        href="/create"
        className="text-gray-700 hover:text-amber-600 font-medium"
      >
        ✏ 新規投稿
      </Link>
      {isLoggedIn ? (
        <button
          onClick={handleLogout}
          className="text-gray-700 hover:text-amber-600 font-medium"
        >
          🔓 ログアウト
        </button>
      ) : (
        <Link
          href="/login"
          className="text-gray-700 hover:text-amber-600 font-medium"
        >
          🔐 ログイン
        </Link>
      )}
    </nav>
  );
}
