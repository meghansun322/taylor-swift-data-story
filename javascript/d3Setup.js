//variables for the font family, and some colors

const COLOR = {
  _1989_BLUE: "#b2dcf4",
  _SPEAKNOW_PURPLE: "#BEA7C4",
  _DEBUT_GREEN: "#BDCFB7",
  _FEARLESS_YELLOW: "#E8C490",
  _RED_MARRON: "#6D3D46",
  _REPUTATION_BLACK: "#000003",
  _LOVER_PINK: "#EAB4CC",
  _FOLKLORE_WHITE: "#f5f1f1;",
  _EVERMORE_BROWN: "#CC9D83",
  _MIDNIGHTS_NAVY: "#464D60",
};

const margin = { top: 90, right: 30, bottom: 90, left: 80 },
  width = 800 - margin.left - margin.right,
  height = 800 - margin.top - margin.bottom;

//10 rows and 10 columns
var numRows = 10;
var numCols = 20;

//x and y axis scales
var y = d3.scaleBand().range([0, 300]).domain(d3.range(numRows));
var x = d3.scaleBand().range([0, 700]).domain(d3.range(numCols));
// Main Component for
var svg = d3
  .select("#chart")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom);

var billboard = svg
  .append("g")
  .attr("class", "billboardChart")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

bar_width = width / 2 + margin.left / 2;
bar_height = height / 2;
bar_margin_left = 120;

var barChartAnchor = svg
  .append("g")
  .attr("class", "barChart")
  .attr("width", bar_width / 2 + margin.left + margin.right)
  .attr("height", bar_height / 2 + margin.bottom + margin.top);

var xAxis = svg
  .append("g")
  .attr("class", "myXaxis")
  .attr("transform", "translate(200," + (bar_height + margin.top / 3) + ")");

var yAxis = svg
  .append("g")
  .attr("class", "myYaxis")
  .attr("transform", "translate(200," + margin.top / 3 + ")");

var mapAnchor = svg.append("g").attr("class", "streamsMap");

var projection = d3
  .geoMercator()
  .center([4, 47]) // GPS of location to zoom on
  .scale(125) // This is like the zoom
  .translate([width / 2 + 20, height / 2 - margin.top + 20]);

var Tooltip = d3
  .select("#chart")
  .append("div")
  .attr("class", "tooltip")
  .style("opacity", 1)
  .style("background-color", "white")
  .style("border", "solid")
  .style("border-width", "2px")
  .style("border-radius", "5px")
  .style("padding", "5px");
