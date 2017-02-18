'use strict';

// (function () {

    function generateData() {
        var _data = [];
        
        for (var i=0; i < domestic_items.length; i++) {
            console.log(i, domestic_items[i])
            if (typeof domestic_items[i]["domestic"] === "object") {
                _data.push({
                    airline: domestic_items[i]["name"],
                    // s: _.random(400, 401),
                    s: 600,
                    x: domestic_items[i]["domestic"]["x"],
                    y: domestic_items[i]["domestic"]["y"]
                });
            } else {
                continue;
            }
        }

        for (var i=0; i < international_items.length; i++) {
            console.log(i, international_items[i])
            if (typeof international_items[i]["international"] === "object") {
                _data.push({
                    airline: international_items[i]["name"],
                    // s: _.random(400, 401),
                    s: 600,
                    x: international_items[i]["international"]["x"],
                    y: international_items[i]["international"]["y"]
                });
            } else {
                continue;
            }
        }

        return _data;
    }

    // var width = 960,
    // height = 1160;

    // var projection = d3.geoAlbers()
    // .center([0, 55.4])
    // .rotate([4.4, 0])
    // .parallels([50, 60])
    // .scale(1200 * 5)
    // .translate([width / 2, height / 2]);

    var data = generateData();

    var size = d3.scale.linear().range([600, 601]).domain(fc.util.extent().fields(['s'])(data));

    // create a chart with two linear axes
    var chart = fc.chart.cartesian(d3.scale.linear(), d3.scale.linear()).xDomain(fc.util.extent().pad(0.4).fields(['x'])(data)).xLabel('x Label').xBaseline(0).yDomain(fc.util.extent().pad(0.4).fields(['y'])(data)).yOrient('left').yBaseline(0).yTicks(7).yLabel('y Label').margin({ bottom: 20, right: 15, left: 25 });

    // create the point series
    var point = fc.series.point().size(function (d) {
        return size(d.s);
    }).xValue(function (d) {
        return d.x;
    }).yValue(function (d) {
        return d.y;
    }).decorate(function (s) {
        s.attr('d', function (d) {
            if (d.x >= 0 && d.y >= 0) {
                d3.select(this).style({
                    fill: 'green',
                    'fill-opacity': 0.6,
                    stroke: 'green'
                });
            } else if (d.x <= 0 && d.y >= 0) {
                d3.select(this).style({
                    fill: 'red',
                    'fill-opacity': 0.6,
                    stroke: 'red'
                });
            } else if (d.x < 0 && d.y < 0) {
                d3.select(this).style({
                    fill: 'orange',
                    'fill-opacity': 0.6,
                    stroke: 'orange'
                });
            } else if (d.x > 0 && d.y < 0) {
                d3.select(this).style({
                    fill: 'blue',
                    'fill-opacity': 0.6,
                    stroke: 'blue'
                });
            }
        });
    });
    // var tooltip = d3.select("body")
    //     .append("div")
    //     .style("position", "absolute")
    //     .style("z-index", "10")
    //     .style("visibility", "hidden")
    //     .text("a simple tooltip");

    // var textLabel = fc.layoutTextLabel()
    //     .padding(2)
    //     .value(function(d) { return d.airline; });

    // var strategy = fc.layoutRemoveOverlaps(fc.layoutGreedy());

    // create the layout that positions the labels
    // var labels = fc.layoutLabel(strategy)
    //   .size(function(_, i, g) {
    //       // measure the label and add the required padding
    //       var textSize = d3.select(g[i])
    //           .select('text')
    //           .node()
    //           .getBBox();
    //       return [textSize.width + labelPadding * 2, textSize.height + labelPadding * 2];
    //   })
    //   .position(function(d) { return projection([0, 0]); })
    //   .component(textLabel);

    var gridlines = fc.annotation.gridline();

    // add it to the chart
    var multi = fc.series.multi().series([gridlines, point]);

    chart.plotArea(multi);

    function render() {
        d3.select('#vis').datum(data).call(chart).style('fill', 'white');
       
    }
    render();
// })();