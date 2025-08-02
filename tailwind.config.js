/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // scan tout ton code
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        black: "var(--black)",
        green: "var(--green)",
        grey: "var(--grey)",
        pink: "var(--pink)",
        red: "var(--red)",
        white: "var(--white)",
        yellow: "var(--yellow)",
      },
      fontFamily: {
        epilogue: ["Epilogue", "Helvetica", "sans-serif"],
        // Pour héritage Figma, tu peux aussi rajouter les variantes si besoin :
        body: ["Epilogue", "Helvetica", "sans-serif"],
        h1: ["Epilogue", "Helvetica", "sans-serif"],
        h2: ["Epilogue", "Helvetica", "sans-serif"],
        h3: ["Epilogue", "Helvetica", "sans-serif"],
        subtitle: ["Epilogue", "Helvetica", "sans-serif"],
      },
      fontSize: {
        base: "17px",
        h1: "100px",
        "h1-mobile": "65px",
        h2: "32px",
        h3: "27px",
        subtitle: "20px",
      },
      lineHeight: {
        h2: "42px",
        h3: "42px",
        subtitle: "30px",
        base: "27px",
      },
      borderRadius: {
        lg: "20px",
        md: "14px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
