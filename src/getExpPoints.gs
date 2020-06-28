function getExpPoints(sheet, rowCount) {
  var expPoints = [];
  var range = sheet.getRange(3, 4, rowCount);
  var values = range.getValues();
      
  for (var row in values) {
    for (var col in values[row]) {
      expPoints.push(values[row][col])
    }
  }
  
  return expPoints;
}
