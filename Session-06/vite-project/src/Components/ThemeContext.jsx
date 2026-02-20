import React, { createContext, useState } from "react";

// 1️⃣ Create context
export const ThemeContext = createContext();

// 2️⃣ Create provider component
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  // 3️⃣ Toggle function (must return value)
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;