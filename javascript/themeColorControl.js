let themeButtons = document.querySelectorAll(".theme-buttons");

themeButtons.forEach((color) => {
  color.addEventListener("click", () => {
    let dataMainColor = color.getAttribute("data-main-color");
    let dataAccentColor = color.getAttribute("data-accent-color");
    COLOR._MAIN_COLOR = dataMainColor;
    COLOR._ACCENT_COLOR = dataAccentColor;
    document
      .querySelector(":root")
      .style.setProperty("--accent-color", dataAccentColor);
    document
      .querySelector(":root")
      .style.setProperty("--main-color", dataMainColor);
  });
});
