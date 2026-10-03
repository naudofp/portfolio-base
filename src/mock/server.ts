import { createServer, Response } from 'miragejs'

type Language = 'pt-BR' | 'en-US'
type Theme = 'light' | 'dark'

const preferences = {
    language: 'pt-BR' as Language,
    theme: 'light' as Theme,
}

createServer({
    seeds() {
        preferences.language = localStorage.getItem('language') as Language || 'pt-BR';
        preferences.theme = localStorage.getItem('theme') as Theme || 'light';
    },
    routes() {
        this.namespace = 'api'

        this.get('/language', () => ({ language: preferences.language }))

        this.put('/language', (_schema, request) => {
            const { language } = JSON.parse(request.requestBody) as { language: Language }

            if (language !== 'pt-BR' && language !== 'en-US') {
                return new Response(400, {}, { error: 'Invalid language' })
            }

            preferences.language = language
            localStorage.setItem('language', language);

            return { language }
        })

        this.get('/theme', () => ({ theme: preferences.theme }))

        this.put('/theme', (_schema, request) => {
            const { theme } = JSON.parse(request.requestBody) as { theme: Theme }

            if (theme !== 'light' && theme !== 'dark') {
                return new Response(400, {}, { error: 'Invalid theme' })
            }

            preferences.theme = theme
            localStorage.setItem('theme', theme);
            return { theme }
        })
    },
})
