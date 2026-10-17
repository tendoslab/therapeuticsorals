// Build: npx tailwindcss@3.4.5 -c build/tailwind.config.js -i build/input.css -o css/tailwind.css --minify
module.exports = {
    content: ['./index.html', './js/**/*.js'],
    // Feedback colours are built from a variable (bg-${color}-100), so list them explicitly.
    safelist: [{ pattern: /(bg|text)-(green|amber|red)-(100|800)/ }],
    theme: { extend: {} }
};
