Brick Breaker Game

これは、JavaScriptで作成されたレトロな「ブリックブレイカー」ゲームです。画像の違いからブロックを生成し、ボールを操作してブロックを壊していきます。さまざまなアイテムやボーナスが用意されており、ハイスコアを目指してゲームを楽しめます。

ゲーム紹介
画像の違いからブロックが自動生成されます。
ボールを操作してブロックを壊していきます。
残りのブロック数によってゲームクリアの条件が変わります。
さまざまなアイテムが用意されています (スター、ハート、スカル、サプライズボックスなど)。
ハイスコアを記録し、ランキングを表示します。
タッチスクリーンデバイスにも対応しています。
コード設定
このゲームは、HTMLファイル```(index.html)```とGoogleAppsScriptで構築されています。

```index.html```ファイルには、ゲームのロジックが含まれています。
GoogleAppsScriptには、スプレッドシートの操作とスコアの記録に関する関数が含まれています。
GoogleAppsScriptの設定
新しいGoogleAppsScriptプロジェクトを作成します。
```Code.gs```ファイルに、提供されたコードをコピーして貼り付けます。
スプレッドシートを作成し、```score```という名前のシートを追加します。
スプレッドシートのIDをGoogleAppsScriptのプロパティに設定します。

```
function setSpreadsheetId() {
  const spreadsheetId = "YOUR_SPREADSHEET_ID";
  const scriptProperties = PropertiesService.getScriptProperties();
  scriptProperties.setProperty('spreadsheetId', spreadsheetId);
}
```
setSpreadsheetId()関数を実行し、スプレッドシートIDを設定します。
デプロイして、Webアプリを公開します。


HTMLファイルの設定

画像URLの変更: ```index.html```ファイル内の```imagePairs```配列に画像のURLを追加・変更することで、ゲームで使用される画像を変更できます。

```
let imagePairs = [
  {
    img1Url: "your image url",
    img2Url: "your image url"
  },
  // 他の画像ペアを追加...
];
```
最初に表示したい画像は```imageUrl2```に設定してください。

画像ペアを追加・変更することで、ゲームで使用される画像を自由に変更できます。

これで、ゲームを実行できるはずです。楽しんでください!


