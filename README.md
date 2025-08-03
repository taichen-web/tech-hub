# TechHub - Developer Knowledge Sharing App

**TechHub** は、エンジニア同士が技術的な知見・ノウハウを投稿・共有できるシンプルなナレッジプラットフォームアプリです。  
**バックエンドは実装しておらず、DB の代わりに `localStorage` を利用した最小構成**で動作しています。

Next.js（App Router）+ React + TypeScript + Tailwind CSS によって構築され、Markdown形式の投稿、タグ付け、検索、ページネーション、簡易ログイン機能（localStorageベース）などを実装しています。

---



###  機能一覧

- 投稿の作成・編集・削除（CRUD）
- Markdownエディタ対応（HTML表示）
- タグ機能（カンマ区切りで自由入力）
- 投稿の検索（タイトル / タグ）
- ページネーション（10件ごとの表示）
- ログイン状態に応じたUI表示切替（localStorage）
- **バックエンド・DBなし（localStorageでデータを保持）**
- レスポンシブ対応（Tailwind CSS）

---



###  使用技術スタック

| 分類        | 使用技術                      |
|-------------|-------------------------------|
| フロントエンド | Next.js (App Router), React, TypeScript |
| スタイリング | Tailwind CSS, shadcn/ui       |
| 状態管理    | React Context + useReducer     |
| UIコンポーネント | カスタムコンポーネント分割設計      |
| データ保存   | localStorage（簡易DB）        |

---



###  ローカルでの起動方法

---bash 
・依存パッケージをインストール
npm install

・開発サーバー起動（http://localhost:3000）
npm run dev

### ビルド & デプロイ
・本番ビルド
npm run build

・本番モードで起動（localhost:3000）
npm start
(このアプリは Vercel などのホスティングサービスに対応しています。)

---



### ディレクトリ構成（抜粋）

app/ # Next.js App Router Pages
components/ # UIコンポーネント
context/ # 投稿一覧状態管理用Context
data/ # 初期モック投稿
public/ # 静的ファイル
styles/ # グローバルCSS
types/ # 型定義
README.md


---



### 開発者
GitHubアカウント:taichen-web



### 備考
バックエンドは未実装で、データはブラウザの localStorage に保存されます。

本アプリは簡易的な認証（localStorageベース）で動作しており、本番環境用のセキュリティ対策は未実装です。

投稿内容は Markdown を HTML に変換して表示しており、将来的に sanitize-html 等によるXSS対策が必要になる可能性があります。