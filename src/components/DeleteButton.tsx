// src/components/DeleteButton.tsx
"use client";
import { useRouter } from "next/navigation";
import { Post } from "../app/types/type";
import { usePostsContext } from "@/src/context/PostsContext";
import { useEffect, useState } from "react";

type Props = {
  post: Post;
};

export default function DeleteButton({ post }: Props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();
  const { state, dispatch } = usePostsContext();

   // ログイン状態を localStorage から確認
  useEffect(() => {
    const loginStatus = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(loginStatus === "true");
  }, []);

  // 投稿削除処理：確認後、対象の投稿を削除し、state と localStorage を更新
  const handleDelete = () => {
    const confirmDelete = window.confirm("本当にこの投稿を削除しますか？");
    if (!confirmDelete) return;

    const updatedPosts = state.allPosts.filter((p) => p.id !== post.id);
    localStorage.setItem("posts", JSON.stringify(updatedPosts));
    dispatch({ type: "SET_POSTS", payload: updatedPosts });

    router.push("/posts");// 一覧ページに戻る
  };

  
  // 未ログイン時は非表示
  if (!isLoggedIn) {
    return null;
  } else {
    return (
      <button
        onClick={handleDelete}
        className="px-4 py-2 bg-red-100 text-red-800 rounded-md hover:bg-red-200 transition"
      >
        🗑 投稿を削除
      </button>
    );
  }
}
