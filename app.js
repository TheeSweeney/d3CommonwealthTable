$( document ).ready(function(){

(function($){//TODO add to helper function file
    $.fn.jExpand = function(){
        var element = this;

        
        $(element).find("tr:odd").addClass("odd");
        $(element).find("tr:not(.odd)").hide();
        $(element).find("tr:first-child").show();

        $(element).find("#headerRow").addClass('odd')

        $(element).find("tr.odd").click(function() {
            $(element).find("tr:not(.odd)").attr('id', '');
            $(this).next("tr").attr('id','activeRow')

            // $(element).find("tr:not(.odd)").hide();
            $(this).next("tr").toggle();
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
  var svg = d3.select(".oddRow").append("svg")
        .attr("id", "chart")
        .attr("width", w)
        .attr("height", h);
  var chart = svg.append("g")
        .classed("display", true)
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
}

createChart();

})