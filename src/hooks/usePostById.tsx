import { useEffect, useState } from "react";
import { Post } from "../app/types/type";
import { usePostsContext } from "@/src/context/PostsContext";

// 投稿IDに基づいて該当する投稿を取得するカスタムフック
// Contextに投稿があれば即返す、なければlocalStorageから取得＆Contextに保存
export const usePostById = (id: string) => {
  const { state, dispatch } = usePostsContext();
  const [post, setPost] = useState<Post | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Contextにすでに投稿がある場合はそれを使う
    const existing = state.allPosts.find((p) => p.id.toString() === id);
    if (existing) {
      setPost(existing);
    } 
    // なければlocalStorageから全投稿を取得し、対象を探す
    else {
      const stored = localStorage.getItem("posts");
      if (stored) {
        const parsed: Post[] = JSON.parse(stored);
        const found = parsed.find((p) => p.id.toString() === id);
        if (found) {
          setPost(found);
          // 同時に全体Contextも更新
          dispatch({ type: "SET_POSTS", payload: parsed });
        }
      }
    }
    setIsLoading(false);
  }, [id, state.allPosts, dispatch]);

  return { post, isLoading };
};
