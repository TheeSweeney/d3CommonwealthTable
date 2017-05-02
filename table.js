//create table
d3.select("#d3TableContainer")
    .append("table")
    .style("border-collapse", "collapse")
    
    .selectAll("tr")
    .data(tableData)
    .enter()
    .append("tr")
    .classed('softBlue', true)
    .attr('id', function(d){
        if(d[0] === 'header') return 'headerRow'
    })
    .classed('bookEnd', function(d){
      if(d[0] === 'OVERALL RANKING' || d[0] === 'Health Spending per Capita*') return true  
    })
    
    .selectAll("td")
    .data(function(d){return d;})
    .enter().append("td")
    .style("padding", "10px")
    .style('display', function(d){
        if(d === ' ') return 'none';
    })
    .style('color', function(d){
        if(d === 'header') return 'rgb(4,76,127)';
    })
    .attr('colspan', function(d){
        if(d === '  ') return 12
    })
    .style('background-color', function(d){
        if(d === '  ') return 'white';
    })
    .text(function(d){return d;})
    .style("font-size", "12px");