module.exports = {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        tertiary: {
          DEFAULT: "hsl(var(--tertiary))",
          foreground: "hsl(var(--tertiary-foreground))",
        },
        neutral: {
          DEFAULT: "hsl(var(--neutral))",
          foreground: "hsl(var(--neutral-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        success: {
          DEFAULT: "hsl(var(--success))",
          foreground: "hsl(var(--success-foreground))",
        },
        warning: {
          DEFAULT: "hsl(var(--warning))",
          foreground: "hsl(var(--warning-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        gray: {
          50: "hsl(0, 0%, 98%)",
          100: "hsl(210, 20%, 96%)",
          200: "hsl(210, 15%, 90%)",
          300: "hsl(210, 11%, 80%)",
          400: "hsl(210, 10%, 68%)",
          500: "hsl(210, 9%, 54%)",
          600: "hsl(210, 11%, 40%)",
          700: "hsl(210, 13%, 32%)",
          800: "hsl(210, 14%, 20%)",
          900: "hsl(210, 15%, 12%)",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        headline: ['"DM Sans"', "sans-serif"],
        mono: ['"IBM Plex Mono"', "monospace"],
      },
      spacing: {
        '4': '1rem',
        '8': '2rem',
        '12': '3rem',
        '16': '4rem',
        '24': '6rem',
        '32': '8rem',
        '48': '12rem',
        '64': '16rem',
      },
      borderRadius: {
        lg: "12px",
        md: "8px",
        sm: "4px",
      },
      backgroundImage: {
        'gradient-1': 'linear-gradient(135deg, hsl(192, 72%, 42%) 0%, hsl(192, 55%, 50%) 100%)',
        'gradient-2': 'linear-gradient(135deg, hsl(220, 15%, 32%) 0%, hsl(210, 16%, 24%) 100%)',
        'button-border-gradient': 'linear-gradient(90deg, hsl(192, 72%, 42%) 0%, hsl(192, 55%, 50%) 100%)',
      },
    },
  },
  plugins: [],
}
