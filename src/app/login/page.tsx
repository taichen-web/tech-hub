"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/src/components/Navbar";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // 擬似ログイン認証（guest/password）
    // ※ 本アプリは学習用途であり、パスワードはハードコーディングされています。
    // 本番環境では適切な認証・セキュリティ対策が必要です
    if (username === "guest" && password === "password") {
      localStorage.setItem("isLoggedIn", "true");
      router.push("/");// ログイン後、ホーム画面にリダイレクトします
    } else {
      alert("ユーザー名またはパスワードが違います");
    }
  };

  return (
    <>
      <Navbar />
      <div className="bg-amber-100 min-h-screen text-gray-800">
        <main className="max-w-md mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold mb-6 text-center">ログイン</h2>
          <form
            onSubmit={handleLogin}
            className="bg-white p-6 rounded-lg shadow-md space-y-4"
          >
            <div>
              <label className="block text-sm font-medium mb-1">
                ユーザー名
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-amber-200"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                パスワード
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-amber-200"
              />
            </div>

            <div className="text-sm text-center text-gray-600">
              ゲストユーザー：
              <br />
              ユーザー名：<strong>guest</strong> / パスワード：<strong>password</strong>
            </div>

            <button
              type="submit"
              className="w-full bg-amber-300 text-amber-900 py-2 px-4 rounded-md hover:bg-amber-400 transition"
            >
              ログイン
            </button>
          </form>
        </main>
      </div>
    </>
  );
}
