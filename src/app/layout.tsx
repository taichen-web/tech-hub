import { PostsProvider } from "@/src/context/PostsContext";
import { Toaster } from "sonner";
import "./styles/global.css";

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({children}:Props){
  return (
    <html lang="ja">
      <body className="bg-amber-300 text-gray-800 font-sans">
        <PostsProvider>{children}</PostsProvider>
        <Toaster richColors />
      </body>
    </html>
  );
}

// アプリ全体の共通レイアウト（コンテキストと通知含む）