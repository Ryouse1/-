const fs = require('fs');
const AdmZip = require('adm-zip');

function checkSkin(zipPath) {
  const zip = new AdmZip(zipPath);
  const entries = zip.getEntries().map(e => e.entryName);
  // 必須ファイル例
  const requiredFiles = ['model.moc3', 'model.model3.json'];
  for (let file of requiredFiles) {
    if (!entries.includes(file)) return false;
  }
  // 他の条件（ファイルサイズ、拡張子等）もここに追加
  return true;
}
module.exports = checkSkin;