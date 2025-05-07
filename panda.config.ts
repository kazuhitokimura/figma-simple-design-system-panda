import { defineConfig } from "@pandacss/dev";
import { textStyles } from "./text-styles";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/components/**/*.{ts,tsx,js,jsx}", "./src/app/**/*.{ts,tsx,js,jsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      textStyles,
      tokens: {
        colors: {
          slate: {
            100: { value: '#f2f2f2' },
            200: { value: '#e3e3e3' },
            300: { value: '#cdcdcd' },
            400: { value: '#b1b1b1' },
            500: { value: '#939393' },
            600: { value: '#767676' },
            700: { value: '#5a5a5a' },
            800: { value: '#424242' },
            900: { value: '#303030' },
            1000: { value: '#242424' }
          },
          white: {
            100: { value: 'rgba(255, 255, 255, 0.05)' },
            200: { value: 'rgba(255, 255, 255, 0.1)' },
            300: { value: 'rgba(255, 255, 255, 0.2)' },
            400: { value: 'rgba(255, 255, 255, 0.4)' },
            500: { value: 'rgba(255, 255, 255, 0.7)' },
            600: { value: 'rgba(255, 255, 255, 0.8)' },
            700: { value: 'rgba(255, 255, 255, 0.85)' },
            800: { value: 'rgba(255, 255, 255, 0.9)' },
            900: { value: 'rgba(255, 255, 255, 0.95)' },
            1000: { value: '#ffffff' }
          },
          brand: {
            100: { value: '#f5f5f5' },
            200: { value: '#e6e6e6' },
            300: { value: '#d9d9d9' },
            400: { value: '#b3b3b3' },
            500: { value: '#757575' },
            600: { value: '#444444' },
            700: { value: '#383838' },
            800: { value: '#2c2c2c' },
            900: { value: '#1e1e1e' },
            1000: { value: '#111111' }
          },
          red: {
            100: { value: '#fde8e7' },
            200: { value: '#fdd3d0' },
            300: { value: '#fcb9b4' },
            400: { value: '#f4766a' },
            500: { value: '#ec2217' },
            600: { value: '#c00f0c' },
            700: { value: '#900b09' },
            800: { value: '#690806' },
            900: { value: '#4d0604' },
            1000: { value: '#300302' }
          },
          yellow: {
            100: { value: '#fffceb' },
            200: { value: '#fff1c2' },
            300: { value: '#ffe8a3' },
            400: { value: '#e8b931' },
            500: { value: '#e6a100' },
            600: { value: '#bf8500' },
            700: { value: '#976800' },
            800: { value: '#684800' },
            900: { value: '#523800' },
            1000: { value: '#402900' }
          },
          green: {
            100: { value: '#ebffef' },
            200: { value: '#d0f7d8' },
            300: { value: '#b0f4c0' },
            400: { value: '#85e09c' },
            500: { value: '#14ae5c' },
            600: { value: '#009951' },
            700: { value: '#008043' },
            800: { value: '#005c2d' },
            900: { value: '#004723' },
            1000: { value: '#002d16' }
          },
          black: {
            100: { value: 'rgba(12, 12, 13, 0.05)' },
            200: { value: 'rgba(12, 12, 13, 0.1)' },
            300: { value: 'rgba(12, 12, 13, 0.2)' },
            400: { value: 'rgba(12, 12, 13, 0.4)' },
            500: { value: 'rgba(12, 12, 13, 0.7)' },
            600: { value: 'rgba(12, 12, 13, 0.8)' },
            700: { value: 'rgba(12, 12, 13, 0.85)' },
            800: { value: 'rgba(12, 12, 13, 0.9)' },
            900: { value: 'rgba(12, 12, 13, 0.95)' },
            1000: { value: '#0c0c0d' }
          },
          pink: {
            100: { value: '#fcf1fc' },
            200: { value: '#fae1fa' },
            300: { value: '#f5c0f5' },
            400: { value: '#f19edc' },
            500: { value: '#ea3fb8' },
            600: { value: '#d732a8' },
            700: { value: '#ba2a92' },
            800: { value: '#8a226b' },
            900: { value: '#57184b' },
            1000: { value: '#3f1536' }
          },
          gray: {
            100: { value: '#f5f5f5' },
            200: { value: '#e6e6e6' },
            300: { value: '#d9d9d9' },
            400: { value: '#b3b3b3' },
            500: { value: '#757575' },
            600: { value: '#444444' },
            700: { value: '#383838' },
            800: { value: '#2c2c2c' },
            900: { value: '#1e1e1e' },
            1000: { value: '#111111' }
          }
        },
        spacing: {
          0: { value: '0px' },
          50: { value: '2px' },
          100: { value: '4px' },
          150: { value: '6px' },
          200: { value: '8px' },
          300: { value: '12px' },
          400: { value: '16px' },
          600: { value: '24px' },
          800: { value: '32px' },
          1200: { value: '48px' },
          1600: { value: '64px' },
          2400: { value: '96px' },
          4000: { value: '160px' },
          'negative-50': { value: '-2px' },
          'negative-100': { value: '-4px' },
          'negative-150': { value: '-6px' },
          'negative-200': { value: '-8px' },
          'negative-300': { value: '-12px' },
          'negative-400': { value: '-16px' },
          'negative-600': { value: '-24px' },
          'negative-800': { value: '-32px' },
          'negative-1200': { value: '-48px' },
          'negative-1600': { value: '-64px' },
          'negative-2400': { value: '-96px' },
          'negative-4000': { value: '-160px' }
        },
        sizes: {
          icon: {
            small: { value: '24px' },
            medium: { value: '32px' },
            large: { value: '40px' }
          }
        },
        radii: {
          100: { value: '4px' },
          200: { value: '8px' },
          400: { value: '16px' },
          full: { value: '9999px' }
        },
        borderWidths: {
          border: { value: '1px' },
          'focus-ring': { value: '2px' }
        },
        blurs: {
          100: { value: '4px' },
          'layer': { value: '2px' },
          'background': { value: '2px' }
        },
        zIndex: {
          0: { value: '0' },
          25: { value: '1' },
          100: { value: '4' },
          200: { value: '8' },
          400: { value: '16' },
          800: { value: '32' },
          1200: { value: '48' },
          'negative-25': { value: '-1' },
          'negative-100': { value: '-4' },
          'negative-200': { value: '-8' },
          'negative-400': { value: '-16' },
          'negative-800': { value: '-32' },
          'negative-1200': { value: '-48' }
        },
        shadows: {
          'drop-shadow-100': { value: '0px 1px 4px 0px rgba(12,12,13,0.05)' },
          'drop-shadow-200': { value: '0px 1px 4px 0px rgba(12,12,13,0.05), 0px 1px 4px 0px rgba(12,12,13,0.10)' },
          'drop-shadow-300': { value: '0px 4px 4px -1px rgba(12,12,13,0.05), 0px 4px 4px -1px rgba(12,12,13,0.10)' },
          'drop-shadow-400': { value: '0px 4px 4px -4px rgba(12,12,13,0.05), 0px 16px 32px -4px rgba(12,12,13,0.10)' },
          'drop-shadow-500': { value: '0px 4px 4px -4px rgba(12,12,13,0.05), 0px 16px 16px -8px rgba(12,12,13,0.10)' },
          'drop-shadow-600': { value: '0px 16px 32px -8px rgba(12,12,13,0.40)' },
          'inner-shadow-100': { value: '0px 1px 4px 0px rgba(12,12,13,0.05) inset' },
          'inner-shadow-200': { value: '0px 1px 4px 0px rgba(12,12,13,0.05) inset' },
          'inner-shadow-300': { value: '0px 4px 4px -1px rgba(12,12,13,0.05) inset' },
          'inner-shadow-400': { value: '0px 16px 32px -4px rgba(12,12,13,0.10) inset' },
          'inner-shadow-500': { value: '0px 16px 16px -8px rgba(12,12,13,0.10) inset' },
          'inner-shadow-600': { value: '0px 16px 32px -8px rgba(12,12,13,0.40) inset' }
        },
        fonts: {
          sans: { value: 'Inter' },
          serif: { value: 'Noto Serif' },
          mono: { value: 'Roboto Mono' }
        },
        fontWeights: {
          thin: { value: '100' },
          extraLight: { value: '200' },
          light: { value: '300' },
          regular: { value: '400' },
          medium: { value: '500' },
          semibold: { value: '600' },
          bold: { value: '700' },
          extraBold: { value: '800' },
          black: { value: '900' }
        },
        fontSizes: {
          scale01: { value: '12px' },
          scale02: { value: '14px' },
          scale03: { value: '16px' },
          scale04: { value: '20px' },
          scale05: { value: '24px' },
          scale06: { value: '32px' },
          scale07: { value: '40px' },
          scale08: { value: '48px' },
          scale09: { value: '64px' },
          scale10: { value: '72px' }
        },
      },
      semanticTokens: {
        colors: {
          // Background
          background: {
            default: { value: { base: '{colors.white.1000}', _dark: '{colors.gray.900}' } },
            secondary: { value: { base: '{colors.gray.100}', _dark: '{colors.gray.800}' } },
            tertiary: { value: { base: '{colors.gray.300}', _dark: '{colors.gray.600}' } },
            defaultHover: { value: { base: '{colors.gray.100}', _dark: '{colors.gray.700}' } },
            brand: {
              default: { value: { base: '{colors.brand.800}', _dark: '{colors.brand.100}' } },
              secondary: { value: { base: '{colors.brand.200}', _dark: '{colors.brand.600}' } },
              hover: { value: { base: '{colors.brand.900}', _dark: '{colors.brand.300}' } },
              tertiary: { value: { base: '{colors.brand.100}', _dark: '{colors.brand.600}' } },
              secondaryHover: { value: { base: '{colors.brand.300}', _dark: '{colors.brand.500}' } },
              tertiaryHover: { value: { base: '{colors.brand.200}', _dark: '{colors.brand.800}' } },
            },
            positive: {
              default: { value: { base: '{colors.green.500}', _dark: '{colors.green.700}' } },
              secondary: { value: { base: '{colors.green.200}', _dark: '{colors.green.800}' } },
              hover: { value: { base: '{colors.green.600}', _dark: '{colors.green.800}' } },
              tertiary: { value: { base: '{colors.green.100}', _dark: '{colors.green.900}' } },
              secondaryHover: { value: { base: '{colors.green.300}', _dark: '{colors.green.900}' } },
              tertiaryHover: { value: { base: '{colors.green.200}', _dark: '{colors.green.1000}' } },
            },
            warning: {
              default: { value: { base: '{colors.yellow.400}', _dark: '{colors.yellow.400}' } },
              secondary: { value: { base: '{colors.yellow.200}', _dark: '{colors.yellow.800}' } },
              hover: { value: { base: '{colors.yellow.500}', _dark: '{colors.yellow.500}' } },
              tertiary: { value: { base: '{colors.yellow.100}', _dark: '{colors.yellow.900}' } },
              secondaryHover: { value: { base: '{colors.yellow.300}', _dark: '{colors.yellow.900}' } },
              tertiaryHover: { value: { base: '{colors.yellow.200}', _dark: '{colors.yellow.1000}' } },
            },
            danger: {
              default: { value: { base: '{colors.red.500}', _dark: '{colors.red.600}' } },
              secondary: { value: { base: '{colors.red.200}', _dark: '{colors.red.800}' } },
              hover: { value: { base: '{colors.red.600}', _dark: '{colors.red.700}' } },
              tertiary: { value: { base: '{colors.red.100}', _dark: '{colors.red.900}' } },
              secondaryHover: { value: { base: '{colors.red.300}', _dark: '{colors.red.900}' } },
              tertiaryHover: { value: { base: '{colors.red.200}', _dark: '{colors.red.1000}' } },
            },
            disabled: { value: { base: '{colors.brand.300}', _dark: '{colors.brand.700}' } },
            neutral: {
              default: { value: { base: '{colors.slate.700}', _dark: '{colors.slate.400}' } },
              hover: { value: { base: '{colors.slate.800}', _dark: '{colors.slate.500}' } },
              secondary: { value: { base: '{colors.slate.300}', _dark: '{colors.slate.900}' } },
              secondaryHover: { value: { base: '{colors.slate.400}', _dark: '{colors.slate.1000}' } },
              tertiary: { value: { base: '{colors.slate.200}', _dark: '{colors.slate.900}' } },
              tertiaryHover: { value: { base: '{colors.slate.300}', _dark: '{colors.slate.1000}' } },
            },
            utilities: {
              scrim: { value: { base: 'rgba(255,255,255,0.8)', _dark: 'rgba(0,0,0,0.8)' } },
              overlay: { value: { base: 'rgba(0,0,0,0.5)', _dark: 'rgba(0,0,0,0.5)' } },
              blanket: { value: { base: 'rgba(0,0,0,0.7)', _dark: 'rgba(0,0,0,0.7)' } },
              measurement: { value: { base: '{colors.pink.200}', _dark: '{colors.pink.800}' } },
            },
          },
          // Text
          text: {
            default: { value: { base: '{colors.gray.900}', _dark: '{colors.white.1000}' } },
            secondary: { value: { base: '{colors.gray.500}', _dark: '{colors.white.500}' } },
            tertiary: { value: { base: '{colors.gray.400}', _dark: '{colors.white.400}' } },
            brand: {
              default: { value: { base: '{colors.brand.800}', _dark: '{colors.brand.100}' } },
              secondary: { value: { base: '{colors.brand.600}', _dark: '{colors.brand.300}' } },
              tertiary: { value: { base: '{colors.brand.500}', _dark: '{colors.brand.400}' } },
              onBrand: { value: { base: '{colors.brand.100}', _dark: '{colors.brand.900}' } },
              onBrandSecondary: { value: { base: '{colors.brand.900}', _dark: '{colors.brand.100}' } },
              onBrandTertiary: { value: { base: '{colors.brand.800}', _dark: '{colors.brand.100}' } },
            },
            positive: {
              default: { value: { base: '{colors.green.800}', _dark: '{colors.green.200}' } },
              secondary: { value: { base: '{colors.green.600}', _dark: '{colors.green.400}' } },
              tertiary: { value: { base: '{colors.green.500}', _dark: '{colors.green.600}' } },
              onPositive: { value: { base: '{colors.green.100}', _dark: '{colors.green.100}' } },
              onPositiveSecondary: { value: { base: '{colors.green.800}', _dark: '{colors.green.100}' } },
              onPositiveTertiary: { value: { base: '{colors.green.800}', _dark: '{colors.green.100}' } },
            },
            warning: {
              default: { value: { base: '{colors.yellow.900}', _dark: '{colors.yellow.200}' } },
              secondary: { value: { base: '{colors.yellow.700}', _dark: '{colors.yellow.400}' } },
              tertiary: { value: { base: '{colors.yellow.600}', _dark: '{colors.yellow.600}' } },
              onWarning: { value: { base: '{colors.yellow.1000}', _dark: '{colors.yellow.1000}' } },
              onWarningSecondary: { value: { base: '{colors.yellow.800}', _dark: '{colors.yellow.100}' } },
              onWarningTertiary: { value: { base: '{colors.yellow.900}', _dark: '{colors.yellow.100}' } },
            },
            danger: {
              default: { value: { base: '{colors.red.700}', _dark: '{colors.red.200}' } },
              secondary: { value: { base: '{colors.red.600}', _dark: '{colors.red.400}' } },
              tertiary: { value: { base: '{colors.red.500}', _dark: '{colors.red.500}' } },
              onDanger: { value: { base: '{colors.red.100}', _dark: '{colors.red.100}' } },
              onDangerSecondary: { value: { base: '{colors.red.700}', _dark: '{colors.red.100}' } },
              onDangerTertiary: { value: { base: '{colors.red.700}', _dark: '{colors.red.100}' } },
            },
            disabled: { value: { base: '{colors.brand.400}', _dark: '{colors.brand.500}' } },
            neutral: {
              default: { value: { base: '{colors.slate.900}', _dark: '{colors.slate.200}' } },
              secondary: { value: { base: '{colors.slate.700}', _dark: '{colors.slate.300}' } },
              tertiary: { value: { base: '{colors.slate.600}', _dark: '{colors.slate.400}' } },
              onNeutral: { value: { base: '{colors.slate.100}', _dark: '{colors.slate.1000}' } },
              onNeutralSecondary: { value: { base: '{colors.slate.900}', _dark: '{colors.slate.100}' } },
              onNeutralTertiary: { value: { base: '{colors.slate.800}', _dark: '{colors.slate.100}' } },
            },
            utilities: {
              textOnOverlay: { value: { base: '{colors.black.1000}', _dark: '{colors.white.1000}' } },
              textOnMeasurement: { value: { base: '{colors.pink.800}', _dark: '{colors.pink.200}' } },
            },
          },
          // Icon
          icon: {
            default: { value: { base: '{colors.gray.900}', _dark: '{colors.white.1000}' } },
            secondary: { value: { base: '{colors.gray.500}', _dark: '{colors.white.500}' } },
            tertiary: { value: { base: '{colors.gray.400}', _dark: '{colors.white.400}' } },
            brand: {
              default: { value: { base: '{colors.brand.800}', _dark: '{colors.brand.100}' } },
              secondary: { value: { base: '{colors.brand.600}', _dark: '{colors.brand.300}' } },
              tertiary: { value: { base: '{colors.brand.500}', _dark: '{colors.brand.400}' } },
              onBrand: { value: { base: '{colors.brand.100}', _dark: '{colors.brand.900}' } },
              onBrandSecondary: { value: { base: '{colors.brand.900}', _dark: '{colors.brand.100}' } },
              onBrandTertiary: { value: { base: '{colors.brand.800}', _dark: '{colors.brand.100}' } },
            },
            positive: {
              default: { value: { base: '{colors.green.800}', _dark: '{colors.green.200}' } },
              secondary: { value: { base: '{colors.green.600}', _dark: '{colors.green.400}' } },
              tertiary: { value: { base: '{colors.green.500}', _dark: '{colors.green.600}' } },
              onPositive: { value: { base: '{colors.green.100}', _dark: '{colors.green.100}' } },
              onPositiveSecondary: { value: { base: '{colors.green.800}', _dark: '{colors.green.100}' } },
              onPositiveTertiary: { value: { base: '{colors.green.800}', _dark: '{colors.green.100}' } },
            },
            warning: {
              default: { value: { base: '{colors.yellow.900}', _dark: '{colors.yellow.200}' } },
              secondary: { value: { base: '{colors.yellow.700}', _dark: '{colors.yellow.400}' } },
              tertiary: { value: { base: '{colors.yellow.600}', _dark: '{colors.yellow.600}' } },
              onWarning: { value: { base: '{colors.yellow.1000}', _dark: '{colors.yellow.1000}' } },
              onWarningSecondary: { value: { base: '{colors.yellow.800}', _dark: '{colors.yellow.100}' } },
              onWarningTertiary: { value: { base: '{colors.yellow.900}', _dark: '{colors.yellow.100}' } },
            },
            danger: {
              default: { value: { base: '{colors.red.700}', _dark: '{colors.red.200}' } },
              secondary: { value: { base: '{colors.red.600}', _dark: '{colors.red.400}' } },
              tertiary: { value: { base: '{colors.red.500}', _dark: '{colors.red.500}' } },
              onDanger: { value: { base: '{colors.red.100}', _dark: '{colors.red.100}' } },
              onDangerSecondary: { value: { base: '{colors.red.700}', _dark: '{colors.red.100}' } },
              onDangerTertiary: { value: { base: '{colors.red.700}', _dark: '{colors.red.100}' } },
            },
            disabled: { value: { base: '{colors.brand.400}', _dark: '{colors.brand.500}' } },
            neutral: {
              default: { value: { base: '{colors.slate.900}', _dark: '{colors.slate.200}' } },
              secondary: { value: { base: '{colors.slate.700}', _dark: '{colors.slate.300}' } },
              tertiary: { value: { base: '{colors.slate.600}', _dark: '{colors.slate.400}' } },
              onNeutral: { value: { base: '{colors.slate.100}', _dark: '{colors.slate.1000}' } },
              onNeutralSecondary: { value: { base: '{colors.slate.900}', _dark: '{colors.slate.100}' } },
              onNeutralTertiary: { value: { base: '{colors.slate.800}', _dark: '{colors.slate.100}' } },
            },
            utilities: {
              iconOnMeasurement: { value: { base: '{colors.pink.800}', _dark: '{colors.pink.200}' } },
              icon: { value: { base: '{colors.pink.600}', _dark: '{colors.pink.400}' } },
            },
          },
          // Border
          border: {
            default: { value: { base: '{colors.gray.300}', _dark: '{colors.gray.600}' } },
            secondary: { value: { base: '{colors.gray.500}', _dark: '{colors.gray.500}' } },
            brand: {
              default: { value: { base: '{colors.brand.800}', _dark: '{colors.brand.100}' } },
              secondary: { value: { base: '{colors.brand.600}', _dark: '{colors.brand.300}' } },
              tertiary: { value: { base: '{colors.brand.500}', _dark: '{colors.brand.400}' } },
            },
            positive: {
              default: { value: { base: '{colors.green.800}', _dark: '{colors.green.200}' } },
              secondary: { value: { base: '{colors.green.600}', _dark: '{colors.green.400}' } },
              tertiary: { value: { base: '{colors.green.500}', _dark: '{colors.green.600}' } },
            },
            warning: {
              default: { value: { base: '{colors.yellow.900}', _dark: '{colors.yellow.200}' } },
              secondary: { value: { base: '{colors.yellow.700}', _dark: '{colors.yellow.400}' } },
              tertiary: { value: { base: '{colors.yellow.600}', _dark: '{colors.yellow.600}' } },
            },
            danger: {
              default: { value: { base: '{colors.red.700}', _dark: '{colors.red.200}' } },
              secondary: { value: { base: '{colors.red.600}', _dark: '{colors.red.400}' } },
              tertiary: { value: { base: '{colors.red.500}', _dark: '{colors.red.500}' } },
            },
            disabled: { value: { base: '{colors.brand.400}', _dark: '{colors.brand.500}' } },
            neutral: {
              default: { value: { base: '{colors.slate.900}', _dark: '{colors.slate.100}' } },
              secondary: { value: { base: '{colors.slate.600}', _dark: '{colors.slate.500}' } },
              tertiary: { value: { base: '{colors.slate.400}', _dark: '{colors.slate.600}' } },
            },
            utilities: {
              measurement: { value: { base: '{colors.pink.400}', _dark: '{colors.pink.600}' } },
              swatch: { value: { base: 'rgba(0,0,0,0.24)', _dark: 'rgba(255,255,255,0.24)' } },
            },
          },
        }
      },
      breakpoints: {
        mobile: '375px',
        tablet: '768px',
        desktop: '1200px'
      }
    }
  },

  // The output directory for your css system
  outdir: "styled-system",
});
