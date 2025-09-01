/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Sage Green Centered Earthy Palette
        'sage': '#9CAF88',       // Main sage green (your favorite)
        'sage-light': '#B8C9A8', // Lighter sage
        'sage-dark': '#7A8B6A',  // Darker sage
        'earth': '#8B7355',      // Warm earth brown
        'stone': '#A8A8A8',      // Neutral stone gray
        'cream': '#F5F5DC',      // Warm cream
        'charcoal': '#2F2F2F',   // Deep charcoal for text
        'warm-white': '#FAFAF0', // Warm white
        
        // One fun accent color
        'coral': '#FF7F50',      // Fun coral accent
        
        // Supporting earthy tones
        'moss': '#6B8E23',       // Deep moss green
        'clay': '#CD853F',       // Warm clay brown
        'sand': '#F4A460',       // Sand beige
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'inter': ['Inter', 'sans-serif'],
        'dancing': ['Dancing Script', 'cursive'],
        'crimson': ['Crimson Text', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
