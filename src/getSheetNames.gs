function getSheetNames(sheet, count) {
  var names = [];
  var startRow = 6;
  for (var rowIndex = startRow; rowIndex < startRow + count; rowIndex++) {
    var range = sheet.getRange(rowIndex, 1)
    names.push(range.getValues()[0][0])
  }
  return names;
}
