'use strict';

var data = [];

for (var i=0; i < items.length; i++) {
  if (typeof items[i]['coords'] === "object") {
    data.push(items[i]);
  }
}

// set the dimensions and margins of the graph
var margin = {top: 50, right: 50, bottom: 50, left: 50},
    w = window.innerWidth - 100,
    h = window.innerHeight - 100,
    width =  w - margin.left - margin.right,
    height = h - margin.top - margin.bottom;

// append the svg obgect to the body of the page
// appends a 'group' element to 'svg'
// moves the 'group' element to the top left margin
var svg = d3.select("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform",
  "translate(" + margin.left + "," + margin.top + ")");

// d3.json("/data.json", function(error, data) {
//   if (error) throw error;

  var x = d3.scaleLinear().domain([-100, 100]).range([10, width]);
  var y = d3.scaleLinear().domain([-100, 100]).range([height, 10]);


//x axis
svg.append("path")
  .attr("class","axis")
  .attr("d","M0,"+height/2+" L"+width+","+height/2);

//y axis
svg.append("path")
  .attr("class","axis")
  .attr("d","M"+width/2+",0 L"+width/2+","+height);

  // var xAxisLabel = 'Type of Flight';
  // var yAxisLabel = 'Free Alcohol';

  var pad = 20;

  // used for the tooltips
  var div = d3.select("body").append("div")
    .attr("class", "tooltip")
    .style("opacity", 0);

  var makeColor = function(d) {
    return {
      "true": {
        "true": "#16a085",
        "false": "#2980b9"
      },
      "false": {
        "true": "#8e44ad",
        "false": "#e74c3c"
      }
    }[d.coords.x < 0][d.coords.y < 0];
  };

  var color = d3.scaleOrdinal()
    .range(["#16a085", "#2980b9", "#8e44ad","#e74c3c"]);

  svg
    .selectAll("dot")
    .data(data)
    .enter()
    .append("circle")
    .attr("r", function(d) { return d["radius"]; })
    .attr("cx", function(d) { return x(d['coords']['x']); })
    .attr("cy", function(d) { return y(d['coords']['y']); })
    .attr("fill", function(d) { return makeColor(d); })
    .attr("fill-opacity", 0.5)
    .attr("stroke", function(d) { return makeColor(d); })
    .on("mouseover", function(d) {
      div.transition()
        .duration(200)
        .style("opacity", 1);

    div.html(d.name)
      .style("left", (d3.event.pageX) + "px")
      .style("top", (d3.event.pageY - 20) + "px");

    })
    .on("mouseout", function(d) {
      div.transition()
        .duration(500)
        .style("opacity", 0);
    });

    var legendSpacing = 4;
    var legendRectSize = 18;

    var legend = svg.selectAll('.legend')                 
      .data(color.range())                    
      .enter()                                              
      .append('g')                                            
      .attr('class', 'legend')                                
      .attr('transform', function(d, i) {                     
        var height = legendRectSize + legendSpacing;          
        var offset =  height * color.range().length / 2;     
        var horz = -2 * legendRectSize;                       
        var vert = i * height - offset;                       
        return 'translate(' + horz + ',' + vert + ')';        
      });

   legend.append('rect')                                     
      .attr('width', legendRectSize)                          
      .attr('height', legendRectSize)                         
      .style('fill', color)                                   
      .style('stroke', color);                                

    legend
      .data([
        {"label": 'international, no free alcohol'},
        {"label": 'international, free alcohol'},
        {"label": 'domestic, free alcohol'},
        {"label": 'domestic, no free alcohol'},
        ])

    legend.append('text')                                     
      .attr('x', legendRectSize + legendSpacing)              
      .attr('y', legendRectSize - legendSpacing)              
      .text(function(d) { return d.label; });                                                

