/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
    i18n: {
        locales: ['en', 'es', 'it'],
        defaultLocale: 'en',
        // localePath: path.resolve('./locales') // Asegúrate de que el camino a tus archivos de locales sea correcto
      },
}

module.exports = nextConfig
