// Setup Using d3
var main = d3.select("main");
var scrolly = main.select("#scrolly");
var figure = scrolly.select("figure");
var article = scrolly.select("article");
var step = article.selectAll(".step");

// initialize the scrollama
var scroller = scrollama();

// Tracks if scroll up happens
var previousIndex = -1;

// generic window resize listener event
function handleResize() {
  // 1. update height of step elements
  var stepH = Math.floor(window.innerHeight * 0.75);
  step.style("height", stepH + "px");

  var figureHeight = window.innerHeight / 2;
  var figureMarginTop = (window.innerHeight - figureHeight) / 2;

  figure
    .style("height", figureHeight + "px")
    .style("top", figureMarginTop - 80 + "px");

  // 3. tell scrollama to update new element dimensions
  scroller.resize();
}

// scrollama event handlers
function handleStepEnter(response) {
  let currentIndex = response.index;

  // add color to current step only
  step.classed("is-active", function (d, i) {
    return i === response.index;
  });

  // update graphic based on step
  switch (currentIndex) {
    case 0:
      showJulyBillboardGrid();
      break;
    case 1:
      taylorInChart();
      break;
    case 2:
      currrentBillboardGrid();
      break;
    case 3:
      if (previousIndex == 4) {
        hideBarChart();
      } else {
        hideBillboard();
      }
      break;
    case 4:
      showBarChart("Revenue");
      break;
    case 5:
      if (previousIndex == 6) {
        hideMap();
      } else {
        hideBarChart();
      }
      break;
    case 6:
      showMap();
      break;
    case 7:
      hideMap();
      break;
    default:
  }
  previousIndex = currentIndex;
}

function setupStickyfill() {
  d3.selectAll(".sticky").each(function () {
    Stickyfill.add(this);
  });
}

function init() {
  setupStickyfill();

  // 1. force a resize on load to ensure proper dimensions are sent to scrollama
  handleResize();

  // 2. setup the scroller passing options
  // 		this will also initialize trigger observations
  // 3. bind scrollama event handlers (this can be chained like below)
  scroller
    .setup({
      step: "#scrolly article .step",
      offset: 0.6,
      debug: false,
    })
    .onStepEnter(handleStepEnter);

  // setup resize event
  window.addEventListener("resize", handleResize);
}

init();
