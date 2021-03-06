module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'subscribe-bg': 'url("/assets/images/subscribe-v2.webp")',
      },
      colors: {
        primary: '#0b1426',
        secondary: '#3b9efa',
        dark: '#0f1c39',
        success: '#00a68c'
      }
    },
  },
  plugins: [],
}
