import { Post } from "../app/types/type";

type Props = {
  post: Post;
};

// 投稿詳細の内容を表示（タイトル、日付、タグ、本文）
export default function PostDetailContent({ post }: Props) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md min-h-[700px]">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-sm text-gray-600 mb-2">投稿日: {post.date}</p>
      <div className="mb-4 flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="bg-amber-200 text-amber-800 text-xs px-2 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
      {/* 本文（HTML形式で描画） */}
      <div
        className="prose prose-sm max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </div>
  );
}
