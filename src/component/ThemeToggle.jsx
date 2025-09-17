import { useTheme, useThemeDispatch } from "./ThemeContext/ThemeContext";

export default function ThemeToggle() {
  const theme = useTheme();
  const setTheme = useThemeDispatch();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-white px-3 py-1 rounded transition-colors duration-300"
    >
      {theme === "dark" ? "🌞 Light Mode" : "🌙 Dark Mode"}
    </button>
  );
}