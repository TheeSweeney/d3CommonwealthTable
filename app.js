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

var data = [132,71,337,93,78,43,20,16,30,8,17,21];


//****************************   DELETE BOTH LINES BELOW ME   *************************************
$('.testRow').show()
createChart()



function createChart(){
  d3.select("#chart").remove();

  var svg = d3.select("#activeRow").append("svg")
        .attr("id", "chart")
        .attr("width", w)
        .attr("height", h);
  var chart = svg.append("g")
        .classed("display", true)
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
  var x = d3.scale.linear()
            .domain([0, d3.max(data)])
            .range([0, width])
  var y = d3.scale.linear()
            .domain([0, data.length])
            .range([0, height])

  chart.selectAll('.bar')
        .data(data)
        .enter()
          .append('rect')
          .classed('bar', true)
          .attr('x', 0)
          .attr('y', function(d,i){
            return y(i);
          })
          .attr('width', function(d,i){
            return x(d);
          })
          .attr('height', function(d,i){
            return y(1)-1
          })
}



})