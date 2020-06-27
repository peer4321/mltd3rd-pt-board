function getMemos(sheet, rowCount) {
  var memos = [];
  var range = sheet.getRange(3, 9, rowCount);
  var values = range.getValues();
      
  for (var row in values) {
    for (var col in values[row]) {
      memos.push(values[row][col])
    }
  }
  
  return memos;
}
