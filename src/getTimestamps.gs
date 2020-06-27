function getTimestamps(sheet, rowCount) {
  var timestamps = [];
  var range = sheet.getRange(3, 1, rowCount);
  var values = range.getValues();
      
  for (var row in values) {
    for (var col in values[row]) {
      timestamps.push(values[row][col])
    }
  }
  
  return timestamps;
}
