$( document ).ready(function(){


var w = 400;
var h = 225;
var margin = {
  top: 20,
  bottom: 20,
  left: 20,
  right: 20
};
var width = w - margin.left - margin.right;
var height = h - margin.top - margin.bottom;

function createChart(){
  d3.select("#chart").remove();

  var svg = d3.select("#activeRow").append("svg")
        .attr("id", "chart")
        .attr("width", w)
        .attr("height", h);
  var chart = svg.append("g")
        .classed("display", true)
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
  var x = d3.scale.ordinal()
            .domain(barData.map(function(entry){
              return entry.key;
            }))
            .rangeBands([0, width])
  var y = d3.scale.linear()
            .domain([0, d3.max(barData, function(d){
              return d.value
            })])
            .range([height, 0])
  var ordinalColorScale = d3.scale.category20()

  function addQuestions(params){
    this.selectAll('.select')
        .data([params.questions])
  }

  function plot(params){

    addQuestions.call(chart, params);

    //enter
    this.selectAll('.bar')
          .data(params.data)
          .enter()
            .append('rect')
            .classed('bar', true)
    //update
    this.selectAll('.bar')
            .attr('x', function(d,i){
              return x(d.key)
            })
            .attr('y', function(d,i){
              return y(d.value);
            })
            .attr('height', function(d,i){
              return height - y(d.value)
            })
            .attr('width', function(d,i){
              return x.rangeBand();
            })
            .attr('fill', function(d,i){
              return ordinalColorScale(i)
            })
  }

  plot.call(chart,{
    data:barData,
    axes: {
      x: x,
      y: y
    }
  })

}


var createTable = function(params){
    d3.select("#d3TableContainer")
        .append("table")
        .style("border-collapse", "collapse")
        
        .selectAll("tr")
        .data(params.data)
        .enter()
            .append("tr")
            .classed('softBlue', true)
            .attr('id', function(d,i){
                if(d[0] === 'header') return 'headerRow'
                if(d[0].replace(' ','').length < 3) return ('blank' + i)
                return d[0].replace(' ', '') + 'Row'
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
            if(d === '   ') return 12
        })
        .style('background-color', function(d){
            if(d === '   ') return 'white';
        })
        .text(function(d){return d;})
        .style("font-size", "12px");
        
    $('#d3TableContainer').find("tr:odd").addClass("odd");
    $('#d3TableContainer').find("tr:not(.odd)").hide();
    $('#d3TableContainer').find("tr:first-child").show();
    $('#d3TableContainer').find("#headerRow").addClass('odd')

}

// function openRow(){
  
// }

function sortTable(tableData){//TODO fix problem with matching values -> click Overall, both Swe and Swiz are 6 so they stack
  var newTableData = [];
  var startSortData = d3.select(this).data()[0]
  var sortedStartRowData;

  tableData.forEach(function(row, i){
    if(row[0] === startSortData[0]){
      rowNumberData = startSortData.slice(0, startSortData.length);//remove title
      sortedStartRowData = rowNumberData.sort(function(a,b){
        return a - b
      })
    }
  })

  function rowSort(newRow, row){//TODO handle last row
    row.forEach(function(datum, i){
      newRow[sortedStartRowData.indexOf(startSortData[i])] = row[i]
    })
    return newRow;
  }

  tableData.forEach(function(row, i){
    var newRow = [];

    if(row[row.length - 1].length == 3 ){
       newRow = ['   ']
    }else{

      newRow = rowSort(newRow, row);
    }

    newTableData.push(newRow)
  })
  console.log(newTableData)

  $('#d3TableContainer').empty()
    

  createTable({
    data: newTableData
  })
}

createTable({
    data: tableData
})

d3.selectAll('.odd')
    .on('click', function(){
        // sortTable.call(this, tableData)
        console.log(d3.select(this))

    var alreadyActive = false;
    if($(this).next("tr").find('td').attr('id') === 'activeRow') alreadyActive = true;

    $('#d3TableContainer').find("td").attr('id', '');
    $(this).next("tr").find('td').attr('id','activeRow')
    $('#d3TableContainer').find("tr:not(.odd)").hide();
    $(this).next("tr").toggle();

    if(alreadyActive){
      $(this).next('tr').toggle();
      $(this).next("tr").find('td').attr('id','')
    }

    createChart();
    })



})