let themeButtons = document.querySelectorAll(".theme-buttons");

themeButtons.forEach((color) => {
  color.addEventListener("click", () => {
    let dataBackgroundColor = color.getAttribute("data-background-color");
    let dataPrimaryColor = color.getAttribute("data-primary-color");
    let dataPrimaryAccentColor = color.getAttribute(
      "data-primary-accent-color"
    );
    let dataSeondaryAccentColor = color.getAttribute(
      "data-secondary-accent-color"
    );

    COLOR._LIGHT_ACCENT_COLOR = dataSeondaryAccentColor;
    COLOR._DARK_ACCENT_COLOR = dataPrimaryAccentColor;

    console.log(dataBackgroundColor);
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
  });
});
