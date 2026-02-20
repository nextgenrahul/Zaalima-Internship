import React from 'react'

const ThemeToggleButton = ({ theme , toggleTheme}) => {
    return (
        <button onClick={toggleTheme}>
            Switch to {theme == "light" ? "Dark" : "light"} mode
        </button>
    )
}

export default ThemeToggleButton