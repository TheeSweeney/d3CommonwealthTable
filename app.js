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
  top: 58,
  bottom: 100,
  left: 80,
  right: 40
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
}



})