function getPoints(sheet, rowCount) {
  var points = [];
  var range = sheet.getRange(3, 2, rowCount);
  var values = range.getValues();
      
  for (var row in values) {
    for (var col in values[row]) {
      points.push(values[row][col])
    }
  }
  
  return points;
}
