// July Top 200 Billboard Grid
function showJulyBillboardGrid() {
  buildBillboardGrid(julyDataset);

  billboard
    .selectAll(".circle-data")
    .transition()
    .duration(1000)
    .delay(100)
    .style("stroke", COLOR._1989_BLUE)
    .style("fill", COLOR._1989_BLUE);
}

function currrentBillboardGrid() {
  buildBillboardGrid(octoberDataset);

  billboard
    .selectAll("circle")
    .transition()
    .duration(1000)
    .delay(100)

    .style("stroke", function (d) {
      return d.artist == "Taylor Swift"
        ? COLOR._MIDNIGHTS_NAVY
        : COLOR._1989_BLUE;
    })
    .style("fill", function (d) {
      return d.artist == "Taylor Swift"
        ? COLOR._MIDNIGHTS_NAVY
        : COLOR._1989_BLUE;
    });
}

function taylorInChart() {
  buildBillboardGrid(julyDataset);

  billboard
    .selectAll(".circle-data")
    .transition()
    .duration(1000)
    .delay(100)
    .style("stroke", function (d) {
      return d.artist == "Taylor Swift"
        ? COLOR._MIDNIGHTS_NAVY
        : COLOR._1989_BLUE;
    })
    .style("fill", function (d) {
      return d.artist == "Taylor Swift"
        ? COLOR._MIDNIGHTS_NAVY
        : COLOR._1989_BLUE;
    });
}

// Helper to Build Billboard Grid
function buildBillboardGrid(data) {
  d3.select(".billboardChart").transition().duration(2000).style("opacity", 1);
  // creates circle data points
  billboard
    .selectAll("circle")
    .data(data)
    .enter()
    .append("circle")
    .attr("class", "circle-data")
    .attr("id", function (d) {
      return "id" + d.title;
    })
    .attr("cx", function (d) {
      console.log(d.rank + d.title);
      return x((d.rank - 1) % numCols);
    })
    .attr("cy", function (d) {
      return y(Math.floor((d.rank - 1) / numCols));
    })
    .attr("r", 8)
    .style("opacity", 1)
    .style("stroke", COLOR._1989_BLUE)
    .style("fill", COLOR._1989_BLUE)
    .on("mouseover", mouseOver)
    .on("mouseleave", mouseOut);
}

function hideBillboard() {
  d3.selectAll(".circle-data")
    .transition()
    .duration(2000)
    .style("opacity", 0)
    .remove();
  d3.select(".billboardChart").transition().duration(2000).style("opacity", 0);
}
// Helper Function for Mouse movement
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

function mouseOut(e, d) {
  d3.select("#tooltip").style("display", "none");

  d3.select(this)
    .transition("mouseout")
    .duration(100)
    .attr("opacity", 0.8)
    .attr("stroke-width", 0);
}
