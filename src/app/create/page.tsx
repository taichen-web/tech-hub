"use client";

import Navbar from "@/src/components/Navbar";
import PostEditor from "@/src/components/PostEditor";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function CreatePostPage() {
  const router = useRouter();
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    if (!isLoggedIn) {
      alert("この操作にはログインが必要です");
      router.push("/login");
    } else {
      setIsChecked(true); // // ログインチェック後にPostEditorを表示
    }
  }, []);

  return (
    <div className="bg-amber-100 min-h-screen text-gray-800">
      <Navbar />
      <main className="max-w-3xl mx-auto px-4 py-10">
        {isChecked && <PostEditor mode="create" />}
      </main>
    </div>
  );
}
