"use client";

import { useEffect, useState } from "react";
import { THEMES, DEFAULT_THEME, THEME_KEY } from "@/lib/themes";
import { applyTheme } from "@/lib/theme-engine";

export default function ThemeSwitcher() {
  const [active, setActive] = useState(DEFAULT_THEME);

  useEffect(() => {
    const saved = localStorage.getItem(THEME_KEY);
    setActive(saved ?? DEFAULT_THEME);
  }, []);

  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const theme = e.target.value;
    applyTheme(theme);
    setActive(theme);
  }

  return (
    <select
      className="theme-dropdown"
      value={active}
      onChange={handleChange}
      aria-label="Theme switcher"
    >
      {THEMES.map((theme) => (
        <option key={theme.id} value={theme.id}>
          {theme.label}
        </option>
      ))}
    </select>
  );
}
