"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { usePostsContext } from "@/src/context/PostsContext";
import { Post } from "@/src/app/types/type";
import { toast } from "sonner";
import ContentEditor from "./ContentEditor";

type Props = {
  mode: "edit" | "create";
  post?: Post; // // mode が "edit" の場合にのみ必要な投稿データ
};

export default function PostEditor({ mode, post }: Props) {
  const router = useRouter();
  const { state, dispatch } = usePostsContext();

  // フォーム入力の状態管理
  const [title, setTitle] = useState(post?.title || "");
  const [content, setContent] = useState(post?.content || "");
  const [tags, setTags] = useState(post?.tags.join(", ") || "");
  const [isChanged, setIsChanged] = useState(false);

  // 編集対象の投稿と現在のフォーム入力が一致しているかを比較する
  const isSamePost = (
    currentTitle: string,
    currentContent: string,
    currentTagsString: string,
    originalPost: Post
  ): boolean => {
    const currentTags = currentTagsString
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean);

    const originalTags = originalPost.tags.map((t) => t.trim());

    return (
      currentTitle === originalPost.title &&
      currentContent === originalPost.content &&
      JSON.stringify(currentTags.sort()) === JSON.stringify(originalTags.sort())
    );
  };

  // 編集モード時に、タイトル・内容・タグの変更を監視して isChanged を更新
  useEffect(() => {
    if (mode !== "edit" || !post) return;
    setIsChanged(!isSamePost(title, content, tags, post));
  }, [title, content, tags]);

  // 入力バリデーション：タイトル・本文が空でないことを確認
  const validateInputs = () => {
    if (!title.trim() || !content.trim()) {
      toast.error("タイトルと内容は必須です");
      return false;
    }
    return true;
  };

  // タグ文字列をカンマで分割し、空白をトリムして配列に整形
  const parseTags = (tagString: string): string[] =>{
  return tagString.split(",").map((t) => t.trim()).filter(Boolean);
  }

  // 投稿一覧を localStorage に保存し、context にも反映
  const savePost = (updatedPosts: Post[]) => {
    localStorage.setItem("posts", JSON.stringify(updatedPosts));
    dispatch({ type: "SET_POSTS", payload: updatedPosts });
  };

  // フォーム送信時の処理：バリデーション → 投稿データ作成・更新 → 保存・画面遷移
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateInputs()) return;

    const tagList = parseTags(tags);
    let updatedPosts: Post[];

    if (mode === "edit" && post) {
      const updatedPost = { ...post, title, content, tags: tagList };
      updatedPosts = state.allPosts.map((p) =>
        p.id === post.id ? updatedPost : p
      );
    } else {
      const nextId =
        state.allPosts.length > 0
          ? Math.max(...state.allPosts.map((p) => p.id)) + 1
          : 1;

      const newPost: Post = {
        id: nextId,
        title,
        content,
        tags: tagList,
        date: new Date().toISOString().split("T")[0],
      };
      updatedPosts = [...state.allPosts, newPost];
    }

    savePost(updatedPosts);
    toast.success(
      mode === "edit" ? "投稿を更新しました" : "新規投稿を作成しました"
    );
    router.push("/posts");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow-md max-w-3xl mx-auto"
    >
      <h1 className="text-2xl font-bold mb-6">
        {mode === "edit" ? "投稿を編集" : "新規投稿"}
      </h1>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          タイトル：
        </label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
        />
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          内容：
        </label>
        <ContentEditor value={content} onChange={setContent} />
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          タグ（カンマ","区切り）
        </label>
        <input
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
        />
      </div>

      <div className="flex">
        <button
          type="submit"
          disabled={mode === "edit" && !isChanged}
          className="bg-amber-500 text-white px-4 py-2 rounded-md hover:bg-amber-600 disabled:opacity-50"
        >
          {mode === "edit" ? "保存" : "投稿"}
        </button>
        <button
          type="button"
          onClick={() => router.back()}
          className="ml-4 bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300"
        >
          ← 戻る
        </button>
      </div>
    </form>
  );
}
