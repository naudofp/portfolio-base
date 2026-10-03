export type Language = 'pt-BR' | 'en-US'
export type Theme = 'light' | 'dark'

async function request<T>(url: string, options?: RequestInit): Promise<T> {
    const response = await fetch(`/api/${url}`, options)

    if (!response.ok) {
        throw new Error('Não foi possível atualizar as preferências.')
    }

    return response.json() as Promise<T>
}

const portfolioAPI = {
    getLanguage: () => request<{ language: Language }>('language'),
    getTheme: () => request<{ theme: Theme }>('theme'),
    updateLanguage: (language: Language) =>
        request<{ language: Language }>('language', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ language }),
        }),
    updateTheme: (theme: Theme) =>
        request<{ theme: Theme }>('theme', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ theme }),
        }),
}

export default portfolioAPI
