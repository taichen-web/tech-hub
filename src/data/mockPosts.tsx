export type Post = {
  id: number;
  title: string;
  content: string;
  tags: string[];
  date: string;
};

export const posts: Post[] = [
  {
    id: 1,
    title: "ReactのuseEffect完全入門",
    content:
      "ReactのuseEffectは副作用処理（API通信、イベント登録、購読など）を行うためのフックです。依存配列を正しく使うことで、必要なタイミングだけ実行されるように制御できます。本記事では、基本構文から、クリーンアップ、無限ループを防ぐポイントまでを具体例を交えて解説します。",
    tags: ["React", "Hooks"],
    date: "2025-07-29",
  },
  {
    id: 2,
    title: "Next.js App Routerの基礎と応用",
    content:
      "Next.js 13以降で導入されたApp Routerは、ページ構成をより柔軟に管理できる革新的な機能です。旧来のpagesディレクトリとの違い、layout.tsxの使い方、動的ルーティング、テンプレートの分離などを丁寧に解説します。React Server Componentsとの組み合わせについても触れています。",
    tags: ["Next.js", "Routing"],
    date: "2025-07-28",
  },
  {
    id: 3,
    title: "TypeScriptで型安全なReact開発を始めよう",
    content:
      "Reactアプリ開発にTypeScriptを導入することで、バグの予防と可読性向上に大きく貢献します。本記事では、Propsの型定義、useState/useEffectの型注釈、イベントハンドラの型指定、ユニオン型やジェネリクスの活用方法を例示しながら、現場で通用する記述スタイルを紹介します。",
    tags: ["TypeScript", "React"],
    date: "2025-07-27",
  },
  {
    id: 4,
    title: "Tailwind CSSで爆速UI開発を体験しよう",
    content:
      "Tailwind CSSはユーティリティファーストなCSSフレームワークで、直感的なクラス命名によりUI構築を爆速化できます。本記事では基本クラスの使い方、レスポンシブデザイン、カスタムテーマの作成方法などを初心者にもわかりやすくまとめました。",
    tags: ["CSS", "Tailwind"],
    date: "2025-07-26",
  },
  {
    id: 5,
    title: "Reactでフォームを扱う際のバリデーション設計",
    content:
      "フォーム実装は地味ながらもアプリのUXを左右する重要な要素です。Reactでのフォーム処理における状態管理、onChangeイベントの取り扱い、リアルタイムバリデーション、エラーメッセージの表示方法について、コードと実例で丁寧に解説します。",
    tags: ["React", "Form"],
    date: "2025-07-25",
  },
  {
    id: 6,
    title: "shadcn/uiの基本コンポーネントまとめ",
    content:
      "shadcn/uiはTailwind CSSベースの美しいUIコンポーネントセットです。本記事では、Button, Card, Dialogなど基本コンポーネントの使い方とカスタマイズ方法を紹介し、見た目と機能を両立させた実践的なUI開発手法を解説します。",
    tags: ["UI", "shadcn"],
    date: "2025-07-24",
  },
  {
    id: 7,
    title: "MarkdownをReactで表示する方法まとめ",
    content:
      "技術ブログや投稿サービスではMarkdown対応が重要です。ReactアプリでMarkdownを扱うには、react-markdownパッケージを活用するのが定番です。本記事では、導入方法からシンタックスハイライト、カスタムレンダラーの実装までを段階的に紹介します。",
    tags: ["React", "Markdown"],
    date: "2025-07-23",
  },
  {
    id: 8,
    title: "Zustandで状態管理をシンプルにする方法",
    content:
      "Zustandは軽量な状態管理ライブラリで、Reduxよりもシンプルな記述でグローバルステートを扱えます。本記事ではuseStoreの使い方や分割管理の方法を紹介します。",
    tags: ["React", "Zustand"],
    date: "2025-07-22",
  },
  {
    id: 9,
    title: "Next.jsでの画像最適化のベストプラクティス",
    content:
      "Imageコンポーネントの活用、lazy loading、srcset対応など、Next.jsにおける画像最適化の技術とその効果を解説します。",
    tags: ["Next.js", "画像最適化"],
    date: "2025-07-21",
  },
  {
    id: 10,
    title: "TypeScriptでユニオン型と判別付きユニオンを使いこなす",
    content:
      "ユニオン型と判別付きユニオンは、複雑な型定義を安全に扱うための強力なツールです。使い方やケース分け処理での活用方法を詳しく解説します。",
    tags: ["TypeScript"],
    date: "2025-07-20",
  },
  {
    id: 11,
    title: "フォームバリデーションライブラリ比較：react-hook-form vs Formik",
    content:
      "Reactにおけるフォームバリデーションを扱う代表的なライブラリ2つを比較し、記述量・柔軟性・学習コストの観点からどちらが適しているかを分析します。",
    tags: ["React", "Form"],
    date: "2025-07-19",
  },
];
