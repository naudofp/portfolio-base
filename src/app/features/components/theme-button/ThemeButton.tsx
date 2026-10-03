import { Moon, Sun } from "lucide-react"
import './ThemeButton.css'

interface IThemeButtonProps {
    theme: string
    isLoading: boolean
    toggleTheme: () => Promise<void>
}
export const ThemeButton = ({ theme, isLoading, toggleTheme }: IThemeButtonProps) => {
    return (
        <button
            className="theme-toggle"
            type="button"
            onClick={() => void toggleTheme()}
            aria-label={`Ativar tema ${theme === 'light' ? 'escuro' : 'claro'}`}
            aria-pressed={theme === 'dark'}
            disabled={isLoading}
        >
            {theme === 'light' ? <Moon /> : <Sun />}
        </button>
    )
}