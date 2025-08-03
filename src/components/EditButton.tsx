"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type Props = {
  postId: number;
};

export default function EditButton({ postId }: Props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  // ログイン状態を localStorage から確認
  useEffect(() => {
    const loginStatus = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(loginStatus === "true");
  }, []);

  // 未ログイン時は非表示
  if (!isLoggedIn) return null;
  return (
    <button
      onClick={() => router.push(`/posts/${postId}/edit`)}
      className="px-4 py-2 bg-blue-100 text-blue-800 rounded-md hover:bg-blue-200 transition"
    >
      ✏ 投稿を編集
    </button>
  );
}
