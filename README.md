# sato portfolio

資格試験インストラクター sato のローカルポートフォリオです。外部ライブラリや画像配信サービスへの依存はありません。

## 表示する

`index.html` をブラウザで開くか、Node.js を使って以下を実行してください。

```sh
npm start
```

http://localhost:3000 にアクセスします。

## 内容の編集

- `index.html`: プロフィールと文章
- `style.css`: デザインとスマートフォン表示
- `script.js`: フッターの年表示

「大切にすること」の文章は提案原稿です。担当資格・経歴・実績は未掲載です。お問い合わせは準備中の表示で、送信機能はありません。公開前に実際の活動内容と連絡先に合わせて調整してください。

## GitHub Pages

`.github/workflows/pages.yml` により、`main` へのpush時に自動公開します。Actionsタブの「Deploy portfolio to GitHub Pages」から手動実行もできます。

リポジトリの Settings → Pages → Build and deployment → Source は **GitHub Actions** に設定します。

公開先: https://moai-okinawa.github.io/sato_port1/

ビルドは不要です。公開するファイルは `index.html`、`style.css`、`script.js` のみです。Node.jsのサーバーやREADMEは配信しません。

## 電工ラボ

ポートフォリオの「電工ラボ」から `denko/` の学習ツールを開けます。PagesはこのフォルダのHTML・CSS・JavaScriptも公開します。更新する場合は `denko/` の該当ファイルを編集してください。

## Cloudflare 版の電工ラボ

Cloudflare Workers に GitHub の `moai-okinawa/sato_port1` を接続する構成です。ポートフォリオは公開し、電工ラボと記録APIには Cloudflare Access を適用します。解答、苦手問題、学習日、模擬試験の結果は D1 に記録され、同じアカウントで共有できます。

1. Cloudflare で D1 データベース `denko-study` を作成し、`wrangler.jsonc` の `database_id` をそのIDに差し替えます。D1 コンソールで `cloudflare/schema.sql` を実行します。
2. Zero Trust の **Access → Applications** で Self-hosted アプリを作成し、Cloudflare で管理する公開ドメインの `/denko` と `/denko/*` を同じアプリに登録します。ログイン方法は **One-time PIN**、Allow ポリシーは受講生個別のメールアドレスに設定します。
3. Cloudflare の **Workers & Pages** で **Worker** を作成して GitHub のリポジトリと `main` を接続します。デプロイコマンドは `npx wrangler deploy`、ビルドは Wrangler の設定で実行します。Worker の **Variables and Secrets** に `ACCESS_TEAM_URL`（例 `https://my-team.cloudflareaccess.com`、末尾スラッシュなし）と、手順2で作成した Access アプリの **Application Audience (AUD)** を `ACCESS_AUD` として設定します。Worker に同じ独自ドメインを割り当てます。
4. 未ログイン、許可済みのメール、未登録のメールでアクセスを確認します。別ブラウザーで同じ受講生の記録が表示されることと、別の受講生に記録が表示されないことも確認します。
5. 受講生限定として案内する前に、旧 GitHub Pages と他の公開先から電工ラボへの直接アクセスを停止します。問題データ自体を限定する場合は、ソースリポジトリの公開範囲も見直してください。公開済みのコピーは回収できません。

Cloudflare 版は初回ログイン時に空の記録から始まります。旧サイトのブラウザー保存記録は旧サイトのオリジンにあり、自動では移行されません。従来の `npm start` ではブラウザー保存で学習できます。
