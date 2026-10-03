import './LanguageSwitcher.css';

interface LanguageSwitcherProps {
    language: string
    isLoading: boolean
    changeLanguage: (value: 'pt-BR' | 'en-US') => Promise<void>
}
export const LanguageSwitcher = ({ language, isLoading, changeLanguage }: LanguageSwitcherProps) => {
    return (
        <div className="language-switch" role="group" aria-label="Idioma">
            <button
                className="language-option"
                type="button"
                aria-pressed={language === 'pt-BR'}
                disabled={isLoading}
                onClick={() => void changeLanguage('pt-BR')}
            >
                Português
            </button>
            <button
                className="language-option"
                type="button"
                aria-pressed={language === 'en-US'}
                disabled={isLoading}
                onClick={() => void changeLanguage('en-US')}
            >
                English
            </button>
        </div>
    )
}