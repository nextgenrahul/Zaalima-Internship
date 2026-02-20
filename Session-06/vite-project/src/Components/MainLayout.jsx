import Content from "./Content";
import Header from "./Header";
export default function MainLayout({theme, toggleTheme}){
    return (
        <div>
            <Header theme={theme} toggleTheme={toggleTheme} />
            <Content theme={theme} />
        </div>
    )

}