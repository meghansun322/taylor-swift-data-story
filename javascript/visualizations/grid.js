/// BILLBOARD SETUP - Global ///
var billboardGridAnchor = svg
  .append("g")
  .attr("class", "billboardChart")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// Billboard Grid Visualization x and y axis scales
var y = d3.scaleBand().range([0, 300]).domain(d3.range(gridRows));
var x = d3.scaleBand().range([0, 700]).domain(d3.range(gridCols));

// FUNCTION: July Top 200 Billboard Grid
function showJulyBillboardGrid() {
  buildBillboardGrid(julyDataset);

  billboardGridAnchor
    .selectAll(".circle-data")
    .transition()
    .duration(1000)
    .delay(100)
    .style("stroke", COLOR._1989_BLUE)
    .style("fill", COLOR._1989_BLUE);
}

// FUNCTION: October 2023 Top 200 Billboard Grid
function currrentBillboardGrid() {
  buildBillboardGrid(octoberDataset);

  billboardGridAnchor
    .selectAll("circle")
    .transition()
    .duration(1000)
    .delay(100)
    .style("stroke", function (d) {
      return d.artist == "Taylor Swift"
        ? COLOR._ACCENT_COLOR
        : COLOR._1989_BLUE;
    })
    .style("fill", function (d) {
      return d.artist == "Taylor Swift"
        ? COLOR._ACCENT_COLOR
        : COLOR._1989_BLUE;
    });
}

// FUNCTION: July Top 200 Billboard Grid Highlighting Taylor
function taylorInChart() {
  buildBillboardGrid(julyDataset);

  billboardGridAnchor
    .selectAll(".circle-data")
    .transition()
    .duration(1000)
    .delay(100)
    .style("stroke", function (d) {
      return d.artist == "Taylor Swift"
        ? COLOR._ACCENT_COLOR
        : COLOR._1989_BLUE;
    })
    .style("fill", function (d) {
      return d.artist == "Taylor Swift"
        ? COLOR._ACCENT_COLOR
        : COLOR._1989_BLUE;
    });
}

// FUNCTION: Hides Billboard Visualization
function hideBillboard() {
  d3.selectAll(".circle-data")
    .transition()
    .duration(2000)
    .style("opacity", 0)
    .remove();
  d3.select(".billboardChart").transition().duration(2000).style("opacity", 0);
}

// HELPER FUNCTION: to Build Billboard Grid
function buildBillboardGrid(data) {
  d3.select(".billboardChart").transition().duration(2000).style("opacity", 1);

  // creates circle data points
  billboardGridAnchor
    .selectAll("circle")
    .data(data)
    .enter()
    .append("circle")
    .attr("class", "circle-data")
    .attr("id", function (d) {
      return "id" + d.title;
    })
    .attr("cx", function (d) {
      return x((d.rank - 1) % gridCols);
    })
    .attr("cy", function (d) {
      return y(Math.floor((d.rank - 1) / gridCols));
    })
    .attr("r", 8)
    .style("opacity", 1)
    .style("stroke", COLOR._1989_BLUE)
    .style("fill", COLOR._1989_BLUE)
    .on("mouseover", mouseOver)
    .on("mouseleave", mouseOut);
}

// HELPER FUNCTION: for Mouse Over movement
function mouseOver(e, d) {
  d3.select(this)
    .attr("opacity", 1)
    .attr("stroke-width", 5)
    .attr("stroke", "black");

  d3
    .select("#tooltip")
    .style("left", e.layerX + 10 + "px")
    .style("top", e.layerY - 25 + "px")
    .style("display", "inline-block").html(`
                      <strong>Rank: #${d.rank} </strong>
                      <br> ${d.title} 
                      <br> ${d.artist}`);
}

// HELPER FUNCTION: for Mouse Out Movement
function mouseOut(e, d) {
  d3.select("#tooltip").style("display", "none");

  d3.select(this)
    .transition("mouseout")
    .duration(100)
    .attr("opacity", 0.8)
    .attr("stroke-width", 0);
}
