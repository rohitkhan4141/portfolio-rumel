import { useEffect, useState } from "react";

function useThemeSwitcher() {
  const theme =
    typeof window !== "undefined" ? localStorage.getItem("mode") : null;
  const [mode, setMode] = useState(theme);

  useEffect(() => {
    window.addEventListener("storage", setPreferedTheme);
    return () => {
      window.removeEventListener("storage", setPreferedTheme);
    };
  }, []);

  const setPreferedTheme = () => {
    const _mode = localStorage.getItem("mode");
    if (_mode) {
      setMode(_mode);
    } else {
      setMode("dark");
    }
  };

  useEffect(() => {
    if (mode === "light") {
      document.body.classList.add("light-theme");
      if (typeof window !== "undefined") {
        localStorage.setItem("mode", "light");
      }
    } else {
      document.body.classList.remove("light-theme");
      if (typeof window !== "undefined") {
        localStorage.setItem("mode", "dark");
      }
    }
  }, [mode]);

  const handleTheme = () => {
    setMode((mode) => (mode === "dark" ? "light" : "dark"));
  };

  return {
    mode: mode,
    handleTheme: handleTheme,
  };
}

export default useThemeSwitcher;
