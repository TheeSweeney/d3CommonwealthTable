var dataset = [],
tmpDataset = [],
i, j;

for (i = 0; i < 5; i++) {
    for (j = 0, tmpDataset = []; j < 3; j++) {
        tmpDataset.push("Row:"+i+",Col:"+j);
    }
    dataset.push(tmpDataset);
}

var dataset = [
    ['Country',  'Overall', 'Quality', 'Access', 'Administrative Efficiency', 'Equity', 'Health Care Outcomes', 'Health Spending per Capita'],
    ['AUS', 1, 2, 4, 1, 7, 1, "$4,207"],
    ['CAN', 9, 6, 10, 6, 9, 9, "$4,724"],
    ['FRA', 10, 9, 9, 11,10, 5, "$4,620"],
    ['GER', 8, 8, 2, 6, 6, 8, "$5,119"],
    ['NETH', 3, 4, 1, 9, 2, 6, "$5,277"],
    ['NZ', 4, 3, 7, 2, 8, 7, "$4,038"],
    ['NOR', 5, 10, 5, 4, 5, 3, "$6,432"],
    ['SWE', 6, 11, 6, 5, 3, 2, "$5,306"],
    ['SWIZ', 6, 7, 8, 8, 4, 4, "$6,787"],
    ['UK', 2, 1, 3, 3, 1, 10, "$4,094"],
    ['US', 11, 5, 11, 10, 11, 11, "$9,364"],
]



console.log(dataset)
    
d3.select("#testContainer")
    .append("table")
    .style("border-collapse", "collapse")
    .style("border", "2px black solid")
    
    .selectAll("tr")
    .data(dataset)
    .enter().append("tr")
    
    .selectAll("td")
    .data(function(d){return d;})
    .enter().append("td")
    .style("border", "1px black solid")
    .style("padding", "10px")
    .on("mouseover", function(){d3.select(this).style("background-color", "aliceblue")}) 
    .on("mouseout", function(){d3.select(this).style("background-color", "white")}) 
    .text(function(d){return d;})
    .style("font-size", "12px");