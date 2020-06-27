function getMaxPoints(sheet, rowCount) {
  var maxPoints = [];
  var range = sheet.getRange(3, 4, rowCount);
  var values = range.getValues();
      
  for (var row in values) {
    for (var col in values[row]) {
      maxPoints.push(values[row][col])
    }
  }
  
  return maxPoints;
}
