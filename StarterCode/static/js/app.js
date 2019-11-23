// from data.js
var tableData = data;

// YOUR CODE HERE!
// Variable Declaration
var tbody = d3.select("tbody");

// Build Table
function buildTable(data){
    tbody.html("");
    // Loop Through `data` 
    data.forEach((dataRow) => {
        // Append Table Row `tr` to the Table Body `tbody`
        var row = tbody.append("tr");
        Object.values(dataRow).forEach((value) => {
            // Append a Cell to the Row for Each Value
            let cell = row.append("td");
            cell.text(value);
        });
    })
}
// How to handle the click
function handleClick(){
    // Prevents the Page from Refreshing
    d3.event.preventDefault();
    // Select datetime object
    let date = d3.select("#datetime").property("value");
    let filterData = tableData;

    // Check if a Date was Entered & Filter Data
    if(date) {
        // filter() uses the custom function as its argument
        tableData = filterData.filter((row) => row.datetime === date);
    }
    // Build Table with Filtered Data
    buildTable(tableData);
}
d3.selectAll("#filter-btn").on("click", handleClick);
// Build Table with data.js 
buildTable(tableData);