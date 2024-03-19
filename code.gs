// Global constants
const SHEET_NAME = 'score';

function doGet() {
 return HtmlService.createHtmlOutputFromFile('index');
}

function getImageBase64(url) {
 const response = UrlFetchApp.fetch(url);
 const base64 = Utilities.base64Encode(response.getContent());
 return base64;
}

function logError(error) {
 const ss = SpreadsheetApp.getActiveSpreadsheet();
 const logsSheet = ss.getSheetByName("logs");
 if (logsSheet) {
   const timestamp = new Date();
   const errorMessage = error.message;
   const errorStack = error.stack;
   logsSheet.appendRow([timestamp, errorMessage, errorStack]);
 } else {
   console.error("Logs sheet not found");
 }
}

// 関数の目的: スプレッドシートIDをスクリプトのプロパティから取得する
function getSpreadsheetId() {
 const scriptProperties = PropertiesService.getScriptProperties();
 return scriptProperties.getProperty('spreadsheetId');
}

function recordScoreToSpreadsheet(spreadsheetId, scoreData) {
  const sheet = SpreadsheetApp.openById(spreadsheetId).getSheetByName(SHEET_NAME);
  const lastRow = sheet.getLastRow();
  sheet.appendRow([scoreData.score]);

  // ランクを計算して返す
  const scores = sheet.getRange(2, 1, lastRow, 1).getValues().flat();
  scores.push(scoreData.score); // 変更: 新しいスコアを追加
  scores.sort((a, b) => b - a); // スコア降順でソート

  const rank = scores.indexOf(scoreData.score) + 1;
  const totalScores = scores.length;
  const sameScoreCount = scores.filter((score) => score === scoreData.score).length;

  if (sameScoreCount > 1) {
    const sameScoreStartIndex = scores.indexOf(scoreData.score);
    const sameScoreEndIndex = sameScoreStartIndex + sameScoreCount - 1;
    return { score: scoreData.score, rank: rank, description: `${rank}位 (${sameScoreStartIndex + 1}〜${sameScoreEndIndex + 1}位)` };
  } else {
    return { score: scoreData.score, rank: rank, description: `${rank}位` }; // 変更: 位を追加
  }
}
