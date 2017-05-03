var ascending = function(a,b){
  return a - b
}

function sortTable(tableData){//TODO fix problem with matching values -> click Overall, both Swe and Swiz are 6 so they stack
  var newTableData = [];
  var startSortData = d3.select(this).data()[0]
  var sortedStartRowData;

  tableData.forEach(function(row, i){
    if(row[0] === startSortData[0]){
      rowNumberData = startSortData.slice(0, startSortData.length);//remove title
      sortedStartRowData = rowNumberData.sort(ascending)
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


var tableData = [
    [' '],
    ['header','AUS','CAN','FRA','GER','NETH','NZ','NOR','SWE','SWIZ','UK','US'],
    ['   '],
    ['OVERALL RANKING',1,9,10,8,3,4,5,6,6,2,11],
    ['   '],
    ['Quality',2,6,9,8,4,3,10,11,7,1,5],
    ['   '],
    ['Access',4,10,9,2,1,7,5,6,8,3,11],
    ['   '],
    ['Administrative Burden',1,6,11,6,9,2,4,5,8,3,10],
    ['   '],
    ['Equity',7,9,10,6,2,8,5,3,4,1,11],
    ['   '],
    ['Health Care Outcomes',1,9,5,8,6,7,3,2,4,10,11],
    ['   '],
    ['Health Spending per Capita*',"$4,207","$4,724","$4,620","$5,119","$5,277","$4,038","$6,432","$5,306","$6,787","$4,094","$9,364"]
]



var barData = [
  {key: "Glazed",   value: 132},
  {key: "Jelly",    value: 71},
  {key: "Holes",    value: 200},
  {key: "Sprinkles",  value: 93},
  {key: "Crumb",    value: 78},
  {key: "Chocolate",  value: 43},
  {key: "Coconut",  value: 20},
  {key: "Cream",    value: 16},
  {key: "Cruller",  value: 30},
  {key: "Éclair",   value: 8},
  {key: "Fritter",  value: 17},
  {key: "Bearclaw",   value: 21}
];












































