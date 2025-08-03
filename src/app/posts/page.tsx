"use client";

import Navbar from "@/src/components/Navbar";
import { posts } from "@/src/data/mockPosts";
import { useEffect } from "react";
import { Post } from "../types/type";
import SearchBar from "@/src/components/SearchBar";
import Pagination from "@/src/components/Pagination";
import PostCard from "@/src/components/PostCard";
import { usePostsContext } from "@/src/context/PostsContext";

export default function PostsPage() {
  const { state, dispatch } = usePostsContext();
  const { allPosts, searchQuery, currentPage } = state;
  const postsPerPage = 10;

  useEffect(() => {
    // 初回のみローカルストレージに初期データを保存
    if (!localStorage.getItem("posts")) {
      localStorage.setItem("posts", JSON.stringify(posts));
    }

    // 常にlocalStorageから取得して表示
    const stored = localStorage.getItem("posts");
    if (stored) {
      const parsed: Post[] = JSON.parse(stored);
      const sorted = parsed.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );
      dispatch({ type: "SET_POSTS", payload: sorted }); // 全件（新しい順）
    }
    
    dispatch({ type: "SET_CURRENT_PAGE", payload: 0 });
}, [searchQuery]);

  // 検索ワードに応じて投稿をフィルタリング（タイトル or タグ）
  const q = searchQuery.toLowerCase();
  const filteredPosts = allPosts.filter((post) => {
    return (
      post.title.toLowerCase().includes(q) ||
      post.tags.some((tag) => tag.toLowerCase().includes(q))
    );
  });

  // ページング処理（検索後の結果に適用）
  const startIndex = currentPage * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const currentPosts = filteredPosts.slice(startIndex, endIndex);

  return (
    <div className="bg-amber-100 min-h-screen text-gray-800">
      <Navbar />
      <main className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-6">記事一覧</h1>

        <SearchBar />

        {currentPosts.length === 0 ? (
          <p className="text-gray-600">該当する記事がありません。</p>
        ) : (
          <ul className="space-y-6">
            {currentPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </ul>
        )}

        <Pagination filteredPosts={filteredPosts} />
      </main>
    </div>
  );
}
