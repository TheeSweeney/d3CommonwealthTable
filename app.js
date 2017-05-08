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

var linearColorScale = d3.scale.linear()
                        .domain([0, 10])
                        .range(['#dbf2f2','#044c7f']);

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
                return d[0].split(' ').join('') + 'Row'
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
            if(d === '   ') return 12;
        })
        .text(function(d){
          return d;
        })
        .style("font-size", "12px")
        .classed('leftAlign', function(d){
          if(d.length > 4) return true;
        })
        
    $('#d3TableContainer').find("tr:odd").addClass("odd");
    $('#d3TableContainer').find("tr:not(.odd)").hide();
    $('#d3TableContainer').find("tr:first-child").show();
    $('#d3TableContainer').find("#headerRow").addClass('odd')
    $('#d3TableContainer').find("#blank0").css('display', 'none')


}

createTable({
    data: tableData
})

function createChart(dataSet){

  d3.select("#chart").remove();

  var svg = d3.select(".activeRow").append("svg")
        .attr("id", "chart")
        .attr("width", w)
        .attr("height", h);
  var chart = svg.append("g")
        .classed("display", true)
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
  var x = d3.scale.ordinal()
            .domain(dataSet.map(function(entry){
              return entry.country;
            }))
            .rangeBands([0, width])
  var y = d3.scale.linear()
            .domain([0, d3.max(dataSet, function(d){
              return d.value
            })])
            .range([height, 0])
  

  function addQuestions(params){
    this.selectAll('.select')
        .data([params.questions])
  }

  function plot(params){

    //enter
    this.selectAll('.bar')
          .data(params.data)
          .enter()
            .append('rect')
            .classed('bar', true)
    //update
    this.selectAll('.bar')
            .attr('x', function(d,i){
              return x(d.country)
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
              return linearColorScale(i)
            })
  }

  plot.call(chart,{
    data: dataSet,
    axes: {
      x: x,
      y: y
    }
  });

}

function questionClick(data){
 console.log(data)
 console.log(subsectionData['QualityQuestions'][0].sectionData[0].data)
 createChart(data);
}

function createQuestionSet(){
  $('.subsectionBar').hide();

    var alreadyActive = false;

    if($(this).attr('id') !== activeSubsection){
      activeSubsection = $(this).attr('id');
      $('#' + $(this).attr('id')).show();
      d3.select(this).style('height', '200px')
      d3.select('#' + this.id.slice(0, -2) + 'QuestionSet').selectAll('.subsectionQuestions')
        .data(function(d){
          return d.sectionData
        })
        .enter()
          .append('div')
          .text(function(d){
            return d.q
          })
          .style('height', '50px')
          .classed('question', true)
          .on('click', function(d){
            questionClick.call(this, d.data)
          })


      d3.selectAll('.questionSet')
        .style('border-top', '3px solid rgb(255,96,0)')
    }else{
      d3.selectAll('.questionSet')
        .html('')
        .style('border-top', '')
      d3.select(this).style('height', '20px')
      activeSubsection = '';
      $('.subsectionBar').show();
    }
}


var activeSubsection;
function createSubsections(rowId){

  var activeSubset = subsectionData[rowId.slice(0, -3) + 'Questions'];

  d3.select('.activeRow').selectAll('.subsectionBar')
      .data(activeSubset)
      .enter()
        .append('text')
        .html(function(d){
          return d.questionSet;
        })
        .attr('id', function(d){
          return (d.questionSet.split(' ').join('') + 'Id')
        })
        .style('height', '20px')
        .style('width', '50%')
        .style('position', 'relative')
        .classed('subsectionBar', true)
          .append('div')
          .style('max-height', '100%')
          .style('overflow', 'auto')
          .classed('questionSet', true)
          .attr('id', function(d, i){
            return d.questionSet.split(' ').join('') + 'QuestionSet'
          })
          

  d3.selectAll('.subsectionBar')
  .on('click', function(){
    createQuestionSet.call(this)
  })
}

var activeRowId;
function opentChart(data){
      var alreadyActive = false;
      if($(this).attr('id') === activeRowId) alreadyActive = true;
      
      var rowId = $(this).attr('id');
      activeRowId = rowId
        
      d3.select('.activeRow').classed('activeRow', false);


      
      $('#' + rowId).next("tr").find('td').addClass('activeRow')
      $('#d3TableContainer').find("tr:not(.odd)").hide();
      $('#' + rowId).next("tr").toggle();
      

      if(alreadyActive){
        $('#' + rowId).next('tr').toggle();
        $('#' + rowId).next("tr").find('td').attr('id','')

        activeRowId = 'none'
      }

      createSubsections.call(this, rowId);
}

d3.selectAll('.odd')
    .on('click', function(){
      opentChart.call(this)
    })





})