// server.js

// 1. Expressモジュールを読み込む
const express = require('express');
// 2. Expressアプリケーションのインスタンスを作成
const app = express();
// 3. サーバーがリッスンするポート番号を定義
const port = 3000; // 例: 3000番ポート
/*
// 4. ルートパス ('/') へのGETリクエストを処理するルーティングを設定
app.get('/', (req, res) => {
  // res.send() はクライアントに文字列を送信するメソッド
  res.send('Hello, Express! This is your first game server.');
});
*/

const path = require("path");

app.get("/about", (req, res) => {
  const filePath = path.join(__dirname, "pages", "about.html");
  res.sendFile(filePath);
});

app.get("/help", (req, res) => {
  const filePath = path.join(__dirname, "pages", "help.html");
  res.sendFile(filePath);
});

app.use(express.static("public"));

app.get("/status", (req, res) => {
  res.json( { status: "ok" } );
});

// 5. サーバーを起動し、指定したポートでリクエストを待ち受ける
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
  console.log('Ctrl+C でサーバーを停止できます。');
});
