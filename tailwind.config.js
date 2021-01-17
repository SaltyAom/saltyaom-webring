module.exports = {
    purge: {
        preserveHtmlElements: false,
        content: ['src/**/*.[j|t]s[x]?']
    },
    darkMode: 'class',
    theme: {
        extend: {
            transitionProperty: {
                ouroboros: 'color, padding'
            }
        }
    },
    variants: {
        extend: {}
    },
    plugins: []
}
