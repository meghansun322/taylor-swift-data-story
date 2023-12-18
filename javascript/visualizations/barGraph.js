/// BAR CHART SETUP - Global ///
var bar_chart_anchor = svg
  .append("g")
  .attr("class", "barChart")
  .attr("width", bar_width / 2 + margin.left + margin.right)
  .attr("height", bar_height / 2 + margin.bottom + margin.top);

svg
  .append("g")
  .attr("class", "barXaxis")
  .attr("transform", "translate(200," + (bar_height + margin.top / 3) + ")");

svg
  .append("g")
  .attr("class", "barYaxis")
  .attr("transform", "translate(200," + margin.top / 3 + ")");

// Bar Chart X and Y bounds
x1 = d3.scaleBand().range([0, bar_width]).padding(0.2);
y1 = d3.scaleLinear().range([bar_height, 0]);

// FUNCTION: Displays and Updates Bar Chart
function showBarChart(selectedVar) {
  // X axis
  x1.domain(
    tourData.map(function (d) {
      return d.tour;
    })
  );

  d3.select(".barXaxis")
    .transition()
    .duration(1000)
    .call(d3.axisBottom(x1))
    .style("opacity", 1)
    .selectAll("text")
    .attr("transform", "translate(-10,0)rotate(-45)")
    .style("text-anchor", "end");

  // Add Y axis
  y1.domain([
    0,
    d3.max(tourData, function (d) {
      return selectedVar == "Revenue" ? d.revenue * 1.2 : d.attendance * 1.2;
    }),
  ]);

  d3.select(".barYaxis")
    .call(d3.axisLeft(y1))
    .transition()
    .duration(1000)
    .style("opacity", 1);

  // Show Buttons
  d3.selectAll("#bar-button")
    .style("display", "inline-block")
    .style("opacity", 1);

  // variable u: map data to existing bars
  var u = bar_chart_anchor.selectAll("rect").data(tourData);

  // update bars
  u.enter()
    .append("rect")
    .merge(u)
    .attr("x", function (d) {
      return x1(d.tour);
    })
    .attr("width", x1.bandwidth())
    .attr("y", (d) => y1(0))
    .attr("height", (d) => bar_height - y1(0)) // always equal to 0
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
    .attr("transform", "translate(200," + margin.top / 3 + ")")
    .transition()
    .duration(800)
    .attr("y", function (d) {
      return y1(selectedVar == "Revenue" ? d.revenue : d.attendance);
    })
    .attr("height", function (d) {
      return (
        bar_height - y1(selectedVar == "Revenue" ? d.revenue : d.attendance)
      );
    })
    .delay((d, i) => {
      return i * 100;
    });
}

// FUNCTION: Hides Bar Chart Visualzation
function hideBarChart() {
  d3.selectAll("#bar-button").transition().duration(2000).style("opacity", 0);
  d3.selectAll("rect").transition().duration(2000).style("opacity", 0).remove();
  d3.select(".barXaxis").transition().duration(2000).style("opacity", 0);
  d3.select(".barYaxis").transition().duration(2000).style("opacity", 0);
}
