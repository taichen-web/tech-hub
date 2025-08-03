"use client";
import { usePostsContext } from "@/src/context/PostsContext";
import { Post } from "../app/types/type";

type Props = {
  filteredPosts: Post[];
};

export default function Pagination({ filteredPosts }: Props) {
  const { state, dispatch } = usePostsContext();
  const { currentPage } = state;
  const postsPerPage = 10;

  // 全ページ数（投稿数 ÷ 1ページあたりの表示件数）を算出
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  return (
    <div className="mt-8 flex items-center justify-center space-x-4">
      <button
        onClick={() =>
          dispatch({
            type: "SET_CURRENT_PAGE",
            // 「前へ」ボタンのクリックで1ページ戻る（0未満にはならない）
            payload: Math.max(currentPage - 1, 0),
          })
        }
        disabled={currentPage === 0}
        className="px-4 py-2 bg-amber-200 text-amber-900 rounded-md disabled:opacity-50"
      >
        ◀ 前へ
      </button>

      <span className="text-gray-700">
        {currentPage + 1} / {totalPages}
      </span>

      <button
        onClick={() =>
          dispatch({
            type: "SET_CURRENT_PAGE",
            // 「次へ」ボタンのクリックで1ページ進む（最終ページを超えない）
            payload: Math.min(currentPage + 1, totalPages - 1),
          })
        }
        disabled={currentPage >= totalPages - 1}
        className="px-4 py-2 bg-amber-200 text-amber-900 rounded-md disabled:opacity-50"
      >
        次へ ▶
      </button>
    </div>
  );
}
