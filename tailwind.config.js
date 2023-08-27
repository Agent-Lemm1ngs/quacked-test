/** @type {import('tailwindcss').Config} */
// npx tailwindcss -i ./src/input.css -o ./src/dist/output.css --watch
module.exports = {
  content: ["src/**/*.js", "src/*.html"],
  theme: {
    extend: {
      colors: {
        primary: "#ffc700",
        secondary: "#d41d6c"
      }
    }
  }
};
