$( document ).ready(function(){

(function($){//TODO add to helper function file
    $.fn.jExpand = function(){
        var element = this;

        
        $(element).find("tr:odd").addClass("odd");
        $(element).find("tr:not(.odd)").hide();
        $(element).find("tr:first-child").show();

        $(element).find("#headerRow").addClass('odd')

        $(element).find("tr.odd").click(function() {
            var alreadyActive = false;
            if($(this).next("tr").find('td').attr('id') === 'activeRow') alreadyActive = true;

            $(element).find("td").attr('id', '');
            $(this).next("tr").find('td').attr('id','activeRow')
            $(element).find("tr:not(.odd)").hide();
            $(this).next("tr").toggle();

            if(alreadyActive){
              $(this).next('tr').toggle();
              $(this).next("tr").find('td').attr('id','')
            }

            createChart();
        });
        
    }    
})(jQuery); 

$('#exhibitTable').jExpand()



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

var data = [
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
            .domain(data.map(function(entry){
              return entry.key;
            }))
            .rangeBands([0, width])
  var y = d3.scale.linear()
            .domain([0, d3.max(data, function(d){
              return d.value
            })])
            .range([height, 0])
  var ordinalColorScale = d3.scale.category20()

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
    data:data,
    axes: {
      x: x,
      y: y
    }
  })

}



})