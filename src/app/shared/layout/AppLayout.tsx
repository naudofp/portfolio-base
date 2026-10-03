import { useEffect, useState } from "react"
import type { Language, Theme } from "../services/portfolioAPI"
import portfolioAPI from "../services/portfolioAPI"
import profilePhoto from '../../../assets/logo.png'
import { ThemeButton } from "../../features/components/theme-button/ThemeButton"
import { LanguageSwitcher } from "../../features/components/language-switcher/LanguageSwitcher"
import './AppLayout.css';

export const AppLayout = ({ children }: React.PropsWithChildren) => {
    const [language, setLanguage] = useState<Language>('pt-BR')
    const [theme, setTheme] = useState<Theme>('light')
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        Promise.all([portfolioAPI.getLanguage(), portfolioAPI.getTheme()])
            .then(([languageResponse, themeResponse]) => {
                setLanguage(languageResponse.language)
                setTheme(themeResponse.theme)
            })
            .finally(() => setIsLoading(false))
    }, [])

    async function changeLanguage(value: Language) {
        await portfolioAPI.updateLanguage(value)
        setLanguage(value)
    }

    async function toggleTheme() {
        const value = theme === 'light' ? 'dark' : 'light'
        await portfolioAPI.updateTheme(value)
        setTheme(value)
    }
    
    return (
        <div className="home-page" data-theme={theme}>
            <header className="site-header">
                <a className="brand" href="#">
                    <img className="brand-image" src={profilePhoto} alt="Logo" />
                </a>

                <div className="header-actions">
                    <ThemeButton 
                        theme={theme}
                        isLoading={isLoading}
                        toggleTheme={toggleTheme} 
                    />
                    <LanguageSwitcher
                        language={language}
                        isLoading={isLoading}
                        changeLanguage={changeLanguage}
                    />
                </div>
            </header>

            { children }

        </div>
    );
}