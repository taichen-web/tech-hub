"use client";

import Navbar from "@/src/components/Navbar";
import { useParams } from "next/navigation";
import { usePostById } from "@/src/hooks/usePostById";
import PostEditor from "@/src/components/PostEditor";

export default function EditPostPage() {
  const { id } = useParams();
  const { post, isLoading } = usePostById(id as string);

  if (isLoading) {
    return (
      <div className="bg-amber-100 min-h-screen text-gray-800 p-6">
        <Navbar />
        <p>読み込み中...</p>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="bg-amber-100 min-h-screen text-gray-800 p-6">
        <Navbar />
        <p>該当する投稿が見つかりません</p>
      </div>
    );
  }

  return (
    <div className="bg-amber-100 min-h-screen text-gray-800">
      <Navbar />
      <main className="max-w-3xl mx-auto px-4 py-10">
        <PostEditor mode="edit" post={post} />
      </main>
    </div>
  );
}
