'use strict';

var data = [];

for (var i=0; i < items.length; i++) {
  if (typeof items[i]['coords'] === "object") {
    data.push(items[i]);
  }
}

// set the dimensions and margins of the graph
var margin = {top: 20, right: 20, bottom: 50, left: 50},
    width = 900 - margin.left - margin.right,
    height = 700 - margin.top - margin.bottom;

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

  var x = d3.scaleLinear().domain([-100, 100]).range([0, width]);
  var y = d3.scaleLinear().domain([-100, 100]).range([height, 0]);

  // used for the tooltips
  var div = d3.select("body").append("div")
    .attr("class", "tooltip")
    .style("opacity", 0);

  var makeColor = function(d) {
    return {
      "true": {
        "true": "green",
        "false": "red"
      },
      "false": {
        "true": "orange",
        "false": "blue"
      }
    }[d.coords.x < 0][d.coords.y < 0];
  };

  svg
    .selectAll("dot")
    .data(data)
    .enter()
    .append("circle")
    .attr("r", function(d) { return 15; })
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

// });
