(function () {
  const THEME_KEY = "theme";
  const DEFAULT_THEME = "mocha";
  const THEMES = ["mocha", "latte", "frappe", "macchiato"];

  try {
    const saved = localStorage.getItem(THEME_KEY);
    const theme = THEMES.includes(saved) ? saved : DEFAULT_THEME;
    const root = document.documentElement;

    // Remove all non-default theme classes first
    THEMES.forEach((t) => {
      if (t !== DEFAULT_THEME) root.classList.remove(t);
    });

    // Apply saved theme if it's not the default (mocha)
    if (theme !== DEFAULT_THEME) {
      root.classList.add(theme);
    }
  } catch (e) {
    // ignore errors (e.g., access denied in private mode)
  }
})();
