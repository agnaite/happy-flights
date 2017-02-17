'use strict';

(function () {

    // test with dummy data
    function generateData() {
        var _data = [];

        // generate data
        // _.times(_.random(30, 50), function (n) {
        //     _data.push({
        //         s: _.random(44, 2000), // size/area of bubble
        //         x: _.random(-100, 100),
        //         y: _.random(-100, 100)
        //     });
        // });

        _data.push({
            airline: "Aegean Airlines",
            s: _.random(44, 2000), // size/area of bubble
            x: _.random(0, 100),
            y: _.random(-100, 0)
        });

        _data.push({
            airline: "Aegean Airlines",
            s: _.random(44, 2000), // size/area of bubble
            x: _.random(-100, 0),
            y: _.random(0, 100)
        });

        return _data;
    }

    var data = generateData();

    var size = d3.scale.linear().range([40, 2000]).domain(fc.util.extent().fields(['s'])(data));

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

    var gridlines = fc.annotation.gridline();

    // add it to the chart
    var multi = fc.series.multi().series([gridlines, point]);

    chart.plotArea(multi);

    function render() {
        d3.select('#vis').datum(data).call(chart).style('fill', 'white');
    }
    render();
})();