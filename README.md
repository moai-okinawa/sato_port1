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
