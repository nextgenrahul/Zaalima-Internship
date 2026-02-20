import { useState } from "react"
import MainLayout from "./Components/MainLayout";
function App() {

  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => {
      prev == "light" ? "dark" : "light"
    });
  }
  return (
    <>
      <div style={{ background: theme == "light" ? "white" : "black", color: theme == "light" ? "black" : "white" }}>

        <MainLayout theme={theme} toggleTheme={toggleTheme} />

      </div>
    </>
  )
}

export default App
