"use client";

import Navbar from "@/src/components/Navbar";
import { notFound } from "next/navigation";
import EditButton from "@/src/components/EditButton";
import DeleteButton from "@/src/components/DeleteButton";
import PostDetailContent from "@/src/components/PostDetailContent";
import { usePostById } from "@/src/hooks/usePostById";

type Props = {
  params: {
    id: string;
  };
};

export default function PostDetailPage({ params }: Props) {
  // 投稿データを取得
  const { post, isLoading } = usePostById(params.id);

  if (isLoading) {
    return (
      <div className="bg-amber-100 min-h-screen text-gray-800 p-6">
        <Navbar />
        <p>読み込み中...</p>
      </div>
    );
  }
  
  if (!post) return notFound();

  return (
    <div className="bg-amber-100 min-h-screen text-gray-800">
      <Navbar />
      <main className="max-w-3xl mx-auto px-4 py-10">
        <div className="flex justify-end gap-4 mb-4">
          <EditButton postId={post.id} />
          <DeleteButton post={post} />
        </div>
        <PostDetailContent post={post} />
      </main>
    </div>
  );
}
