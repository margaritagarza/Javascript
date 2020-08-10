// from data.js
var tableData = data;


function showTable(d){
    var tbody = d3.select("tbody");

    // add  code for cclearing tbody
    tbody.selectAll("tr").remove();

    d.forEach(function(Ufo) {
        console.log(Ufo);
        var row = tbody.append("tr")

    Object.entries(Ufo).forEach(function([key, value]) {
        console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
        });

    });
}
document.getElementById("filter-btn").addEventListener("click", function(blank){
    var dateinserted=document.getElementById("datetime").value
    //filter the data coming from line 2
    if (dateinserted !== "" ) {
    var filter_data = tableData.filter(function(ufoRow){
        return (ufoRow['datetime'] == dateinserted  ) ;
    });
    console.log(filter_data);
    showTable(filter_data)
       //  block of code to be executed if the condition is true
  } else {
    //  block of code to be executed if the condition is false
    showTable(tableData);
  }
    
});

showTable(tableData);


