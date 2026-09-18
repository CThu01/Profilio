import { useEffect, useState } from "react";

const storageKey = "portfolio-theme";

function getInitialTheme() {
  const savedTheme = window.localStorage.getItem(storageKey);
  if (savedTheme === "light" || savedTheme === "dark") return savedTheme;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export default function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem(storageKey, theme);
  }, [theme]);

  return [theme, setTheme];
}
