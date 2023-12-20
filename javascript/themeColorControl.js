let themeButtons = document.querySelectorAll(".theme-buttons");

themeButtons.forEach((color) => {
  color.addEventListener("click", () => {
    // Retrieve color information from attributes
    let dataBackgroundColor = color.getAttribute("data-background-color");
    let dataPrimaryColor = color.getAttribute("data-primary-color");
    let dataPrimaryAccentColor = color.getAttribute(
      "data-primary-accent-color"
    );
    let dataSeondaryAccentColor = color.getAttribute(
      "data-secondary-accent-color"
    );

    // Updates CSS theme color variables
    document
      .querySelector(":root")
      .style.setProperty("--secondary-accent-color", dataSeondaryAccentColor);
    document
      .querySelector(":root")
      .style.setProperty("--background-color", dataBackgroundColor);
    document
      .querySelector(":root")
      .style.setProperty("--primary-accent-color", dataPrimaryAccentColor);
    document
      .querySelector(":root")
      .style.setProperty("--primary-color", dataPrimaryColor);

    // Updates Global Color Variables Used in Grid Visualization
    COLOR._LIGHT_ACCENT_COLOR = dataSeondaryAccentColor;
    COLOR._DARK_ACCENT_COLOR = dataPrimaryAccentColor;

    // Updates Grid Data Point Colors On Click
    billboardGridAnchor
      .selectAll(".circle-data")
      .style("stroke", COLOR._LIGHT_ACCENT_COLOR)
      .style("fill", COLOR._LIGHT_ACCENT_COLOR);
  });
});
