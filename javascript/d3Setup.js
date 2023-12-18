// Sets Up Constants and SVG

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
  height = 800 - margin.top - margin.bottom,
  gridRows = 10,
  gridCols = 20,
  bar_width = width / 2 + margin.left / 2,
  bar_height = height / 2,
  bar_margin_left = 120;

// Main Component/Svg for Visualzations
var svg = d3
  .select("#chart")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom);
