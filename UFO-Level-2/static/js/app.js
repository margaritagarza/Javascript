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
    var cityinserted=document.getElementById("city").value
    var countryinserted=document.getElementById("country").value
    var stateinserted=document.getElementById("state").value
    //filter the data coming from lines
   
    var filter_data = tableData.filter(function(ufoRow){
        if  (cityinserted == "" && countryinserted == "" && stateinserted == "") {
            return (ufoRow['datetime'] == dateinserted) ;
        } else if (dateinserted == "" && countryinserted == "" && stateinserted == "") {
            return (ufoRow['city'] == cityinserted) ;
        } else if (dateinserted == "" && countryinserted == "" && cityinserted == "") {
            return (ufoRow['state'] == stateinserted) ;
        } else if (dateinserted == "" && stateinserted == "" && cityinserted == "") {
            return (ufoRow['country'] == countryinserted) ;
        } else {
            return (ufoRow['datetime'] == dateinserted && ufoRow['city'] == cityinserted && ufoRow['state'] == stateinserted && ufoRow['country'] == countryinserted) ;
        }
    });
    console.log(filter_data);
    showTable(filter_data)
    dateinserted= ""
    countryinserted= ""
    stateinserted= ""
    cityinserted= ""
    
});

document.getElementById("reset-btn").addEventListener("click", function(blank){
    showTable(tableData);
});

showTable(tableData);

showTable(tableData);

