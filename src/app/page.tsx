"use client";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { posts } from "../data/mockPosts";
import { Post } from "./types/type";
import Link from "next/link";

export default function Home() {
  const [latestPosts, setLatestPosts] = useState<Post[]>([]);

  
  useEffect(() => {
    // 初期データが未保存なら保存
    if (!localStorage.getItem("posts")) {
      localStorage.setItem("posts", JSON.stringify(posts));
    }

    // localStorageから投稿一覧を取得し、最新3件を抽出
    const stored = localStorage.getItem("posts");
    if (stored) {
      const all: Post[] = JSON.parse(stored);
      const latest = all
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .slice(0, 3); 
      setLatestPosts(latest);
    }
  }, []);

  return (
    <div className="bg-amber-100 min-h-screen text-gray-800">
      <Navbar />
      <main className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-2">TechHubへようこそ</h1>
        <p className="text-lg mb-8">
          開発者のためのナレッジ共有プラットフォーム
        </p>
        <p className="text-sm text-gray-600 mb-4">
          🔐 投稿の作成/編集/削除はログイン後に可能です（ユーザー名:{" "}
          <strong>guest</strong> / パスワード: <strong>password</strong>）
        </p>

        <p className="text-xl font-semibold mb-4">最新の記事</p>
        <ul className="space-y-6">
          {latestPosts.map((post) => (
            <li key={post.id} className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-1">
                {post.title}
              </h3>
              <p className="text-sm text-gray-600">{post.date}</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-amber-200 text-amber-800 text-xs px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-4">
                <Link
                  href={`/posts/${post.id}`}
                  className="text-amber-700 hover:underline text-sm font-medium"
                >
                  ▶ 詳細を見る
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
