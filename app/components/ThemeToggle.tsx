"use client"


import { useTheme } from "next-themes"
const ThemeToggle = () => {
    const { theme, setTheme } = useTheme()

    return (
        <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>Toggle Theme</button>
    )
}

export default ThemeToggle