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
    [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
    ['','AUS','CAN','FRA','GER','NETH','NZ','NOR','SWE','SWIZ','UK','US'],
    ['  '],
    ['OVERALL RANKING',1,9,10,8,3,4,5,6,6,2,11],
    ['  '],
    ['Quality',2,6,9,8,4,3,10,11,7,1,5],
    ['  '],
    ['Access',4,10,9,2,1,7,5,6,8,3,11],
    ['  '],
    ['Administrative Burden',1,6,11,6,9,2,4,5,8,3,10],
    ['  '],
    ['Equity',7,9,10,6,2,8,5,3,4,1,11],
    ['  '],
    ['Health Care Outcomes',1,9,5,8,6,7,3,2,4,10,11],
    ['  '],
    ['Health Spending per Capita*',"$4,207","$4,724","$4,620","$5,119","$5,277","$4,038","$6,432","$5,306","$6,787","$4,094","$9,364"]
]
    
d3.select("#testContainer")
    .append("table")
    .style("border-collapse", "collapse")
    
    .selectAll("tr")
    .data(dataset)
    .enter()
    .append("tr")
    
    .selectAll("td")
    .data(function(d){return d;})
    .enter().append("td")
    .style("padding", "10px")
    .style('display', function(d){
        if(d === ' ') return 'none';
    })
    .attr('colspan', function(d){
        console.log(d[0])
        if(d[0] === '  ') return 12
    })
    .on("mouseover", function(){d3.select(this).style("background-color", "aliceblue")}) 
    .on("mouseout", function(){d3.select(this).style("background-color", "white")}) 
    .text(function(d){return d;})
    .style("font-size", "12px");