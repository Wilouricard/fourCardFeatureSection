/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}", "index.html"],
  theme: {
    extend: {},
    colors: {
      'Red': 'hsl(0, 78%, 62%)',
      'Cyan': 'hsl(180, 62%, 55%)',       
      'Orange': 'hsl(34, 97%, 64%)',
      'Blue': 'hsl(212, 86%, 64%)',
      'white': '#FFFFFF',
      'Very-Dark-Blue': 'hsl(234, 12%, 34%)',
      'Grayish-Blue': 'hsl(229, 6%, 66%)',
      'Very-Light-Gray': 'hsl(0, 0%, 98%)',
    }
  },
  plugins: [],
}
