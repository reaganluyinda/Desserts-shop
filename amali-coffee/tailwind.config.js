/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        redhat: ['"Red Hat Display"', "sans-serif"], // You can use 'Red Hat Text' if you want
      },
    },
  },
  plugins: [],
};
