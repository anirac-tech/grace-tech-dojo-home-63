
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				serif: ['Playfair Display', 'serif'],
				mono: ['Source Code Pro', 'monospace'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
                // Updated dojo palette with richer, more thematic colors
                dojo: {
                    '50': '#f4f6fc',
                    '100': '#e8ecf8',
                    '200': '#d5dcf3',
                    '300': '#b4c1ec', // Grace - softer, elegant blue-purple
                    '400': '#95a5e2',
                    '500': '#7186d9', // Tech - vibrant medium blue-purple
                    '600': '#5968cc',
                    '700': '#4d54b9', // Dojo - deeper, more authoritative blue-purple
                    '800': '#404689',
                    '900': '#383c6d',
                    '950': '#22253e',
                },
                // New color groups specifically representing Grace, Tech and Dojo
                grace: {
                    '100': '#f5effc',
                    '200': '#ead9f9',
                    '300': '#d9b8f2',
                    '400': '#c28fe6',
                    '500': '#a961d4', // Primary Grace color
                    '600': '#9442bb',
                    '700': '#7e349d',
                    '800': '#652c7e',
                    '900': '#4e2460',
                },
                tech: {
                    '100': '#e9f7fe',
                    '200': '#c7ebfd',
                    '300': '#93d8fa',
                    '400': '#5abef5',
                    '500': '#2e9ceb', // Primary Tech color
                    '600': '#1b7fd0',
                    '700': '#1a63ab',
                    '800': '#1c5289',
                    '900': '#1c4671',
                },
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'expandWidth': {
					'0%': { width: '0%' },
					'100%': { width: '100%' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 6s ease-in-out infinite',
			},
			perspective: {
				'1000': '1000px',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
