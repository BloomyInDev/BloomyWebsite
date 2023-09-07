/** @type {import('tailwindcss').Config} */
const disabledCss = {
    'code::before': false,
    'code::after': false,
    pre: false,
    code: false,
    'pre code': false
}

module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            typography: {
                DEFAULT: { css: disabledCss },
                sm: { css: disabledCss },
                lg: { css: disabledCss },
                xl: { css: disabledCss },
                '2xl': { css: disabledCss }
            }
        }
    },
    plugins: [require('@tailwindcss/typography')]
}
