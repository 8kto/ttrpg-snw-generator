/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,ts}'],
  plugins: [
    require('daisyui'),
  ],
  // daisyUI config (optional - here are the default values)
  daisyui: {
    themes: [
      "light",
      "dark",
      "retro",
      {
        emerald: {
          ...require("daisyui/src/theming/themes")["emerald"],
          "--rounded-btn": "0.25rem", // border radius rounded-btn utility class, used in buttons and similar element
          "--rounded-box": "0.25rem",
        },
      },
    ], // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
  theme: {
    extend: {
      colors: {
        gen: {
          50: '#f5f4f1',
          100: '#e6e2db',
          200: '#cec7ba',
          300: '#b2a592',
          400: '#9e8c77',
          500: '#8d7965',
          600: '#786456',
          700: '#614f47',
          800: '#54453f',
          900: '#4a3d39',
          950: '#29201f',
        },
      },
      fontFamily: {
        'averia-serif': ['"Averia Serif Libre"', 'serif'],
      },
      fontSize: {
        xxs: '0.625rem',
        xxxs: '0.5rem',
      },
    },
  },
}
