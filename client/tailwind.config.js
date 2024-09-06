/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('/public/assets/hero-img-main.jpg')",
        'navbar': "url('/public/assets/hero-nav.jpg')",
        'login':"url('/public/assets/login-bg.jpg')"
       
      },
    }
  },
  plugins: [],
}

