module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#FFD700', // Oro oscuro
        secondary: '#C5A20F', // Oro más oscuro
        dark: '#0F0F0F', // Negro no puro
      },
      fontFamily: {
        heading: ['"Oswald"', 'sans-serif'], // Fuente para títulos
        body: ['"Open Sans"', 'sans-serif'],
      },
      animation: {
        'float1': 'float1 15s ease-in-out infinite',
        'float2': 'float2 18s ease-in-out infinite',
        'float3': 'float3 20s ease-in-out infinite',
        'float4': 'float2 12s ease-in-out infinite',
        'float5': 'float5 16s ease-in-out infinite',
        'logo-float': 'logo-float 4s ease-in-out infinite',
      },
      keyframes: {
        float1: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(10deg)' },
        },
        float2: {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
          '33%': { transform: 'translate(10px, -15px) rotate(-5deg)' },
          '66%': { transform: 'translate(-5px, 10px) rotate(5deg)' },
        },
        float3: {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
          '25%': { transform: 'translate(-10px, 15px) rotate(10deg)' },
          '75%': { transform: 'translate(15px, 10px) rotate(-10deg)' },
        },
        float5: {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
          '20%': { transform: 'translate(8px, -12px) rotate(5deg)' },
          '40%': { transform: 'translate(-5px, 8px) rotate(-8deg)' },
          '60%': { transform: 'translate(10px, 5px) rotate(3deg)' },
          '80%': { transform: 'translate(-8px, -5px) rotate(-5deg)' },
        },
        'logo-float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      boxShadow: {
        'glow-gold': '0 0 15px 2px rgba(230, 198, 86, 0.3)',
      },
      dropShadow: {
        'glow': '0 0 8px rgba(230, 198, 86, 0.5)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}