// ID of the Google Spreadsheet
var sheetID = "1XPmeY6xjK4VGTGxjff_NrPkpzwKk3U0x6p90cqg09dc"  
var url = "https://spreadsheets.google.com/feeds/list/" + sheetID +"/1/public/values?alt=json";

  
  
 
  $.getJSON(url, function(data) {
	  
	var entry = data.feed.entry;

  $(entry).each(function(){
  
  var x = data.feed.entry[5].gsx$name.$t;
  var y = data.feed.entry[5].gsx$age.$t;
  console.log(x);
  document.getElementById("demo").innerHTML=x;
  document.getElementById("demo1").innerHTML=y;
  });

	
	
	

	
  });

  