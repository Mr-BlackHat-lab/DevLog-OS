(function () {
  try {
    const theme = localStorage.getItem("theme");

    if (theme === "mocha") {
      document.documentElement.classList.add(theme);
    }
  } catch (e) {
    // ingnore
  }
})();
