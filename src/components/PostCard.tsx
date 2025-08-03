import Link from "next/link";
import { Post } from "@/src/app/types/type";

type Props = {
  post: Post;
};

const PostCard = ({ post }: Props) => {
  return (
    <li className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-xl font-bold text-gray-900 mb-1">{post.title}</h3>
      <p className="text-sm text-gray-600">{post.date}</p>

      <div className="mt-2 flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="bg-amber-200 text-amber-800 text-xs px-2 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-4">
        <Link
          href={`/posts/${post.id}`}
          className="text-amber-700 hover:underline text-sm font-medium"
        >
          ▶ 詳細を見る
        </Link>
      </div>
    </li>
  );
};

export default PostCard;
