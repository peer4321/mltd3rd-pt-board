function getDisplayNames(sheet, count) {
  var names = [];
  var startRow = 12;
  for (var rowIndex = startRow; rowIndex < startRow + count; rowIndex++) {
    var range = sheet.getRange(rowIndex, 2)
    names.push(range.getValues()[0][0])
  }
  return names;
}
