"use client";
import { usePostsContext } from "@/src/context/PostsContext";

export default function SearchBar() {
  const { state, dispatch } = usePostsContext();
  const { searchValue } = state;

  // 検索フォーム送信時に検索クエリをフィルター（実際のフィルタリングは親で処理）
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({ type: "SET_SEARCH_QUERY", payload: searchValue });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <input
        type="text"
        placeholder="タイトルやタグで検索（Enterで実行）"
        value={searchValue}
        onChange={(e) =>
          dispatch({ type: "SET_SEARCH_VALUE", payload: e.target.value })
        }
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
      />
    </form>
  );
}
