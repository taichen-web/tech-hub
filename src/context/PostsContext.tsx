"use client";

import { createContext, useReducer, useContext, ReactNode } from "react";
import { Post } from "@/src/app/types/type";

// 投稿一覧や検索条件など、記事表示に必要な状態を一括管理
type State = {
  allPosts: Post[];
  searchQuery: string; // 実際にフィルター処理に使われる確定済み検索語句
  searchValue: string; // 入力中の検索ワード（SearchBarにバインドされる）
  currentPage: number;
};

// 状態を更新するためのアクション型
type Action =
  | { type: "SET_POSTS"; payload: Post[] }
  | { type: "SET_SEARCH_QUERY"; payload: string }
  | { type: "SET_SEARCH_VALUE"; payload: string }
  | { type: "SET_CURRENT_PAGE"; payload: number };

// 初期状態
const initialState: State = {
  allPosts: [],
  searchQuery: "",
  searchValue: "",
  currentPage: 0,
};

// reducer関数：dispatchされたアクションに応じてstateを更新
function postsReducer(state: State, action: Action): State {
  switch (action.type) {
    case "SET_POSTS":
      return { ...state, allPosts: action.payload };
    case "SET_SEARCH_QUERY":
      return { ...state, searchQuery: action.payload };
    case "SET_SEARCH_VALUE":
      return { ...state, searchValue: action.payload };
    case "SET_CURRENT_PAGE":
      return { ...state, currentPage: action.payload };
    default:
      return state;
  }
}

// Context定義（null初期化により useContextでのnullチェックが必要）
const PostsContext = createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
} | null>(null);

// カスタムフック：Context未提供時にエラーを出すことで安全性を確保
export const usePostsContext = () => {
  const context = useContext(PostsContext);
  if (!context) throw new Error("usePostsContext must be used within Provider");
  return context;
};

type PostsProviderProps = {
  children: ReactNode;
};

// Providerコンポーネント：全体にstateとdispatchを共有
export const PostsProvider = ({ children }: PostsProviderProps) => {
  const [state, dispatch] = useReducer(postsReducer, initialState);
  return (
    <PostsContext.Provider value={{ state, dispatch }}>
      {children}
    </PostsContext.Provider>
  );
};
