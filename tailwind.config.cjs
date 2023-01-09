const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  darkMode: 'media',
  theme: {
    extend: {
      animation: {
          "scale-up-center": "scale-up-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000)   both"
      },
      keyframes: {
          "scale-up-center": {
              "0%": {
                  transform: "scale(.5)"
              },
              to: {
                  transform: "scale(1)"
              }
          }
      }
  },
  animation: {
    "fade-in": "fade-in 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000)   both"
},
keyframes: {
    "fade-in": {
        "0%": {
            opacity: "0"
        },
        to: {
            opacity: "1"
        }
    }
}
  },

  plugins: [ require('@tailwindcss/typography'),],
};

module.exports = config;
