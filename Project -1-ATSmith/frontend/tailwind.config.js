/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
  theme: {
    extend: {
      colors: {
        primary: '#2563EB', // Professional Blue
        secondary: '#1E293B', // Dark Slate
        accent: '#22C55E', // Success/ATS match score
        background: '#F8FAFC', // Light gray/white
        textPrimary: '#0F172A', // Dark text
      },
    },
  },
  plugins: [],
};
