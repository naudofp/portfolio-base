import { useState } from 'react'
import './HomePage.css'
import { Moon, Sun } from 'lucide-react'
import { createTheme, ThemeProvider, ToggleButton, ToggleButtonGroup } from '@mui/material'

function HomePage() {
    const [isDarkTheme, setIsDarkTheme] = useState(false)
    const [language, setLanguage] = useState('pt-BR')

    const theme = createTheme({
        palette: {
            mode: isDarkTheme ? 'dark' : 'light',
        },
        components: {
            MuiToggleButton: {
                styleOverrides: {
                    root: ({ theme }) => ({
                        borderColor: theme.palette.divider,
                        color: theme.palette.text.secondary,

                        '&.Mui-selected': {
                            color: theme.palette.mode === 'dark' ? 'var(--color-primary)' : 'var(--color-primary-hover)',
                            backgroundColor: 'color-mix(in srgb, var(--color-primary) 14%, transparent)',
                        },

                        '&.Mui-selected:hover': {
                            backgroundColor: 'color-mix(in srgb, var(--color-primary) 22%, transparent)',
                        },
                    }),
                },
            },
        },
    })

    function toggleTheme() {
        setIsDarkTheme((currentTheme) => !currentTheme)
    }

    const handleLanguageChange = (event: React.MouseEvent<HTMLElement>, newLanguage: string) => {
        if (newLanguage) {
            setLanguage(newLanguage);
        }
    }

    return (
        <ThemeProvider theme={theme}>
            <div className="home-page" data-theme={isDarkTheme ? 'dark' : 'light'}>
                <header className="site-header">
                    <a className="brand" href="#">
                        <span className="brand-mark" aria-hidden="true">p.</span>
                    </a>

                    <div className="header-actions">
                        <button
                            className="theme-toggle"
                            type="button"
                            onClick={toggleTheme}
                            aria-label={`Ativar tema ${isDarkTheme ? 'claro' : 'escuro'}`}
                            aria-pressed={isDarkTheme}
                        >
                            {isDarkTheme ? <Moon /> : <Sun />}
                        </button>

                        <ToggleButtonGroup
                            color="primary"
                            value={language}
                            exclusive
                            size="small"
                            onChange={handleLanguageChange}
                            aria-label="Platform"
                        >
                            <ToggleButton value="pt-BR">Português</ToggleButton>
                            <ToggleButton value="en-US">English</ToggleButton>
                        </ToggleButtonGroup>
                    </div>
                </header>
            </div>
        </ThemeProvider>
    )
}

export default HomePage