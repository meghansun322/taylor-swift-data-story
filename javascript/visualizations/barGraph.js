// BAR CHART VISUALIZATION

function hideBarChart() {
  d3.selectAll("#bar-button")
    .transition()
    .duration(2000)
    .style("opacity", 0)
    .remove();
  d3.selectAll("rect").transition().duration(2000).style("opacity", 0).remove();
  d3.select(".myXaxis")
    .transition()
    .duration(2000)
    .style("opacity", 0)
    .remove();
  d3.select(".myYaxis")
    .transition()
    .duration(2000)
    .style("opacity", 0)
    .remove();
}
function updateGraph(selectedVar) {
  bar_width = 460 - margin.left - margin.right;
  bar_height = 400 - margin.top - margin.bottom;
  bar_margin_left = 120;
  g.attr("class", "barChart")
    .attr("width", bar_width / 2 + margin.left + margin.right)
    .attr("height", bar_height / 3 + bar_margin_left + margin.bottom)
    .attr(
      "transform",
      "translate(" + bar_margin_left * 2 + "," + margin.top * 2 + ")"
    );

  x = d3.scaleBand().range([0, bar_width]).padding(0.2);

  // Initialize the Y axis
  y = d3.scaleLinear().range([bar_height, 0]);

  // X axis
  x.domain(
    tourData.map(function (d) {
      return d.tour;
    })
  );
  d3.select(".myXaxis")
    .transition()
    .duration(1000)
    .call(d3.axisBottom(x))
    .selectAll("text")
    .attr("transform", "translate(-10,0)rotate(-45)")
    .style("text-anchor", "end");

  // Add Y axis
  y.domain([
    0,
    d3.max(tourData, function (d) {
      return selectedVar == "Revenue" ? d.revenue * 1.2 : d.attendance * 1.2;
    }),
  ]);
  d3.select(".myYaxis")
    .call(d3.axisLeft(y))
    .transition()
    .duration(1000)
    .style("opacity", 1);

  d3.selectAll("#bar-button").style("display", "inline-block");
  // variable u: map data to existing bars
  var u = svg.selectAll("rect").data(tourData);

  // update bars
  u.enter()
    .append("rect")
    .merge(u)
    .attr("x", function (d) {
      return x(d.tour);
    })
    .attr("width", x.bandwidth())
    .attr("y", (d) => y(0))
    .attr("height", (d) => bar_height - y(0)) // always equal to 0
    .attr("fill", function (d) {
      switch (d.tour) {
        case "Fearless Tour":
          return COLOR._FEARLESS_YELLOW;
        case "Speak Now Tour":
          return COLOR._SPEAKNOW_PURPLE;
        case "Red Tour":
          return COLOR._RED_MARRON;
        case "1989 Tour":
          return COLOR._1989_BLUE;
        case "Reputation Tour":
          return COLOR._REPUTATION_BLACK;
        case "*Eras Tour":
          return COLOR._MIDNIGHTS_NAVY;
        default:
          return "blue";
      }
    })
    .attr("transform", "translate(200, 0)")
    .transition()
    .duration(800)
    .attr("y", function (d) {
      return y(selectedVar == "Revenue" ? d.revenue : d.attendance);
    })
    .attr("height", function (d) {
      return (
        bar_height - y(selectedVar == "Revenue" ? d.revenue : d.attendance)
      );
    })
    .delay((d, i) => {
      return i * 100;
    });
}
