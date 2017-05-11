$( document ).ready(function(){


var w = 432;
var h = 250;
var margin = {
  top: 20,
  bottom: 25,
  left: 20,
  right: 20
};
var width = w - margin.left - margin.right;
var height = h - margin.top - margin.bottom;
var activeSubsection;

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
        .style("font-size", "16px")
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

var initial = true;
var svg;
var chart;
var x;
var y;

function createChart(dataSet){

  // d3.select("#chart").remove();
  if(initial){
    svg = d3.select(".activeRow").append("svg")
          .attr("id", "chart")
          .attr("width", w)
          .attr("height", h);
    chart = svg.append("g")
          .classed("display", true)
          .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    svg.insert('text')//Title
        .attr('x', 35)
        .attr('y', h/2)
        .attr('id', 'directions')
        .html("Select a question or measure to see data")


  }

  x = d3.scale.ordinal()
            .domain(dataSet.map(function(entry){
              return entry.country;
            }))
            .rangeBands([0, width])
  y = d3.scale.linear()
            .domain([0, 100])
            .range([height, 0])
  

  function plot(params){
    //enter

    this.selectAll('.bar')
          .data(params.data)
          .enter()
            .append('rect')
            .classed('bar', true)
    this.selectAll('.barLabel')
          .data(params.data)
          .enter()
            .append('text')
            .classed('barLabel', true)
    if(!initial){

      d3.select('#directions').remove();

      this.selectAll('.percentage')
          .data(params.data)
          .enter()
            .append('text')
            .classed('percentage', true)
      this.selectAll('.noData')
          .data(params.data)
          .enter()
            .append('text')
            .classed('noData', true)
    }
    
    //update
      this.selectAll('.bar')
          .transition()
          .duration(500)
          .attr('x', function(d,i){
            return x(d.country)
          })
          .attr('y', function(d,i){
            return y(d.value);
          })
          .attr('height', function(d,i){
            return d.value < 0 ? 0 : height - y(d.value)
          })
          .attr('width', function(d,i){
            return x.rangeBand() - 3;
          })
      this.selectAll('.percentage')
          .attr('x', function(d,i){
            if(d.value === 0 ){
              return x(d.country) + 2
            }else if(d.value < 10){
              return x(d.country) + 8;
            }else{
              return  x(d.country) + 4;
            }
          })
          .attr('y', function(d,i){
            console.log(d.value < 0)
            if(d.value === 0 || d.value < 0 ){
              return y(0)
            }else if(d.value < 10){
              return y(d.value) - 2;
            }else{
              return (y(d.value) + 15)
            }
            // return d.value < 10 ? y(d.value) : (y(d.value) + 15);
          })
          .text(function(d,i){
            return d.value === 0 ? 'Data' : (d.value + '%');
          })
          .attr('fill', function(d,i){
            return d.value < 10 ? 'black' : 'white';
          })
       this.selectAll('.noData')
          .attr('x', function(d,i){
            return x(d.country) + 7;
          })
          .attr('y', function(d,i){
            return y(d.value) - 15;
          })
          .text(function(d,i){
            return d.value === 0 ? 'No' : '';
          })
    
    this.selectAll('.barLabel')
        .attr('x', function(d,i){
              var bump = 1;
              if(d.country.length === 2){
                bump = 10;
              }else if(d.country.length === 3){
                bump = 3;
              }
              return x(d.country) + bump
            })
        .attr('y', height + 15)
        .text(function(d,i){
          return d.country
        })
  }

  plot.call(chart,{
    data: dataSet,
    axes: {
      x: x,
      y: y
    }
  });

    initial = false;

}

var activeQuestion;

function questionClick(d){

  d3.select('.selectedQuestion').remove()

  var questionId = d.q.split(' ').join('') + 'Id'
  activeQuestion = questionId;

  d3.select(".activeRow")
    .append('text')
    .attr('id', function(){
      return questionId;
    })
    .html(function(){
      return d.q;
    })
    .classed('selectedQuestion', true)
  d3.selectAll('.subsectionBar')
    .style('opacity', function(d,i){
      return (d.questionSet.split(' ').join('') + 'Id') === activeSubsection ? 1 : .3;
    })

  createChart(d.data);
}

function createQuestionSet(){

  var subsectionId = $(this).attr('id')
  var alreadyActive = false;
  var subSectionPassed = false;



  if(subsectionId !== activeSubsection){
    //change plus to minus
    d3.select('#' + subsectionId.slice(0, -2) + 'PlusMinus')
      .html('-')

    activeSubsection = subsectionId;
    
    d3.selectAll('.subsectionBar')
      .style('display', function(){
        var display = subSectionPassed ? 'none' : 'initial';
        if (d3.select(this).attr('id') === activeSubsection) subSectionPassed = true
        return display;
      });
    $('#' + subsectionId).show();
    
    d3.select(this).style('height', '200px');
    
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
          questionClick.call(this, d)
        })



    d3.selectAll('.questionSet')
      .style('border-top', function(){
        if(d3.select(this).attr('id').slice(0,-11) === activeSubsection.slice(0,-2)) return '3px solid rgb(255,96,0)'
      })
  }else{
    //change plus to minus
    d3.select('#' + subsectionId.slice(0, -2) + 'PlusMinus')
      .html('+')
    d3.selectAll('.questionSet')
      .html('')
      .style('border-top', '');
    d3.select(this).style('height', '20px');
    activeSubsection = '';
    $('.subsectionBar').show();
  }
}

function createSubsections(rowId){

  d3.select('#chart').remove();
  initial = true;

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
        .append('text')
          .attr('id', function(d){
            return d.questionSet.split(' ').join('') + 'PlusMinus'
          })
          .style('float', 'right')
          .classed('plusMinus', true)
          .html('+')

  d3.selectAll('.subsectionBar')
    .append('div')
    .style('max-height', '90%')
    .style('overflow', 'auto')
    .classed('questionSet', true)
    .attr('id', function(d, i){
      return d.questionSet.split(' ').join('') + 'QuestionSet'
    })
    
      
          

  d3.selectAll('.subsectionBar')
    .on('click', function(){
      createQuestionSet.call(this)
      d3.select(this).style('opacity', 1)
    })

    createChart(subsectionData.emptyChart)

}

var activeRowId;
function openSubsection(data){
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
      var id = d3.select(this).attr('id');
      if(id !== 'OVERALLRANKINGRow' && id !== 'headerRow'){
        openSubsection.call(this)
        d3.selectAll('.subsectionBar')
          .style('opacity', 1)
      }
    })
})









