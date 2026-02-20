import ThemeToggleButton from "./ThemeToggleButton";

export default function Header({theme, toggleTheme}){
    return (
        <div>
            <h1>This is  Prop drilling</h1>
            <ThemeToggleButton theme={theme} toggleTheme={toggleTheme} />
        </div>
    )

}