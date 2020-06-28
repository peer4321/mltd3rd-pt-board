function doGet() {
  var count = 4
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var constantSheet = ss.getSheetByName("Constant");
  var displayNames = getDisplayNames(constantSheet, count);
  var sheetNames = getSheetNames(constantSheet, count);
  
  var data = [];
  for (var i = 0; i < count; i++) {
    var player = new Object();
    var playerSheet = ss.getSheetByName(sheetNames[i]);
    var rowCount = playerSheet.getRange("A3:A").getValues().filter(String).length;
    
    player["name"] = displayNames[i];
    player["timestamps"] = getTimestamps(playerSheet, rowCount);    
    player["points"] = getPoints(playerSheet, rowCount);
    player["exp_points"] = getExpPoints(playerSheet, rowCount);
    player["memos"] = getMemos(playerSheet, rowCount);
    
    data.push(player);
  }

  var json = JSON.stringify(data, null, 2)
  return ContentService.createTextOutput(json).setMimeType(ContentService.MimeType.JSON);
}
